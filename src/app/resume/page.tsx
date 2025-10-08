import Button from '@/components/Button';
import Image from 'next/image';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Resume() {
    return (
        <div className="pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Resume Image - Takes more space */}
                    <div className="lg:col-span-7">
                        <div className="sticky top-20">
                            <Image
                                className="w-full h-auto border border-[#1e3a52] rounded-lg shadow-2xl"
                                src="/Madrid_Resume.jpg"
                                alt="My Resume"
                                width={800}
                                height={1000}
                                style={{ animation: 'slideInUp 0.4s ease-out 0.4s both' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Header */}
                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#e2e8f0]">
                                My Resume
                            </h1>
                            <p className="text-base leading-relaxed text-[#94a3b8] font-light">
                                A comprehensive overview of my skills, experience, and education.
                            </p>
                        </div>

                        {/* Download Button */}
                        <div>
                            <Button
                                href="/Madrid_Resume.pdf"
                                variant="secondary"
                                style={{ animation: "slideInUp 0.6s ease-out 0.6s both" }}
                                className="w-full px-6 py-3 text-base font-normal"
                            >
                                Download PDF
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#1e3a52] my-2"></div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-[#cbd5e1]">
                                Get in Touch
                            </h2>
                            <p className="text-base leading-relaxed font-light text-[#94a3b8]">
                                Have feedback or want to connect? I'd love to hear from you.
                            </p>

                            <div className="space-y-4 pt-2">
                                {/* Email */}
                                <a 
                                    href="mailto:petermadrid0421@gmail.com"
                                    className="flex items-center gap-3 text-[#cbd5e1] hover:text-[#e2e8f0] transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e3a52] flex items-center justify-center group-hover:bg-[#2a4a62] transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm font-light text-[#94a3b8]">Email</span>
                                        <span className="text-base font-normal truncate">petermadrid0421@gmail.com</span>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a 
                                    href="/"
                                    className="flex items-center gap-3 text-[#cbd5e1] hover:text-[#e2e8f0] transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e3a52] flex items-center justify-center group-hover:bg-[#2a4a62] transition-colors">
                                        <Linkedin size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-light text-[#94a3b8]">LinkedIn</span>
                                        <span className="text-base font-normal">Connect with me</span>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a 
                                    href="/"
                                    className="flex items-center gap-3 text-[#cbd5e1] hover:text-[#e2e8f0] transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e3a52] flex items-center justify-center group-hover:bg-[#2a4a62] transition-colors">
                                        <Github size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-light text-[#94a3b8]">GitHub</span>
                                        <span className="text-base font-normal">View my projects</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}