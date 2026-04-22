/**
 * Netlify Function: serdipay-callback
 *
 * Endpoint public (via rewrite défini dans netlify.toml) :
 *   https://<votre-domaine>/api/serdipay/callback
 *
 * Endpoint de test GET (via rewrite) :
 *   https://<votre-domaine>/api/serdipay/callback/test
 *
 * Méthodes acceptées :
 *   - POST  -> callback réel de SerdiPay
 *   - GET   -> route de santé / test (renvoie 200 OK)
 *   - OPTIONS -> CORS preflight
 *
 * Variables d'environnement Netlify attendues :
 *   - SERDIPAY_WEBHOOK_SECRET (optionnel mais recommandé)
 *       Si défini, le header "x-serdipay-signature" (ou "x-webhook-secret")
 *       reçu doit correspondre à cette valeur, sinon -> 401.
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-serdipay-signature, x-webhook-secret",
};

const json = (statusCode, body) => ({
  statusCode,
  headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  // Route de test GET : /api/serdipay/callback/test (et tout GET en général)
  if (event.httpMethod === "GET") {
    return json(200, {
      ok: true,
      service: "serdipay-callback",
      message:
        "Endpoint SerdiPay actif. Utilisez POST pour envoyer un callback.",
      timestamp: new Date().toISOString(),
      path: event.path,
    });
  }

  // Toute autre méthode que POST -> 405
  if (event.httpMethod !== "POST") {
    return json(405, {
      ok: false,
      error: "Method Not Allowed",
      allowed: ["POST", "GET", "OPTIONS"],
    });
  }

  try {
    // 1. Vérification du secret webhook (si configuré)
    const expectedSecret = process.env.SERDIPAY_WEBHOOK_SECRET;
    if (expectedSecret) {
      const headers = event.headers || {};
      const receivedSecret =
        headers["x-serdipay-signature"] ||
        headers["X-Serdipay-Signature"] ||
        headers["x-webhook-secret"] ||
        headers["X-Webhook-Secret"];

      if (!receivedSecret || receivedSecret !== expectedSecret) {
        console.warn("[serdipay-callback] Signature invalide ou manquante");
        return json(401, {
          ok: false,
          error: "Unauthorized: invalid or missing webhook signature",
        });
      }
    }

    // 2. Parsing du body (JSON ou form-urlencoded)
    const rawBody = event.body || "";
    const contentType = (
      event.headers["content-type"] ||
      event.headers["Content-Type"] ||
      ""
    ).toLowerCase();

    let payload = {};
    if (!rawBody) {
      return json(400, { ok: false, error: "Empty request body" });
    }

    try {
      if (contentType.includes("application/json")) {
        payload = JSON.parse(rawBody);
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        payload = Object.fromEntries(new URLSearchParams(rawBody));
      } else {
        // Fallback : essayer JSON
        payload = JSON.parse(rawBody);
      }
    } catch (parseErr) {
      console.error("[serdipay-callback] Impossible de parser le body:", parseErr);
      return json(400, {
        ok: false,
        error: "Invalid body format (expected JSON or form-urlencoded)",
      });
    }

    // 3. Log du payload pour debug
    console.log(
      "[serdipay-callback] Payload reçu:",
      JSON.stringify(payload, null, 2)
    );

    // 4. Vérifier la présence d'une référence de transaction
    const transactionRef =
      payload.transaction_id ||
      payload.transactionId ||
      payload.reference ||
      payload.ref ||
      payload.order_id ||
      payload.orderId;

    if (!transactionRef) {
      console.warn("[serdipay-callback] Référence de transaction manquante");
      return json(400, {
        ok: false,
        error:
          "Missing transaction reference (transaction_id / reference / order_id)",
      });
    }

    // 5. Extraire le statut du paiement
    const status = (payload.status || payload.payment_status || "")
      .toString()
      .toLowerCase();

    console.log(
      `[serdipay-callback] Transaction ${transactionRef} - statut: ${status || "inconnu"}`
    );

    // 6. Traitement métier selon le statut
    //    (à brancher sur votre base de données si besoin)
    switch (status) {
      case "success":
      case "succeeded":
      case "paid":
      case "completed":
        console.log(`[serdipay-callback] ✅ Paiement confirmé: ${transactionRef}`);
        // TODO: marquer la commande comme payée dans la base
        break;
      case "failed":
      case "error":
      case "declined":
        console.log(`[serdipay-callback] ❌ Paiement échoué: ${transactionRef}`);
        // TODO: marquer la commande comme échouée
        break;
      case "pending":
      case "processing":
        console.log(`[serdipay-callback] ⏳ Paiement en attente: ${transactionRef}`);
        break;
      default:
        console.log(
          `[serdipay-callback] Statut non reconnu (${status}) pour ${transactionRef}`
        );
    }

    // 7. Réponse 200 OK pour confirmer la réception à SerdiPay
    return json(200, {
      ok: true,
      received: true,
      transaction_ref: transactionRef,
      status: status || null,
    });
  } catch (err) {
    console.error("[serdipay-callback] Erreur interne:", err);
    return json(500, {
      ok: false,
      error: "Internal Server Error",
      message: err && err.message ? err.message : String(err),
    });
  }
};
