"use client";

import { motion } from "framer-motion";
import React, { useState, UIEvent, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import {
  SiMongodb,
  SiMysql,
  SiPowers,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaAngular,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

export default function WorkExperience() {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const experiences = 
    [
      {
        role: 'Data Management / Data Analyst',
        company: 'NTT Data',
        startDate: '04/04/2024',
        endDate: '21/07/2024',
        technologies: [
          <SiPowers size={40} className='text-yellow-500' title='Power BI' />,
          <img
            src='https://www.svgrepo.com/show/354012/looker-icon.svg'
            alt='Looker Logo'
            className='h-10 w-10'
          />,
          <SiMysql size={40} className='text-blue-600' title='MySQL' />,
          <FaJsSquare size={40} className='text-yellow-400' title='JavaScript' />,
        ],
        points: [
          'ETL Processes',
          'Creation of dashboards',
          'Migration of data from Power Query to SQL',
          'Developed advanced interactive reports and dashboards in Power BI using DAX for data analysis and optimization for AllFunds',
          'Replicated and optimized reports in Looker with SQL following a migration project for AllFunds',
          'Applied Scrum methodology with version control in Looker and Power BI using Git, Power BI pipelines, Jira, and Power Platform for efficient project management',
          'Conducted an assessment to identify the best solution for data structure and management',
        ],
        logoUrl:
          'https://saitnationproduction.blob.core.windows.net/itnation-media/2016/07/Logo-NTT-DATA.png',
      },
      
      {
        role: 'Data Management / Software Developer',
        company: 'COS Global Service',
        startDate: '01/08/2024',
        endDate: '31/10/2024',
        technologies: [
          <SiMysql size={40} className='text-blue-600' title='MySQL' />,
          <img
            src='https://www.svgrepo.com/show/354012/looker-icon.svg'
            alt='Looker Logo'
            className='h-10 w-10'
          />,
          <FaJsSquare size={40} className='text-yellow-400' title='JavaScript' />,
          <FaGitAlt size={40} className='text-red-500' title='Git' />,
          
        ],
        points: [
          'Led a team of 2 in a Scrum environment for a 2-month project with client Alcampo.',
          'Replaced Excel-based management with interactive Looker dashboards for over 500 stores.',
          'Developed underlying SQL databases and automated comparison scripts using JavaScript.',
          'Created an exclusive version control tool with my team to enhance data analysis.',
          'Increased data entry speed and efficiency, allowing stakeholders to focus on other projects.',
        ],
        logoUrl:
          'https://media.licdn.com/dms/image/v2/C4E0BAQGELBtir_tr7g/company-logo_200_200/company-logo_200_200/0/1652097412390/cosglobalservices_logo?e=1744848000&v=beta&t=G2plqTRY-oAMPA1BYLyqwHfDJ6AmTyJGx9P6mZrw4h8',
      },
      {
        role: 'Software Developer',
        company: 'Acosta Sport (Freelance)',
        startDate: '01/01/2023',
        endDate: '31/03/2024',
        technologies: [
          <FaPhp size={40} className='text-purple-600' title='PHP' />,
          <FaJsSquare size={40} className='text-yellow-400' title='JavaScript' />,
          <FaHtml5 size={40} className='text-orange-500' title='HTML5' />,
          <FaCss3Alt size={40} className='text-blue-400' title='CSS3' />,
          <SiMysql size={40} className='text-blue-600' title='MySQL' />,
        ],
        points: [
          'Developed an ERP system using PHP, HTML, JavaScript, and CSS, based on CRUD and MVC architecture.',
          'Made it scalable for potential future expansions.',
          'Used MySQL for the database, improving company/store management previously relying on Excel.',
        ],
        logoUrl: '/460581985_3833105553628718_8146515021731661404_n.jpg',
      },
      {
        role: 'Web Developer (Freelance)',
        company: 'QUATU',
        startDate: '01/01/2024',
        endDate: '30/04/2024',
        technologies: [
          <FaAngular size={40} className='text-red-600' title='Angular' />,
          <FaNodeJs size={40} className='text-green-600' title='Node.js' />,
          <SiMongodb size={40} className='text-gray-600' title='MongoDB' />,
          <FaJsSquare size={40} className='text-yellow-400' title='TypeScript' />,
          <FaFigma size={40} className='text-blue-500' title='Figma' />,
        ],
        points: [
          'Developed an interactive interface with Angular and managed backend logic with Node.js and TypeScript for a food website.',
          'Designed the interface using Figma and handled data storage with MongoDB.',
          'Implemented APIs to connect the frontend and backend seamlessly.',
        ],
        logoUrl: '/quatu.png', // Cambia por el logo oficial de QUATU si tienes la URL.
      },
   
  ];useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Para pantallas móviles
        setItemWidth(window.innerWidth / 1.5);
      } else { // Para pantallas de escritorio
        setItemWidth(window.innerWidth / 5);
      }
    };
    
    // Escuchar el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
    
    // Llamar a handleResize para establecer el valor inicial
    handleResize();

    // Limpiar el evento cuando se desmonte el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentExperience(index); // Actualiza el estado actual del proyecto
    const elements = document.querySelectorAll('.experience-item'); // Asegúrate de que los elementos tengan esta clase
    elements[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplazamiento suave
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget; // Contenedor de scroll
    const scrollPosition = container.scrollLeft; // Posición del scroll
    const newIndex = Math.round(scrollPosition / itemWidth); // Calcula el índice actual
    if (newIndex !== currentExperience) {
      setCurrentExperience(newIndex); // Actualiza el índice si ha cambiado
    }
  };

  return (
    <div className="h-screen relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="w-full lg:p-20 max-w-7xl mx-auto px-12"
      >
        <h3 className="uppercase tracking-[16px]  text-gray-500 text-2xl text-center mb-4 pt-14">
          Experience
        </h3>

        <div
          className="experience-scroll-container w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20"
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-nowrap gap-8 px-4 pb-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-item flex-shrink-0 w-full md:w-1/2 snap-center flex justify-center"
              >
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>

        <div className=" hide-on-short670px flex justify-center mt-9 space-x-3 ">
          {experiences.map((_, index) => (
            <motion.div 
              key={index}
              className={`cursor-pointer rounded-full w-3 h-3 ${
                index === currentExperience ? "bg-[#F7AB0A]" : "bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)} // Maneja el clic para desplazar y actualizar el estado
              whileHover={{ scale: 1.2 }} // Efecto de hover
              animate={{
                backgroundColor:
                  index === currentExperience ? "#F7AB0A" : "#6B7280",
                scale: index === currentExperience ? 1.4 : 1,
              }}
              transition={{ duration: 0.2 }} // Transición suave
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}