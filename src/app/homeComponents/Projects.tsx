"use client"
import { MoveRight } from 'lucide-react';
import { useState } from 'react';

const projectData = [
    {
        id: 1,
        title: "Micro Blog",
        description: "Developed as part of a team during my OJT at HiPe Japan, this microblogging app lets users create and interact with posts. I contributed to API integration, user authentication, and responsive UI, gaining hands-on experience connecting Flutter with a Laravel backend.",
        link: "https://github.com/xReddskie/microblog-ojt2.git",
        image: "/Microblog.png"
    },
    {
        id: 2,
        title: "Kraft And Serenade",
        description: " Built a product showcase website using Next.js with modular components, centralized data management, and dynamic routing for a clean and scalable codebase.",
        link: "https://kraft-and-serenade.vercel.app/",
        image: "/landing.png"
    },
    {
        id: 3,
        title: "Mathands",
        description: "A mobile application designed to teach students mathematics using sign language. Built with Flutter (frontend) and Django (backend), it features interactive lessons, quizzes, sign language recognition from hand images, and progress tracking to create an engaging and accessible learning experience.",
        link: "https://github.com/PeterDMadrid/Mathands-Frontend.git",
        image: "/MathandsSnippet.PNG",
    },
    {
        id: 4,
        title: "Task Manager",
        description: "A web-based Task Manager built with Next.js that allows users to create, update, and track tasks efficiently. Features include user authentication, responsive design, and real-time task management, providing a smooth and intuitive experience for organizing daily activities.",
        link: "https://github.com/PeterDMadrid/Task-Manager-Application.git",
        image: "/TaskManager.png" // Add actual image path for this one
    },
]

export default function Projects() {
    // Properly type the state as number | null
    const [activeProject, setActiveProject] = useState<number | null>(null);

    // Simplify the function parameter type
    const handleImageClick = (projectId: number) => {
        setActiveProject(activeProject === projectId ? null : projectId);
    };

    return (
        <div className="flex flex-col min-h-screen myColor2 relative z-10 pb-10">
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.1] text-[#EEF1F5] text-center mb-4">
                Projects
            </h1>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 px-4">
                Explore a collection of my recent work, highlighting diverse projects built with a focus on modern web technologies and clean, scalable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(project.id)}
                    >
                        <div
                            className={`w-full h-48 rounded-xl mb-6 bg-gray-800 bg-cover bg-center bg-no-repeat 
                            transition-all duration-500 overflow-hidden relative flex items-center justify-center
                            ${activeProject === project.id ? 'scale-110' : 'scale-100'}`}
                            style={{ backgroundImage: `url(${project.image || '/placeholder.png'})` }}
                        >
                            {/* Dark overlay */}
                            <div 
                                className={`
                                absolute inset-0 rounded-xl
                                bg-black/60
                                transition-all duration-300
                                ${activeProject === project.id ? 'opacity-80' : 'opacity-0'}
                            `}
                            ></div>

                            {/* Play button */}
                            <div 
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300
                                ${activeProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
                                        <MoveRight className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </a>
                            </div>

                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}