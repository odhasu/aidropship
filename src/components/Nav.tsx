import Image from "next/image";
import { cn } from "@/lib/utils";

export function Nav({ className }: { className?: string }) {
  return (
    <div className="max-w-[984px] mx-auto px-6">
      <header
        className={cn(
          "flex items-center w-full h-[52px] mb-[22px] p-0 bg-transparent",
          className,
        )}
      >
        <Image
          src="/images/logos/logo-header.avif"
          alt="Paid In Full"
          width={208}
          height={52}
          className="h-[52px] w-auto"
          unoptimized
        />
      </header>
    </div>
  );
}
