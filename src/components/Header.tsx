"use client"

import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header>
            <nav
                className={`
      fixed top-0 w-full px-8
      z-[1000] transition-all duration-100 ease-in-out
      ${scrolled
                        ? "bg-transparent backdrop-blur-0 shadow-none py-2"
                        : "bg-gray-900 backdrop-blur-[50px] py-2 border-b border-[#6366f1]/10"}
    `}
            >
                <div className="text-white font-bold text-lg">PM</div>
            </nav>
        </header>
    )
}
