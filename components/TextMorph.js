'use client';

import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
export default function TextMorph() {
    const TEXTS = ['Formateur', 'Bootcamp', 'Développeur', 'Freelance', 'Mentor'];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
      <span style={{fontSize:"14vw"}} className='absolute opacity-10 font-bold z-0'>
        <TextTransition springConfig={presets.default}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </span>

    )
}
