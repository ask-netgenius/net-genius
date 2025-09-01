"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const WeJustDontCode = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "+=2000",
          scrub: true,
          pin: true
        }
      })
      .to(card1, {
        width: "100vw",
        height: "100vh",
        ease: "power2.out",
        translateY: "-50vh",
        duration: 1.2,
        transformOrigin: "bottom center",
        borderRadius: 0
      })
      .to(
        ".Card1-text",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        },
        "<0.6"
      )
      .to(card2, {
        width: "100vw",
        translateY: "-50vh",
        height: "100vh",
        borderRadius: 0,
        ease: "power2.out",
        duration: 1.2
      })
      .to(
        ".Card2-text",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        },
        "<0.6"
      )
      .to(
        card1,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        },
        "+=0.2"
      )
      .to(
        card2,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        },
        "<"
      );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-background min-h-screen w-screen">
      <h2 className="text-right font-headline font-bold text-primary/50 text-[12vw] leading-loose">
        Why Choose Us
      </h2>

      <div
        ref={containerRef}
        className="relative h-[100vh] flex items-center justify-center"
      >
        <div
          ref={card1Ref}
          className="absolute w-[30vw] h-[70vh] overflow-hidden rounded-3xl"
          style={{ opacity: 1 }}
        >
          <Image
            src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1756764382/5675706_esfrrx.jpg"
            alt="Random 1"
            fill
            className="object-cover"
          />

          <div className="absolute opacity-0 Card1-text flex items-center justify-center text-center inset-0  text-white/60 text-9xl font-bold">
            <div className="w-[70%]">
              We craft digital experiences that inspire
            </div>
          </div>
        </div>
        <div
          ref={card2Ref}
          className="absolute w-[20vw] h-[40vh] overflow-hidden"
          style={{ opacity: 0 }}
        >
          <Image
            src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1756761009/796832_y29bmg.jpg"
            alt="Random 2"
            fill
            className="object-cover"
          />
          <div className="absolute opacity-0 Card2-text flex items-center justify-center text-center inset-0  text-white/60 text-9xl font-bold">
            <div className="w-[70%]">We transform ideas into digital magic</div>
          </div>
        </div>
      </div>
    </div>
  );
};
