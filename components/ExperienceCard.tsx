import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article>

            <motion.img
                initial={{
                    x: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center' src="/mi cara.png" alt="" />
            <div className='px-0 md:px10'>
                <h4 className='text-4xl font-light'>Data Analyst</h4>
                <p className='font-bold text-2xl mt-1'>Nttdata</p>
                <div className='flex space-x-2 my-2'>
                   <img className='h-10 w-10 rounded-full' src="/mi cara.png" alt="" />
                   <img className='h-10 w-10 rounded-full' src="/mi cara.png" alt="" />
                   <img className='h-10 w-10 rounded-full' src="/mi cara.png" alt="" />
                  
                </div>
                <p className='uppercase py-5 text-gray-300'>started work... - ended</p>

                <ul className='list-disc space-y-4  ml-5 text-lg'>
                    <li>Sumamary Points</li>
                    <li>Sumamary Points</li>
                    <li>Sumamary Points</li>
                    <li>Sumamary Points</li>
                </ul>
            </div>

        </article>
    )
}