import { cn } from "@/lib/utils"

interface CtaButtonProps {
  text?: string
  href: string
  className?: string
}

export function CtaButton({ text = "Apply Now", href, className }: CtaButtonProps) {
  return (
    <div className={cn("max-w-[984px] mx-auto h-[91px] text-center", className)}>
      <a
        href={href}
        className={cn(
          "inline-block",
          "text-[26px] font-extrabold leading-[39px] tracking-[-0.26px]",
          "text-white bg-[#2fd166]",
          "px-[54px] py-[18px] rounded-[12px]",
          "shadow-[0px_12px_30px_-8px_rgba(37,199,90,0.45)]",
          "no-underline text-center",
          "transition-[transform,background-color] duration-150",
          "hover:scale-[1.02]",
          "cursor-pointer"
        )}
      >
        {text}
      </a>
    </div>
  )
}
