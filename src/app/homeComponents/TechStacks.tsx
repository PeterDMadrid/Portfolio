"use client";

import { logos } from "@/components/logos";

const techData = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces with React, Vue.js, and Tailwind CSS.",
        mainLogo: logos.next,
        additionalLogos: [
            { logo: logos.vue, position: "left-10" },
            { logo: logos.tailwind, position: "left-30" },
            { logo: logos.flutter, position: "left-50" }
        ]
    },
    {
        id: 2,
        title: "Backend Development",
        description: "Building powerful server-side applications with Laravel and Django, creating scalable APIs and robust database architectures.",
        mainLogo: logos.laravel,
        additionalLogos: [
            { logo: logos.django, position: "left-10" },
            { logo: logos.next, position: "left-30" }
        ]
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Crafting stunning UI/UX designs with Figma for prototyping and Canva for visual assets, ensuring every design decision serves both aesthetics and functionality.",
        mainLogo: logos.figma,
        additionalLogos: [
            { logo: logos.canva, position: "left-10" }
        ]
    }
]

export default function TechStack() {
    return (
        <div className="flex flex-col min-h-screen myColor2 relative z-10 pb-10 pt-8">
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.1] text-[#EEF1F5] text-center mb-4">
                What I do
            </h1>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 px-4">
                I specialize in creating modern web applications with a focus on performance,
                user experience, and scalable architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
                {techData.map((tech) => (
                    <div key={tech.id} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                    transition-all duration-300 hover:transform hover:-translate-y-3 
                    hover:shadow-2xl hover:border-indigo-500/30 relative overflow-hidden">
                        <div className="w-15 h-15 md:group-hover:bg-transparent md:bg-gray-900 rounded-xl 
                        flex items-center justify-center mb-6 p-3 relative transition-all duration-300">
                            {tech.mainLogo}

                            {tech.additionalLogos.map((item, index) => (
                                <div key={index} className={`text-white absolute flex ${item.position} w-15 h-15 p-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-8 md:translate-x-0 md:group-hover:translate-x-8 transition-all duration-300`}>
                                    {item.logo}
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {tech.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
