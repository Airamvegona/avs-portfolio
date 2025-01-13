import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

type Props = {};

export default function Header({ }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 flex p-5 items-center justify-between max-w-7xl mx-auto z-20">
            {/* Social Icons - Izquierda */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="hidden md:flex flex-row items-center space-x-6"
            >
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/airamvega/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin size={30} />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/Airamvegona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition duration-300"
                >
                    <FaGithub size={30} />
                </a>

                {/* PDF Download */}
                <a
                    href="https://drive.google.com/file/d/1CiZqqH4S5PeG12zJK8-4K7jVDgCGAL17/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 transition duration-300"
                >
                    <FaFilePdf size={30} />
                </a>
            </motion.div>

            {/* Botón Contact Me - Derecha */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="hidden md:flex flex-row items-center text-gray-300 cursor-pointer"
                tabIndex={0}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <FaEnvelope
                    className="cursor-pointer text-gray-500 hover:text-gray-300 transition-transform transform hover:scale-110"
                    size={24}
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-300 p-5">Contact Me</p>
            </motion.div>

            {/* Navbar móvil */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-500 hover:text-gray-300 transition-transform transform hover:scale-110"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-16 left-0 w-full bg-[#F7AB0A]/40 text-white p-5 flex flex-col items-start space-y-4"
                    >
                        <a
                            href="https://github.com/Airamvegona"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-[#F7AB0A] transition duration-300"
                        >
                            <FaGithub size={20} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/airamvega/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-[#F7AB0A] transition duration-300"
                        >
                            <FaLinkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1CiZqqH4S5PeG12zJK8-4K7jVDgCGAL17/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-[#F7AB0A] transition duration-300"
                        >
                            <FaFilePdf size={20} />
                            <span>CV</span>
                        </a>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex items-center space-x-2 hover:text-[#F7AB0A] transition duration-300"
                        >
                            <FaEnvelope size={20} />
                            <span>Contact Me</span>
                        </button>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
