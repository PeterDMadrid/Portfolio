"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Menu, House, UserRound, FolderKanban } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header>
            <div className={`flex justify-between fixed top-0 w-full px-8 z-[1000] transition-all duration-200 ease-in
      ${scrolled ? "bg-transparent backdrop-blur-0 shadow-none py-2" : "bg-gray-900 backdrop-blur-[50px] py-2 border-b border-[#6366f1]/10"}`}>
                <Link href="/" className="text-white font-bold text-lg cursor-pointer">PM</Link>
                <nav className="hidden md:block ">
                    <div className="flex gap-4 text-slate-400">
                        <Link href="/" className="font-light text-md cursor-pointer">Home</Link>
                        <Link href="/about" className="font-light text-md cursor-pointer">Experience</Link>
                    </div>
                </nav>
                <button className="md:hidden text-white"
                    onClick={() => setMenu(!isMenuOpen)}
                >{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 top-0 md:hidden z-[999] flex justify-end">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMenu(false)}
                    />

                    {/* Menu Content */}
                    <div className="relative bg-gray-900/95 backdrop-blur-md border-b border-[#6366f1]/10 px-8 pb-6 pt-20 w-[50%]">
                        <nav className="flex flex-col space-y-6">
                            <Link
                                href="/"
                                className="flex gap-2 justify-end text-slate-400 font-light text-lg cursor-pointer transition-colors hover:text-white"
                                onClick={() => setMenu(false)}
                            >
                                Home <House />
                            </Link>
                            <Link
                                href="/about"
                                className="flex gap-2 justify-end text-slate-400 font-light text-lg cursor-pointer transition-colors hover:text-white"
                                onClick={() => setMenu(false)}
                            >
                                Experience <UserRound />
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
