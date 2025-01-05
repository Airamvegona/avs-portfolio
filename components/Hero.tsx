import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BrackgroundCircles from './BrackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, My Name is Airam Vega',
            'Hallo, mein Name ist Airam Vega',
            '<I love technology/>',
            "<Ich liebe Technologie/>"],

        loop: true,
        deleteSpeed: 100,
    });

  return (

   
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BrackgroundCircles />
     
        <h1>
            <span>{text}</span>
            <Cursor cursorColor=''/>
        </h1>


    </div>
  );
}
<Image
src="/mi cara.png"
width={500}
height={500}
alt="Me"
/>
