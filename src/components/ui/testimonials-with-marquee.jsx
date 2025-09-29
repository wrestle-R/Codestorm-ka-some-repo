import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}) {
  return (
    <section
      className={cn("text-foreground", "py-12 sm:py-24 md:py-32 px-0", className)}>
      <div
        className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2
            className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight font-inter">
            {title}
          </h2>
          <p
            className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl font-inter">
            {description}
          </p>
        </div>

        <div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
          {/* First row - left to right */}
          <div
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`row1-${setIndex}-${i}`} {...testimonial} />
                ))
              ))}
            </div>
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`row1-duplicate-${setIndex}-${i}`} {...testimonial} />
                ))
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      testimonials={testimonials}
    />
  )
}