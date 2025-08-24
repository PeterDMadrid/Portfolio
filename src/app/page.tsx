"use client";

import Introduction from "@/app/homeComponents/Introduction";
import { useParallax } from "@/hooks/useparallax";
import Skills from "./homeComponents/SkillsDisplay";

export default function Home() {

  const parallaxRef = useParallax(0.6);

  return (
    <div>
      <section ref={parallaxRef} className="flex flex-wrap justify-center sm:justify-between items-center px-4 overflow-hidden pb-4 h-[900px] sm:h-[400px] md:h-[600px] lg:h-[600px] 2xl:h-[900px] relative z-0">
        <Introduction />
        <Skills />
      </section>
      <section className="flex flex-col min-h-screen myColor2 relative z-10 pb-20 pt-8">
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.1] text-[#EEF1F5] text-center mb-4">
          What I do
        </h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 px-4">
          I specialize in creating modern web applications with a focus on performance,
          user experience, and scalable architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {/* Skill Card 1 */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                    transition-all duration-300 hover:transform hover:-translate-y-3 
                    hover:shadow-2xl hover:border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                      transition-all duration-300 group-hover:h-0.5 group-hover:shadow-lg group-hover:shadow-indigo-500/50"></div>

            <div className="w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl 
                      flex items-center justify-center mb-6 text-2xl">
              ⚛️
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Building responsive and interactive user interfaces with React, Vue.js, and modern CSS frameworks.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                    transition-all duration-300 hover:transform hover:-translate-y-3 
                    hover:shadow-2xl hover:border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                      transition-all duration-300 group-hover:h-0.5 group-hover:shadow-lg group-hover:shadow-indigo-500/50"></div>

            <div className="w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl 
                      flex items-center justify-center mb-6 text-2xl">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Developing robust server-side applications using Node.js, Python, and cloud services.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                    transition-all duration-300 hover:transform hover:-translate-y-3 
                    hover:shadow-2xl hover:border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                      transition-all duration-300 group-hover:h-0.5 group-hover:shadow-lg group-hover:shadow-indigo-500/50"></div>

            <div className="w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl 
                      flex items-center justify-center mb-6 text-2xl">
              🎨
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful and intuitive designs that prioritize user experience and accessibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
