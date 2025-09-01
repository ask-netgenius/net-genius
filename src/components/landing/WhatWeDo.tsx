"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { SectionHeading } from "../ui/sectionHeading";
import { BarChart3, Globe, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const accentColor = "RGBA(238, 132, 114, 1)";

const services = [
  {
    icon: Star,
    title: "Project Management",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  },
  {
    icon: BarChart3,
    title: "Design",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  },
  {
    icon: Globe,
    title: "Search Optimization",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  },
  {
    icon: Star,
    title: "Project Management",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  },
  {
    icon: BarChart3,
    title: "Design",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  },
  {
    icon: Globe,
    title: "Search Optimization",
    description:
      "Effortlessly streamline your finances with our automated expense tracking feature."
  }
];

export const WhatWeDo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.set(".main-container", {
      opacity: 1
    });

    gsap.set(".wwd-text-container", {
      opacity: 1
    });

    gsap.set(".text", {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center"
    });
    const firstTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "center center",
        end: "bottom 15%",
        scrub: true,
        pinSpacing: true
      }
    });
    gsap.to(".text", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text",
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    });

    gsap.set(".text", {
      scale: 1
    });

    firstTl.to("text", {
      scale: 45,
      duration: 1,
      attr: {
        fill: accentColor
      },
      transformOrigin: "65% center",
      ease: "linear"
    });
    firstTl.to(
      "text",
      {
        opacity: 0
      },
      0.3
    );
    firstTl.to(
      ".wwd-text-container",
      {
        backgroundColor: accentColor
      },
      0.2
    );
    firstTl.to(
      ".wwd-2nd-container",
      {
        backgroundColor: accentColor
      },
      0.2
    );
    const wwdTextContainer = document.querySelector(".wwd-text");
    const wwdText = new SplitText(wwdTextContainer, {
      type: "chars, words, lines",
      linesClass: "line"
    });

    gsap.set(".line", {
      overflow: "hidden"
    });
    gsap.from(wwdText.chars, {
      opacity: 0,
      y: 150,
      duration: 1,
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".wwd-2nd-container",
        start: "top 70%",
        end: "center center",
        markers: true,
        toggleActions: "play none none none",
        once: true
      }
    });
    gsap.to(".card-container", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      scrollTrigger: {
        trigger: ".card-container",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
    let cards = document.querySelectorAll(".wwd-card");

    console.log(cards);

    /*     gsap.to(".wwd-2nd-container", {
      translateY: "-100%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".wwd-2nd-container",
        start: "top bottom",
        markers: true,
        toggleActions: "play none none reverse"
      }
    }); */

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative main-container py-20 opacity-0 min-h-screen flex flex-col justify-center bg-background w-screen wwd-2nd-container">
      {/* Big background heading */}
      <div className="absolute top-36">
        <SectionHeading label="Services" isDark={false} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex gap-10 px-6">
        {/* Left Column: Intro */}
        <div className="w-1/3 flex flex-col justify-center"></div>

        {/* Right Column: Cards */}
        <div className="grid grid-cols-1 translate-y-10 opacity-0 card-container mt-36  md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group select-none rounded-3xl wwd-card bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-accent hover:-rotate-3 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <IconComponent
                      strokeWidth={3}
                      className="w-10 h-10 text-primary/90 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary/80 text-base leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-xl font-semibold group-hover:text-white transition-colors duration-300">
                    <span>Learn more</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
