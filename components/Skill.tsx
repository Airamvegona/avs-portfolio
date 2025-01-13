import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  Icon: React.ReactNode; // Prop para el ícono
  label: string; // Nombre de la tecnología
  directionLeft?: boolean; // Animación desde la izquierda o derecha
};

export default function Skill({ Icon, label, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-full bg-gray-100 border border-gray-300 flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        {Icon}
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-sm sm:text-base md:text-lg font-bold text-black opacity-100">{label}</p>
        </div>
      </div>
    </div>
  );
}
