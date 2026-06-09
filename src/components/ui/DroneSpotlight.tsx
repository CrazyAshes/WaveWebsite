import Image from "next/image";
import { assets } from "@/lib/assets";

type DroneSpotlightProps = {
  variant?: "front" | "side";
  className?: string;
  glow?: boolean;
};

export function DroneSpotlight({
  variant = "front",
  className = "",
  glow = true,
}: DroneSpotlightProps) {
  const src = variant === "side" ? assets.droneSide : assets.droneFront;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#030b14] to-[#020711] ${className}`}
    >
      {glow && (
        <div className="absolute inset-[15%] rounded-full bg-[#5eebff]/15 blur-[40px]" />
      )}
      <Image
        src={src}
        alt="WAVE Shark Series drone"
        fill
        className="object-contain p-4 drop-shadow-[0_0_32px_rgba(94,235,255,0.2)]"
        sizes="(max-width: 640px) 50vw, 25vw"
      />
    </div>
  );
}
