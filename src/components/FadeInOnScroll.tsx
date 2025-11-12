import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
}

export const FadeInOnScroll = ({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: FadeInOnScrollProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const getDirectionClasses = () => {
    if (!inView) {
      switch (direction) {
        case "up":
          return "translate-y-10";
        case "down":
          return "-translate-y-10";
        case "left":
          return "translate-x-10";
        case "right":
          return "-translate-x-10";
        default:
          return "";
      }
    }
    return "translate-y-0 translate-x-0";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100" : "opacity-0",
        getDirectionClasses(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
