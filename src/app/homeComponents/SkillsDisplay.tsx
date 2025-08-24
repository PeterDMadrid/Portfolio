import { useEffect, useState } from "react";

export default function Skills() {
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
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Cycle through skills
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [skills.length]);

    // Resize radius and track screen size
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsSmallScreen(windowWidth < 640);
            
            if (windowWidth < 640) {
                setRadius(120);
            } else if (windowWidth < 1024) {
                setRadius(120);
            } else {
                setRadius(280);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex items-center w-[180px] h-[100px] relative">
            {/* Circle container */}
            <div className="absolute left-1/2 -translate-x-1/2 sm:right-[-100px] sm:left-auto sm:translate-x-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-visible">
                {skills.map((skill, index) => {
                    let offset = Math.abs(index - currentIndex);
                    if (offset > skills.length / 2) offset = skills.length - offset;

                    const baseAngle = isSmallScreen ? 270 : 180;
                    
                    const angle =
                        ((index - currentIndex) * (360 / skills.length) + baseAngle) *
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
    );
}