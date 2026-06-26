import { cn } from "@/lib/utils";
import { InterviewCard } from "./InterviewCard";

const interviews = [
  {
    title: "How This 18 Year Old Makes $500/Day In HTS",
    accent: "18 Year Old",
    videoId: "eigS4YGosOs",
    thumbnailUrl: "/images/thumbs/int-1.jpg",
  },
  {
    title: "How He Makes $4k/Week In HTS",
    accent: "$4k/Week",
    videoId: "oijqSykQvk0",
    thumbnailUrl: "/images/thumbs/int-2.jpg",
  },
  {
    title: "How He Went From D2D To $600/Day In HTS",
    accent: "D2D To $600/Day",
    videoId: "vAUx_UkNP2g",
    thumbnailUrl: "/images/thumbs/int-3.jpg",
  },
  {
    title: "How He Made $100k As An Appointment Setter",
    accent: "$100k",
    videoId: "j4FBCuKlDBM",
    thumbnailUrl: "/images/thumbs/int-4.jpg",
  },
  {
    title: "How Davis Makes $2k+ Per Week",
    accent: "$2k+",
    videoId: "mNbYqzOOGuE",
    thumbnailUrl: "/images/thumbs/int-5.jpg",
  },
  {
    title: "Meet Stef Who Is Hitting $700 Days As A Setter",
    accent: "$700 Days",
    videoId: "inIT0Q1TAto",
    thumbnailUrl: "/images/thumbs/int-6.jpg",
  },
  {
    title:
      "Jaden Went From Failing Complicated Business Models To Printing $6k/Month As A Setter",
    accent: "$6k/Month",
    videoId: "EqSfdyi9B6U",
    thumbnailUrl: "/images/thumbs/int-7.jpg",
  },
  {
    title: "How He Crushes Cold Outreach With AI",
    accent: "Cold Outreach",
    videoId: "X3CHqNkPAm0",
    thumbnailUrl: "/images/thumbs/int-8.jpg",
  },
];

export function InterviewsSection({ className }: { className?: string }) {
  return (
    <section className={cn("text-center", className)}>
      <h2 className="text-[36px] font-extrabold leading-[40.32px] tracking-[-0.792px] text-[#15171a] mb-4">
        Check Out Our Student Interviews:
      </h2>
      <br />
      {interviews.map((interview) => (
        <InterviewCard
          key={interview.videoId}
          title={interview.title}
          accent={interview.accent}
          videoId={interview.videoId}
          thumbnailUrl={interview.thumbnailUrl}
        />
      ))}
    </section>
  );
}
