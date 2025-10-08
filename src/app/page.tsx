"use client";

import Introduction from "@/app/homeComponents/Introduction";
import { useParallax } from "@/hooks/useparallax";
import Skills from "./homeComponents/SkillsDisplay";
import { useState, useRef, useCallback, useEffect, SetStateAction } from 'react';
import LightEffect from "./homeComponents/LightEffect";
import TechStack from "./homeComponents/TechStacks";
import Projects from "./homeComponents/Projects";

export default function Home() {

  const parallaxRef = useParallax(0.6);
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="relative">
      <LightEffect isLightOn={isLightOn} setIsLightOn={setIsLightOn} />
      <section ref={parallaxRef} className="flex flex-wrap justify-center sm:justify-between items-center px-4 overflow-hidden pb-4 h-[900px] sm:h-[400px] md:h-[600px] lg:h-[600px] 2xl:h-[900px] relative z-0">
        <Introduction isLightOn={isLightOn} />
        <Skills />
      </section>
      <section>
        <TechStack />
        <Projects />
      </section>
    </div>
  );
}
