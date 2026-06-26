import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn(
        "max-w-[984px] mx-auto px-6",
        "mt-16 pt-7",
        "text-center text-[#15171a] bg-transparent"
      )}
    >
      <img
        src="/images/logos/logo-footer.avif"
        alt="Paid In Full"
      />
      <div className={cn("text-[10px] text-[#15171a]")}>
        Paid In Full – Copyright © 2025.
        <br />All rights reserved.<br />
        <a
          href="/terms-of-use/"
          className={cn(
            "text-[13px] text-[#1b9e45] no-underline",
            "hover:opacity-80"
          )}
        >
          Terms of Service
        </a>
        {" | "}
        <a
          href="/privacy-policy/"
          className={cn(
            "text-[13px] text-[#1b9e45] no-underline",
            "hover:opacity-80"
          )}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
