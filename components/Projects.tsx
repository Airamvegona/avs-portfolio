import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Projects({}: Props) {
    const projects = [
        {
            title: "Enterprise Resource Planning PHP",
            link: "https://github.com/Airamvegona/ERP-PHP",
            image: "/Laptop_(27580)_-_The_Noun_Project 1.svg", // Replace with your image URL
            description: "Project based on PHP, HTML, and JavaScript using MariaDB as the database and Apache server. It uses the MVC method and CRUD operations. It's fully scalable and follows clean and robust code practices."
        },
        {
            title: "Old School Forum PHP",
            link: "https://github.com/Airamvegona/OldSchool-Forum-PHP",
            image: "/old school.svg", // Replace with your image URL
            description: "PHP, HTML, and JavaScript-based project using MySQL and Apache. It follows the MVC pattern and CRUD operations, is fully scalable, and adheres to clean and robust coding principles."
        },
        {
            title: "Flappy Bird JAVA",
            link: "https://github.com/Airamvegona/FlappyBird-Android-Java-only-documentation",
            image: "/flappy bird.svg", // Replace with your image URL
            description: "A mobile game project based on Flappy Bird, developed with Java and Android Studio. This was used as the final project for my degree."
        },
        {
            title: "Canary Food WebApp ANGULAR",
            link: "https://github.com/Airamvegona/CanaryFoodApp-Angular",
            image: "/la bernon.svg", // Replace with your image URL
            description: "A web app simulating a food delivery service, built with Angular, TypeScript, Node.js, and MongoDB as the database. Postman is used for API testing."
        },
        {
            title: "Chat with Sockets in JAVA and Docker",
            link: "https://github.com/Airamvegona/Chat-with-sockets-JAVA",
            image: "/csockets.svg", // Replace with your image URL
            description: "A Java-based chat application with socket implementation and Docker used for virtual machine deployment, enabling the chat to work across multiple virtual machines."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 mt-16 sm:mt-28"
        >
            {/* Título */}
            <h3 className="absolute top-16 sm:top-32 uppercase tracking-[26px] text-gray-500 text-xl sm:text-2xl z-30 transform md:-translate-x-[0px] sm:-translate-x-[16px]">
                Projects
            </h3>

            {/* Contenedor de proyectos */}
            <div
    className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-28 sm:mt-40 lg:mt-16"
>
    {projects.map((project, i) => (
        <div
            key={i}
            className="w-[90%] sm:w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-8 sm:p-20 md:p-32 h-[70%] sm:h-[75%] md:h-screen"
        >
            <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={project.image}
                alt={`Project ${i + 1}`}
                className="w-96 h-96 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-lg object-cover transform sm:-translate-x-[20px]"
            />

            {/* Detalles del proyecto */}
            <div className="space-y-12 px-4 sm:px-8 md:px-10 max-w-4xl text-center mt-8">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    <span className="underline decoration-[#F7AB0A]/50"></span>{' '}
                    {project.title}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    {project.description}
                </p>

                {/* GitHub Link */}
                <h1 className="text-xl sm:text-2xl text-[#F7AB0A] mt-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </h1>
            </div>
        </div>
    ))}
</div>


            {/* Fondo decorativo */}
            <div className="w-full absolute top-[65%] sm:top-[50%] bg-[#F7AB0A]/10 left-0 h-[400px] sm:h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}
