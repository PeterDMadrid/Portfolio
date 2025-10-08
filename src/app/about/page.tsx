import Image from 'next/image';

export default function About() {
    return (
        <div className="pt-16 pb-4 px-4 space-y-8">
            {/* Section 1 */}
            <section className="grid grid-cols-12 min-h-screen">
                {/* Left Side Panel */}
                <div className="col-span-4 h-full">
                    <div className="sticky top-16 h-screen text-xl md:text-3xl flex justify-end items-start px-4 pt-1 font-light tracking-wide text-[#e2e8f0] text-right">
                        Education
                    </div>
                </div>
                {/* Right Side Panel */}
                <div className="col-span-8 border-l border-[#1e3a52] text-white px-4 pb-16">
                    <div className="flex flex-col gap-3 md:mr-12">
                        {/* Heading */}
                        <div className="text-2xl font-semibold text-[#cbd5e1]">
                            Technological Institute of the Philippines
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-lg text-[#cbd5e1] font-normal">
                                Bachelor of Science in Information Technology
                            </div>
                            <div className="text-sm text-[#94a3b8] font-light">
                                Graduated: 2025
                            </div>
                        </div>
                        {/* Contents */}
                        <div className="text-xs md:text-sm lg:text-base leading-relaxed text-[#94a3b8] font-light">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-7">
                                    Completed a Bachelor's degree in Information Technology, where I gained practical experience in software development, database management, and web technologies. Throughout my academic journey, I worked on various projects that strengthened my problem-solving and programming skills. As a team leader, I spearheaded the development of a mobile sign language learning application that integrates computer vision and machine learning to recognize gestures in real time. This project allowed me to apply advanced technologies such as Flutter for the front-end, Django for the backend, and MediaPipe for hand-tracking, demonstrating my ability to design and implement end-to-end software solutions from concept to deployment.
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="relative w-full aspect-[3/4] max-h-96 border border-[#1e3a52] rounded-lg overflow-hidden">
                                        <Image
                                            src="/Grad_Attire.jpg"
                                            alt='Graduation Picture'
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Another Content */}
                        <div className="flex flex-col gap-1">
                            <div className="text-lg text-[#cbd5e1] font-normal">
                                Capstone Project
                            </div>
                            <div className="text-sm text-[#94a3b8] font-light">
                                Mathands - Mathematics Sign Language Learning App
                            </div>
                        </div>
                        <div className="text-xs md:text-sm lg:text-base leading-relaxed text-[#94a3b8] font-light">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-7">
                                    Our capstone project, Mathands: A Mathematics Sign Language Learning Mobile Application, was inspired by the challenges faced by hearing-impaired students in learning basic mathematics. We wanted to create a tool that made math more accessible, engaging, and inclusive through the use of sign language and technology.<br></br><br></br> The idea started with a simple goal — to bridge the communication gap between teachers and deaf students. From there, we designed a mobile app that teaches mathematical concepts using sign language recognition powered by computer vision. The app uses the MediaPipe and OpenCV frameworks to detect and interpret hand gestures in real time, allowing students to sign numbers and math symbols that the system recognizes and evaluates automatically.<br></br><br></br> I took the lead in both the development and system design, ensuring that the interface was simple enough for young learners while maintaining strong functionality. We used Flutter for the front-end to create a responsive and animated interface, and Django for the backend to handle user data, progress tracking, and content management. We also implemented text-to-speech features, background audio, and animated characters to make the learning experience more interactive and enjoyable.<br></br><br></br> One of the most rewarding parts of the project was testing it with actual students and teachers. Their positive feedback validated our effort — proving that technology can indeed enhance learning for children with hearing impairments. Through Mathands, we learned not just about coding and frameworks, but about building something with a real social impact.
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible">
                                        <div className="relative min-w-[200px] w-[200px] lg:w-full aspect-[3/4] lg:max-h-80 border border-[#1e3a52] rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/Capstone_Group_Pic.JPEG"
                                                alt='Capstone Group Picture'
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative min-w-[200px] w-[200px] lg:w-full aspect-[3/4] lg:max-h-80 border border-[#1e3a52] rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/Capstone_Group_Pic2.JPEG"
                                                alt='Capstone Group Picture 2'
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="grid grid-cols-12 min-h-screen">
                {/* Left Side Panel */}
                <div className="col-span-4 h-full">
                    <div className="sticky top-16 h-screen text-xl md:text-3xl flex justify-end items-start px-4 pt-1 font-light tracking-wide text-[#e2e8f0] text-right">
                        Work Experience
                    </div>
                </div>
                {/* Right Side Panel */}
                <div className="col-span-8 border-l border-[#1e3a52] text-white px-4 pb-16">
                    <div className="flex flex-col gap-3">
                        {/* Heading */}
                        <div className="text-2xl font-semibold text-[#cbd5e1]">
                            HiPe Japan Inc - Eastwood Global Plaza, Eastwood, Quezon City
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-lg text-[#cbd5e1] font-normal">
                                Software Developer
                            </div>
                            <div className="text-sm text-[#94a3b8] font-light">
                                Feb 2024 - June 2024
                            </div>
                        </div>
                        {/* Contents */}
                        <div className="text-xs md:text-sm lg:text-base leading-relaxed text-[#94a3b8] font-light">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-7">
                                    During my internship at Hipe Japan, I gained valuable hands-on experience in full-stack web development and collaborative software engineering. I worked closely with a development team to build and improve web-based applications, which strengthened my understanding of both frontend and backend processes. My tasks involved writing clean, maintainable code, debugging existing systems, and participating in version control using Git. I also collaborated in team discussions for UI/UX design improvements, database structuring, and feature planning, which helped me understand the importance of teamwork, clear communication, and efficient workflow in a professional environment.<br></br>
                                    <br></br>
                                    One of the major projects I contributed to was the development of a microblogging application using Laravel. The system allowed users to create, edit, and manage posts, similar to a simplified social platform. I was involved in designing the database schema, creating migration files, and implementing authentication and authorization features to ensure user privacy and data integrity. On the frontend, I helped improve the interface by making it more user-friendly and responsive. This experience taught me how to integrate frontend and backend components effectively, follow RESTful design principles, and apply Laravel’s best practices for scalability and maintainability.<br></br>
                                    <br></br>
                                    Through this internship and project, I developed stronger technical and problem-solving skills, improved my understanding of modern web application architecture, and learned how to deliver functional, well-structured systems in a collaborative development environment.<br></br>
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible">
                                        <div className="relative min-w-[200px] w-[200px] lg:w-full aspect-[3/4] lg:max-h-80 border border-[#1e3a52] rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/Hipe_Pic.jpg"
                                                alt='Me working'
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative min-w-[200px] w-[200px] lg:w-full aspect-[3/4] lg:max-h-80 border border-[#1e3a52] rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/Hipe_Pic2.jpg"
                                                alt='Hipe Logo'
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="grid grid-cols-12 min-h-screen">
                {/* Left Side Panel */}
                <div className="col-span-4 h-full">
                    <div className="sticky top-16 h-screen text-xl md:text-3xl flex justify-end items-start px-4 pt-1 font-light tracking-wide text-[#e2e8f0] text-right">
                        Business Ventures
                    </div>
                </div>
                {/* Right Side Panel */}
                <div className="col-span-8 border-l border-[#1e3a52] text-white px-4 pb-16">
                    <div className="flex flex-col gap-3 md:mr-12">
                        {/* Heading */}
                        <div className="text-2xl font-semibold text-[#cbd5e1]">
                            Co-Founder & Business Owner
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-lg text-[#cbd5e1] font-normal">
                                Kraft and Serenade
                            </div>
                            <div className="text-sm text-[#94a3b8] font-light">
                                Est 2024
                            </div>
                        </div>
                        {/* Contents */}
                        <div className="text-xs md:text-sm lg:text-base leading-relaxed text-[#94a3b8] font-light">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-7">
                                    As co-owners and creative designers of Kraft and Serenade, we oversee every aspect of the business—from product creation and design to marketing and customer relations. What began as a small passion project quickly evolved into a growing flower and gift shop that focuses on creating personalized, handcrafted arrangements paired with heartfelt letters. We are responsible for conceptualizing bouquet designs, sourcing materials, managing inventory, and ensuring the overall quality of every product before it reaches the customer.<br></br>
                                    <br></br>
                                    Beyond the creative side, we also handle the business operations and marketing efforts. This includes maintaining our social media presence, managing content creation, and designing promotional materials that reflect our brand's tone and aesthetic. We plan campaigns, respond to customer inquiries, and coordinate logistics for deliveries, ensuring each order is completed efficiently and with attention to detail.<br></br>
                                    <br></br>
                                    Through this venture, we learned to balance artistic creativity with business management. We developed skills in customer service, pricing strategy, sales forecasting, and visual branding while constantly improving our online visibility and engagement. Managing everything ourselves taught us to be resourceful and adaptable—whether it’s optimizing production during peak seasons, handling last-minute orders, or adjusting designs based on client preferences.<br></br>
                                    <br></br>
                                    Running Kraft and Serenade has been a continuous learning experience that strengthened both our creative and entrepreneurial skills. It allowed us to understand how design, marketing, and customer satisfaction work together to create a strong, lasting brand identity.
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="relative w-full aspect-[16/9] max-h-96 border border-[#1e3a52] rounded-lg overflow-hidden">
                                        <Image
                                            src="/Business_Pic.png"
                                            alt='Business Picture'
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}