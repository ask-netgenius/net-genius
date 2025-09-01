"use client";
import { AboutUsPara } from "@/config/content/about-us";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const onScrollColor = "#fff";

export const AboutUs = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const aboutUsSection = document.querySelector(".about-us");
    const aboutUsPara = document.querySelector(".about-us-para");

    gsap.to(aboutUsSection, {
      y: "0%",
      ease: "linear",
      scrollTrigger: {
        trigger: aboutUsSection,
        start: "top bottom",
        end: "top top",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: false
      }
    });

    const paraSplit = new SplitText(aboutUsPara, { type: "words" });

    gsap.to(paraSplit.words, {
      color: onScrollColor,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-us-para",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        markers: true
      }
    });

    return () => {
      paraSplit.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="about-us translate-y-[100vh]">
      <div className="min-h-screen py-20 w-screen bg-accent flex flex-col items-center justify-center">
        <div className="max-w-7xl flex flex-col  gap-5">
          <h2 className="text-right font-headline font-bold  text-white/60 text-9xl leading-loose">
            About Us
          </h2>
          <p className="text-7xl font-roboto text-white/30  font-bold about-us-para  text-center">
            {AboutUsPara}
          </p>
        </div>
      </div>
    </section>
  );
};
