import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  technologies: React.ReactNode[];
  points: string[];
  logoUrl: string;
};

export default function ExperienceCard({
  role,
  company,
  startDate,
  endDate,
  technologies,
  points,
  logoUrl,
}: Props) {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 
      w-[300px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-6 
      hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      {/* Imagen animada */}
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='w-24 h-24 xl:w-[150px] xl:h-[150px] rounded-full object-cover object-center'
        src={logoUrl}
        alt={`${company} Logo`}
      />

      {/* Contenido */}
      <div className='px-0 md:px-6 text-center md:text-left'>
        <h4 className='text-2xl font-light'>{role}</h4>
        <p className='font-bold text-xl mt-1'>{company}</p>

        {/* Logos de tecnologías */}
        <div className='flex justify-center md:justify-start space-x-2 my-2'>
          {technologies.map((TechIcon, index) => (
            <div key={index}>{TechIcon}</div>
          ))}
        </div>

        <p className='uppercase py-3 text-gray-300 text-sm'>
          Started: {startDate} - Ended: {endDate}
        </p>

        {/* Puntos resumidos */}
        <ul className='list-disc space-y-3 ml-5 text-base text-left hidden md:block'>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
