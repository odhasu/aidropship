import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[984px] px-6 text-center bg-transparent">
      {/* Eyebrow */}
      <div className="inline-flex items-center justify-center gap-2.5 text-[14px] font-bold tracking-[0.56px] mb-[14px] text-[#1b9e45]">
        <span className="chev">
          <ChevronDownIcon className="text-[#1b9e45]" />
        </span>
        <span className="etext">
          Aspiring High Ticket Sales Reps In 2026
        </span>
        <span className="chev">
          <ChevronDownIcon className="text-[#1b9e45]" />
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[28px] md:text-[36px] md:text-[50px] md:leading-[59px] font-bold tracking-[-1px] text-[#15171a] max-w-[900px] mx-[42px] mb-[14px] text-center leading-tight">
        See The Exact AI System That 500+ Students Have Used To Land{" "}
        <span className="text-[#1b9e45] underline decoration-[#25c75a] decoration-4 font-bold whitespace-nowrap">
          $8k–$15k/Mo
        </span>{" "}
        Remote Sales Roles
      </h1>

      {/* Sub */}
      <p className="text-[18px] font-semibold leading-[27px] text-[rgba(21,23,26,0.66)] max-w-[760px] mx-auto mb-[26px]">
        &hellip;And How I&rsquo;ve Helped Hundreds Of Beginners Land Unicorn
        Offers
      </p>

      {/* Hero Media */}
      <div className="max-w-[900px] mx-auto mb-10">
        <div
          className={cn(
            "relative overflow-hidden rounded-[14px] bg-black w-full aspect-video",
            "shadow-[0px_24px_60px_-16px_rgba(18,20,23,0.16)]"
          )}
        >
          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
            </div>
            <span className="text-sm font-medium text-white/70">
              Click to watch the video
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
