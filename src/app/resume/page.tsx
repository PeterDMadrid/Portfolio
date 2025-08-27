import Button from '@/components/Button';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';

export default function Resume() {
    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 gap-6 lg:gap-8">
            {/* Resume Image */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
                <Image
                    className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none border-2 border-gray-300 shadow-lg"
                    src="/Madrid_Resume.jpg"
                    alt="My Resume"
                    width={800}
                    height={1000}
                    style={{ animation: 'slideInUp 0.4s ease-out 0.4s both' }}
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 min-w-0 max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
                {/* Contact Info */}
                <div className="bg-gray-900/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Have suggestions?</h3>
                    <p className="mb-6 text-gray-200">I'd love to hear your feedback!</p>
                    <div className="space-y-3">
                        <p className="flex items-center gap-2 text-sm sm:text-base break-all">
                            <span className="flex-shrink-0">Email: </span>
                            <span>petermadrid0421@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base break-all">
                            <span className="flex-shrink-0">LinkedIn:</span>
                            <a href='/'><Linkedin /></a>
                        </p>
                        <p className="flex items-center gap-2 text-sm sm:text-base">
                            <span className="flex-shrink-0">Github: </span>
                            <a href='/'><Github /></a>
                        </p>
                    </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-center lg:justify-start">
                    <Button
                        href="/Madrid_Resume.pdf"
                        variant="secondary"
                        style={{ animation: "slideInUp 0.6s ease-out 0.6s both" }}
                        className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-medium"
                    >
                        Download Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}