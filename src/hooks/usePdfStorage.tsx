import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const usePdfStorage = (pdfPath: string, storagePath: string) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePdf = async () => {
      try {
        // Check if file exists in storage
        const { data: existingFile } = await supabase.storage
          .from('documents')
          .list('', { search: storagePath });

        if (!existingFile || existingFile.length === 0) {
          // Download from public folder
          const response = await fetch(pdfPath);
          const blob = await response.blob();
          const file = new File([blob], storagePath, { type: 'application/pdf' });

          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from('documents')
            .upload(storagePath, file, {
              contentType: 'application/pdf',
              upsert: true,
            });

          if (uploadError) {
            console.error('Error uploading PDF:', uploadError);
          }
        }

        // Get public URL
        const { data } = supabase.storage
          .from('documents')
          .getPublicUrl(storagePath);

        setPdfUrl(data.publicUrl);
      } catch (error) {
        console.error('Error initializing PDF:', error);
      } finally {
        setLoading(false);
      }
    };

    initializePdf();
  }, [pdfPath, storagePath]);

  return { pdfUrl, loading };
};
