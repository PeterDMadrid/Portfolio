export default function Introduction() {
    return (
        <div className="flex flex-col justify-center items-center ml-4 text-white h-full w-[28vh] lg:w-[100vh] md:w-[60vh] sm:w-[40vh]">
            <div className="mt-12 mb-4 lg:m-4 lg:m-4 md:m-4 p-2 text-sm rounded-xl bg-[#6366f11A] border border-[#6366f119]" style={{ animation: "slideInUp 0.8s ease-out 0.2s both" }}>✨ Available for open opportunities</div>
            <div className="lg:text-center mb-4 text-[clamp(1.5rem,4vw,2.5rem)] font-[1000]" style={{ animation: "slideInUp 0.8s ease-out 0.4s both" }}>Hi, I'm Peter Kirsch Madrid <br /> Full Stack Developer</div>
            <div className="lg:text-center pr-8 lg:pr-0 md:pr-0 mb-4 lg:p-4 text-[#94a3b8]" style={{ animation: "slideInUp 0.8s ease-out 0.6s both" }}>I craft exceptional digital experiences through innovative web solutions, combining cutting-edge technology with thoughtful design to bring ideas to life.</div>
            <div className="flex flex-wrap gap-4" style={{ animation: "slideInUp 0.8s ease-out 0.8s both" }}>
                <div className="px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer
           transition-all duration-300 relative overflow-hidden
           bg-gradient-to-br from-indigo-500 to-violet-500 text-white
           shadow-[0_4px_15px_rgba(99,102,241,0.4)]
           hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(99,102,241,0.6)]">View Resume</div>
                <a href="https://www.linkedin.com/in/peter-madrid-99752223b" className="px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer
           transition-all duration-300 relative overflow-hidden
           bg-white/10 text-gray-200 border border-white/20 backdrop-blur-md
           hover:bg-white/15 hover:-translate-y-[3px]">Let's Connect</a>
            </div>
        </div>
    )
}