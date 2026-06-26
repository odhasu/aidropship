import Image from "next/image"

import { cn } from "@/lib/utils"

interface ProofCardProps {
  src: string
  alt: string
  className?: string
}

export function ProofCard({ src, alt, className }: ProofCardProps) {
  return (
    <div
      className={cn(
        "w-[318px] rounded-[10px] shadow-[0px_2px_10px_0px_rgba(18,20,23,0.06)] bg-[#1a1a1f] overflow-hidden transition-transform hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        unoptimized
        width={318}
        height={0}
        className="w-full h-auto object-cover block"
      />
    </div>
  )
}
