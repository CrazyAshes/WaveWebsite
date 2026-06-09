import Image from "next/image";

type LogoProps = {
  variant?: "nav" | "hero" | "footer" | "icon";
  className?: string;
  showWordmark?: boolean;
};

const config = {
  nav: {
    width: 67,
    height: 36,
    className: "h-9 w-auto",
  },
  hero: {
    width: 133,
    height: 72,
    className: "h-16 w-auto sm:h-[72px]",
  },
  footer: {
    width: 59,
    height: 32,
    className: "h-8 w-auto",
  },
  icon: {
    width: 59,
    height: 32,
    className: "h-8 w-auto",
  },
};

export function Logo({
  variant = "nav",
  className = "",
  showWordmark = true,
}: LogoProps) {
  const { width, height, className: sizeClass } = config[variant];
  const gap =
    variant === "hero" ? "gap-5" : variant === "footer" ? "gap-2.5" : "gap-3";
  const textClass =
    variant === "hero"
      ? "text-2xl sm:text-3xl tracking-[0.32em]"
      : variant === "footer"
        ? "text-sm tracking-[0.28em]"
        : "text-[15px] tracking-[0.28em]";
  const wordmark = variant !== "icon" && showWordmark;

  return (
    <span
      className={`inline-flex items-center ${gap} ${className}`}
      aria-label="WAVE"
    >
      <Image
        src="/assets/logo-mark.png"
        alt=""
        width={width}
        height={height}
        priority={variant === "hero"}
        className={`${sizeClass} object-contain`}
      />
      {wordmark && (
        <span
          className={`font-medium text-white ${textClass} ${
            variant === "hero" ? "hidden sm:inline" : ""
          }`}
        >
          WAVE
        </span>
      )}
    </span>
  );
}
