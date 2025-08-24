"use client"

import Link from "next/link";
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
      flex justify-between
      fixed top-0 w-full px-8
      z-[1000] transition-all duration-100 ease-in-out
      ${scrolled
                        ? "bg-transparent backdrop-blur-0 shadow-none py-2"
                        : "bg-gray-900 backdrop-blur-[50px] py-2 border-b border-[#6366f1]/10"}
    `}
            >
                <Link href="/" className="text-white font-bold text-lg cursor-pointer">PM</Link>
                <div className="flex gap-4">
                    <Link href="/" className="text-white font-bold text-lg cursor-pointer">About</Link>
                    <Link href="/" className="text-white font-bold text-lg cursor-pointer">Projects</Link>
                </div>
            </nav>
        </header>
    )
}
