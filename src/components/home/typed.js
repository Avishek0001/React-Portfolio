import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    useEffect(() => {
        // Options for the typed.js instance
        const options = {
            strings: ['A MERN-Stack Developer', 'A Full-Stack Developer'],
            typeSpeed: 80, // typing speed in milliseconds
            backSpeed: 25, // backspacing speed in milliseconds
            loop: true, // loop the animation
        };

        // Create a new instance of typed.js
        const typed = new Typed('.typing-animation', options);

        // Clean up the typed.js instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return <span className="typing-animation"></span>;
};

export default TypingAnimation;