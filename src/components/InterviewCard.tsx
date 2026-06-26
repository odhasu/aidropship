import { cn } from "@/lib/utils"

interface InterviewCardProps {
  title: string
  accent: string
  videoId: string
  thumbnailUrl: string
  className?: string
}

export function InterviewCard({
  title,
  accent,
  videoId: _videoId,
  thumbnailUrl,
  className,
}: InterviewCardProps) {
  const accentIndex = title.indexOf(accent)
  const before = accentIndex >= 0 ? title.slice(0, accentIndex) : ""
  const after = accentIndex >= 0 ? title.slice(accentIndex + accent.length) : ""
  const foundAccent = accentIndex >= 0

  return (
    <div
      className={cn(
        "mx-auto mb-[22px] w-full max-w-[760px] rounded-[16px] bg-[#1a1a1f] p-4 text-center",
        "md:max-w-[600px] lg:max-w-[760px]",
        "shadow-[0px_2px_10px_0px_rgba(18,20,23,0.06)]",
        className,
      )}
    >
      <h3 className="mb-3 text-[19px] font-bold leading-[28.5px] text-white">
        {foundAccent ? (
          <>
            {before}
            <span className="font-bold text-[#57e07f]">{accent}</span>
            {after}
          </>
        ) : (
          title
        )}
      </h3>

      {/* YouTube-style video embed */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-black">
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="absolute inset-0 size-full object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[48px] w-[68px] items-center justify-center rounded-[12px] bg-black/70">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="ml-0.5 size-6"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
