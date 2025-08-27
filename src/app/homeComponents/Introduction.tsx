import Button from "@/components/Button";
import Link from "next/link";

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center items-center ml-4 text-white h-[50vh] w-[28vh] lg:w-[100vh] md:w-[60vh] sm:w-[40vh]">
            <div className="mt-4 mb-4 md:m-4 p-2 px-4 text-xs rounded-xl bg-[#6366f11A] border border-[#6366f119]" style={{ animation: "slideInUp 0.8s ease-out 0.2s both" }}>✨ Available for open opportunities</div>
            <div className="text-center mb-4 text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold
    leading-[1.1] text-[#EEF1F5]" style={{ animation: "slideInUp 0.8s ease-out 0.4s both" }}>Hi, I'm Peter Kirsch Madrid <br /> Full Stack Developer</div>
            <div className="text-center mb-4 lg:p-4 text-[#94a3b8]" style={{ animation: "slideInUp 0.8s ease-out 0.6s both" }}>I craft exceptional digital experiences through innovative web solutions, combining cutting-edge technology with thoughtful design to bring ideas to life.</div>
            <div className="flex sm:flex-wrap sm:flex-row flex-col gap-4" style={{ animation: "slideInUp 0.8s ease-out 0.8s both" }}>
                <Button
                    href="/resume"
                    variant="primary"
                >
                    View Resume
                </Button>
                <Button
                    href="https://www.linkedin.com/in/peter-madrid-99752223b"
                    variant="secondary"
                    external
                >
                    Let's Connect
                </Button>
            </div>
        </div>
    )
}