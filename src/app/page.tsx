"use client";

import { useState, useEffect } from "react";

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

  return (
    <div>
      <header>
        asdasd
      </header>
      <div className="border border-white flex justify-end items-center bg-gray-900 px-4 overflow-hidden pb-4 h-[300px] sm:h-[400px] lg:h-[600px]">
        {/* <div className="border border-white text-white h-full">
          div 1
        </div>

        <div className="flex mr-4 lg:mr-44 border-white border">
          <div className="text-gray-50 text-3xl sm:text-5xl lg:text-[76px] mr-4 sm:mr-8 shrink-0">
            I'm a
          </div>
        </div> */}
        <div className="flex items-center w-[10px] h-[10px] relative">
          {/* gpt my question is above's h-creen */}
          {/* Circle container */}
          <div className="absolute right-[-100px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-visible">
            {skills.map((skill, index) => {
              let offset = Math.abs(index - currentIndex);
              if (offset > skills.length / 2) offset = skills.length - offset;

              const angle =
                ((index - currentIndex) * (360 / skills.length) + 180) *
                (Math.PI / 180);

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = index === currentIndex;

              const opacity = isActive ? 1 : 1 - offset * 0.4;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${isActive
                    ? "text-3xl sm:text-5xl lg:text-[76px] text-amber-400"
                    : "text-gray-400 text-sm sm:text-base lg:text-lg"
                    }`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity,
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex min-h-screen bg-gradient-to-b from-gray-900 from-10% to-[#102A43] to-90%">
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
