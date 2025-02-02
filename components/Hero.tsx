import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BrackgroundCircles from './BrackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, my name is Airam Vega',
            'Hallo, mein Name ist Airam Vega',
            '<I-love-technology/>',
            "<Ich-liebe-Technologie/>"],

        loop: true,
        delaySpeed: 2000,
    });

    return (


        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BrackgroundCircles />

            <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="/mi cara.png"
                width={500}
                height={500}
                alt="Me"
            />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Developer</h2>

                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>

                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>




                </div>
            </div>





        </div>
    );
}




