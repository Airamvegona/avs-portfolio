import React from 'react';
import { FaDatabase, FaJsSquare, FaHtml5, FaPhp, FaGitAlt, FaReact, FaAngular, FaDocker, FaPython, FaJava, FaLinux } from 'react-icons/fa';
import { SiMysql, SiPowers, SiMongodb, SiTypescript, SiD, SiTailwindcss, SiAndroidstudio } from 'react-icons/si';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  const skills = [
    { Icon: <SiMysql size={40} className="text-blue-600" />, label: 'MySQL' },
    { Icon: <SiPowers size={40} className="text-yellow-500" />, label: 'Power BI' },
    { Icon: <FaJsSquare size={40} className="text-yellow-400" />, label: 'JavaScript' },
    { Icon: <FaHtml5 size={40} className="text-orange-500" />, label: 'HTML5' },
    { Icon: <FaPhp size={40} className="text-indigo-500" />, label: 'PHP' },
    { Icon: <SiMongodb size={40} className="text-green-500" />, label: 'MongoDB' },
    { Icon: <FaGitAlt size={40} className="text-orange-400" />, label: 'Git' },
    { Icon: <FaReact size={40} className="text-blue-400" />, label: 'React' },
    { Icon: <SiTypescript size={40} className="text-blue-600" />, label: 'TypeScript' },
    { Icon: <FaAngular size={40} className="text-red-500" />, label: 'Angular' },
    { Icon: <SiD size={40} className="text-yellow-600" />, label: 'DAX' },
    { Icon: <FaJava size={40} className="text-red-600" />, label: 'Java' },
    { Icon: <FaDocker size={40} className="text-blue-400" />, label: 'Docker' },
    { Icon: <FaPython size={40} className="text-blue-400" />, label: 'Python' },
    { Icon: <SiTailwindcss size={40} className="text-teal-500" />, label: 'Tailwind CSS' },
    { Icon: (
        <img
          src="https://www.svgrepo.com/show/354012/looker-icon.svg"
          alt="Looker"
          className="w-10 h-10"
        />
      ),
      label: 'Looker',
    },
    { Icon: <FaLinux size={40} className="text-black" />, label: 'Linux' },
    { Icon: <SiAndroidstudio size={40} className="text-green-500" />, label: 'Android S' },
  ];

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[14px] text-gray-500 text-2xl z-10">
        Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-h-[70vh] sm:max-h-full mt-20 sm:mt-32 md:mt-40 xl:mt-0 overflow-y-auto">
        {skills.map((skill, index) => (
          <Skill key={index} Icon={skill.Icon} label={skill.label} directionLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
