"use client";

import Introduction from "@/app/homeComponents/Introduction";
import { useState, useEffect } from "react";
import { useParallax } from "@/hooks/useparallax";
import Skills from "./homeComponents/SkillsDisplay";

export default function Home() {
  const skills = [
    "Leader",
    "Innovator",
    "Thinker",
    "Creator",
    "Developer",
    "Planner",
    "Builder",
    "Solver",
    "Learner",
  ];

  const [currentIndex, setIndex] = useState(0);
  const [radius, setRadius] = useState(150);

  // Cycle through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Resize radius only (not font size anymore)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(80);
      } else if (window.innerWidth < 1024) {
        setRadius(100);
      } else {
        setRadius(250);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parallaxRef = useParallax(0.2);

  return (
    <div>
      <div ref={parallaxRef} className="flex justify-between items-center px-4 overflow-hidden pb-4 h-[600px] sm:h-[400px] lg:h-[600px] relative z-0">
        <Introduction />
        <Skills />
      </div>
      {/* This is the 2nd section but div */}
      <div className="flex min-h-screen bg-gradient-to-b from-gray-900 from-10% to-[#102A43] to-90% relative z-100">
        <div className="w-[20%] border border-white">
          leftasd
        </div>
        <div className="w-[80%] min-h-screen">
          rightasd
        </div>
      </div>

    </div>
  );
}
