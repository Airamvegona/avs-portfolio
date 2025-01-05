import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BrackgroundCircles from './BrackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Web Developer', 'Designer', 'Freelancer'],
        loop: true,
        deleteSpeed: 2000,
    });

  return (

   
    <div>
        <BrackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor=''/>
        </h1>


    </div>
  );
}