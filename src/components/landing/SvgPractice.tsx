"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AttrPlugin from "gsap";

export const SvgPractice = () => {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(AttrPlugin);

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        attr: { r: 10 },
        duration: 2,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-64 h-64 bg-accent"
      >
        <circle ref={circleRef} cx="50" cy="50" r="40" fill="white" />
      </svg>
    </div>
  );
};
