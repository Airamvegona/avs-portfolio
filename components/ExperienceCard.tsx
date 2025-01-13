"use client"

import { motion } from 'framer-motion';
import React from 'react';

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
    <article className='relative flex flex-col rounded-lg items-center space-y-4 
      w-[600px] h-[500px] sm:h-[600px] snap-center bg-[#292929] p-8 
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
      border border-gray-800'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-24 h-24 rounded-full object-cover object-center'
        src={logoUrl}
        alt={`${company} Logo`}
      />

      <div className='px-0 md:px-10 w-full'>
        <h4 className='text-2xl font-light text-center'>{role}</h4>
        <p className='font-bold text-xl mt-1 text-center'>{company}</p>

        <div className='flex justify-center space-x-2 my-4'>
          {technologies.map((tech, index) => (
            <div key={index}>{tech}</div>
          ))}
        </div>

        <p className='uppercase py-3 text-gray-300 text-sm text-center'>
          {startDate} - {endDate}
        </p>

        <ul className='list-disc space-y-4 hidden sm:block ml-5 sm:visible text-sm sm:h-56 overflow-y-auto pr-5'>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}