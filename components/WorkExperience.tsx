import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { 
  SiMongodb,
  SiMysql, 
  SiPowers 
} from 'react-icons/si';
import { 
  FaCss3Alt, 
  FaGitAlt, 
  FaHtml5, 
  FaJsSquare, 
  FaPhp, 
  FaAngular, 
  FaNodeJs, 
  FaDatabase, 
  FaFigma 
} from 'react-icons/fa';

export default function WorkExperience() {
  const experiences = [
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
  ];

  return (
    <motion.div
  initial={{ opacity: 0 }}
  transition={{ duration: 1.5 }}
  whileInView={{ opacity: 1 }}
  className='relative flex flex-col text-left md:flex-row max-w-full px-52 
  justify-evenly mx-auto items-center overflow-hidden'
>
  {/* Título */}
  <h3 className='absolute top-20 sm:top-2 uppercase tracking-[20px]
      text-gray-500 text-xl sm:text-2xl'>
    Experience
  </h3>

  {/* Contenedor de tarjetas */}
  <div
    className='w-full flex space-x-28 overflow-x-scroll overflow-y-hidden p-32 snap-x snap-mandatory 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
  >
    {experiences.map((exp, index) => (
      <ExperienceCard key={index} {...exp} />
    ))}
  </div>
</motion.div>

  );
}
