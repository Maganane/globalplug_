'use client';

import { useState, useEffect } from 'react';

const backgrounds = [
    '/images/imigongo/pattern-1.png',
    '/images/imigongo/pattern-2.png',
    '/images/imigongo/pattern-3.png',
    '/images/imigongo/pattern-4.png',
    '/images/imigongo/pattern-5.png',
];

export default function BackgroundSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            // Determine next index first
            setNextIndex((prev) => (currentIndex + 1) % backgrounds.length);

            // Wait for animation to finish before updating current index
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
                setIsAnimating(false);
            }, 1000); // Match transition duration
        }, 8000); // Cycle every 8 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* Current Background - Stays until animation completes */}
            <div
                className="absolute inset-0 opacity-[0.8] transition-transform duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${backgrounds[currentIndex]})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px', // Sized down pattern
                    transform: isAnimating ? 'translateX(100%)' : 'translateX(0)', // Slide out to right
                }}
            />

            {/* Next Background - Slides in from left */}
            <div
                className="absolute inset-0 opacity-[0.8] transition-transform duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${backgrounds[(currentIndex + 1) % backgrounds.length]})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px',
                    transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)', // Slide in from left
                    zIndex: isAnimating ? 1 : 0
                }}
            />

            {/* Optional: Very subtle white overlay if needed, or remove completely if patterns should be sharp */}
        </div>
    );
}
