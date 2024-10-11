import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

// Testimonial data (simulating data from Figma)
const testimonials = [
  {
    quote:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say "living" thing because you just never know what you are going to see on any given night of stargazing.',
    author: "Leslie Alexander",
    role: "UI Designer",
    company: "Google",
  },
  // ... more testimonials
];

export default function TestimonialsCarousel() {
  return (
    <Section
      title="Testimonial Highlight"
      subtitle="What our customers are saying"
    >
      <Carousel className="max-w-2xl mx-auto relative">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="p-2 pb-5 text-center">
              <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
              <h4 className="text-xl font-semibold max-w-lg mx-auto px-10 mb-8">
                {testimonial.quote}
              </h4>
              <Image
                width={0}
                height={40}
                src={`https://cdn.magicui.design/companies/${testimonial.company}.svg`}
                alt={`${testimonial.company} Logo`}
                className="mx-auto w-auto h-[40px] grayscale opacity-30 mb-4"
              />
              <h4 className="text-xl font-semibold my-2">
                {testimonial.author}
              </h4>
              <span className="text-sm text-themeDarkGray">
                {testimonial.role}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background" />
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
