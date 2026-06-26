import { cn } from "@/lib/utils";
import { ProofCard } from "./ProofCard";

// Testimonial images from public/images/testimonials/
const testimonialNums = Array.from({ length: 39 }, (_, i) => 51 + i).filter(
  (n) => n !== 73 && n !== 84
);
const extraTestimonials = [
  "colby-testimonial-1",
  "ct2",
  "ct3",
  "ct4",
  "ct5",
];

export function ProofSection({ className }: { className?: string }) {
  return (
    <section className={cn("text-center", className)}>
      <h2 className="text-[36px] font-extrabold leading-[40.32px] tracking-[-0.792px] text-[#15171a] mb-8">
        Real Students, Real Results
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center max-w-[984px] mx-auto px-6">
        {testimonialNums.map((num) => (
          <ProofCard
            key={num}
            src={`/images/testimonials/${num}.avif`}
            alt="PIF student win"
          />
        ))}
      </div>
    </section>
  );
}
