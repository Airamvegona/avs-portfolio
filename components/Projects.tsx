"use client"

import { motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {};

export default function Projects({}: Props) {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            title: "Enterprise Resource Planning PHP",
            link: "https://github.com/Airamvegona/ERP-PHP",
            image: "/Laptop_(27580)_-_The_Noun_Project 1.svg",
            description: "Project based on PHP, HTML, and JavaScript using MariaDB as the database and Apache server. It uses the MVC method and CRUD operations. It's fully scalable and follows clean and robust code practices."
        },
        {
            title: "Old School Forum PHP",
            link: "https://github.com/Airamvegona/OldSchool-Forum-PHP",
            image: "/old school.svg",
            description: "PHP, HTML, and JavaScript-based project using MySQL and Apache. It follows the MVC pattern and CRUD operations, is fully scalable, and adheres to clean and robust coding principles."
        },
        {
            title: "Flappy Bird JAVA",
            link: "https://github.com/Airamvegona/FlappyBird-Android-Java-only-documentation",
            image: "/flappy bird.svg",
            description: "A mobile game project based on Flappy Bird, developed with Java and Android Studio. This was used as the final project for my degree."
        },
        {
            title: "Canary Food WebApp ANGULAR",
            link: "https://github.com/Airamvegona/CanaryFoodApp-Angular",
            image: "/la bernon.svg",
            description: "A web app simulating a food delivery service, built with Angular, TypeScript, Node.js, and MongoDB as the database. Postman is used for API testing."
        },
        {
            title: "Chat with Sockets in JAVA and Docker",
            link: "https://github.com/Airamvegona/Chat-with-sockets-JAVA",
            image: "/csockets.svg",
            description: "A Java-based chat application with socket implementation and Docker used for virtual machine deployment, enabling the chat to work across multiple virtual machines."
        }
    ];

    const handleDotClick = (index: number) => {
        setCurrentProject(index);
        const elements = document.querySelectorAll('.project-item');
        elements[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const scrollPosition = container.scrollLeft;
        const itemWidth = container.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        if (newIndex !== currentProject) {
            setCurrentProject(newIndex);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 mt-16 sm:mt-28"
        >
            <h3 className="absolute top-16 sm:top-32 uppercase tracking-[26px] text-gray-500 text-xl sm:text-2xl z-30 transform md:-translate-x-[0px] sm:-translate-x-[16px]">
                Projects
            </h3>

            <div
                className="relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-28 sm:mt-40 lg:mt-16"
                onScroll={handleScroll}
            >
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="project-item w-full sm:w-screen flex-shrink-0 snap-center flex flex-col space-y-2 justify-center items-center p-8 sm:p-20 md:p-32 h-[70%] sm:h-[75%] md:h-screen"
                    >
                        <motion.img
    initial={{ y: -50, opacity: 0 }}
    transition={{ duration: 1.2 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    src={project.image}
    alt={`Project ${i + 1}`}
    className=" imgsmall800pxh w-72 h-72 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-lg object-cover transform sm:-translate-x-[20px]"
/>
<div className="space-y-8 px-4 sm:px-8 md:px-10 max-w-4xl text-center mt-8 ">
    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        {project.title}
    </h4>
    <p className="text-sm sm:text-base md:text-lg text-gray-400">
        {project.description}
    </p>

    <h1 className="text-xl sm:text-2xl text-[#F7AB0A] mb-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
        </a>
    </h1>

    {/* Navigation Dots */}
    <div className="flex hide-on-short700px space-x-3 justify-center mt-4 sm:-mt-6">
        {projects.map((_, index) => (
            <motion.div
                key={index}
                className={`cursor-pointer rounded-full w-3 h-3 ${
                    index === currentProject ? 'bg-[#F7AB0A]' : 'bg-gray-500'
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                animate={{
                    backgroundColor: index === currentProject ? '#F7AB0A' : '#6B7280',
                    scale: index === currentProject ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        ))}
    </div>
</div>

                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[65%] sm:top-[50%] bg-[#F7AB0A]/10 left-0 h-[400px] sm:h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}


