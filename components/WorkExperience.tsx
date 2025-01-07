import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative flex flex-col text-left md:flex-row max-w-full px-10 
      justify-evenly mx-auto items-center overflow-hidden'
      style={{ height: "100vh" }} // Fija la altura al 100% del viewport
    >
      {/* Título */}
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[15px] md:tracking-[20px]
        text-gray-500 text-xl md:text-2xl'>
        Experience
      </h3>

      {/* Contenedor de tarjetas */}
      <div
        className='w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}
