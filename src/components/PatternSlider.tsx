'use client';

import React, { useState, useEffect } from 'react';

const patterns = [
    '/images/imigongo/Imigongo11.png',
    '/images/imigongo/Imigongo22.png',
    '/images/imigongo/Imigongo44.png',
];

interface PatternSliderProps {
    opacity?: number;
    scale?: number;
    speed?: number; // Seconds per slide
}

const PatternSlider: React.FC<PatternSliderProps> = ({
    opacity = 0.05,
    scale = 2, // Default zoom
    speed = 10
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % patterns.length);
        }, speed * 1000);

        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {patterns.map((pattern, index) => (
                <div
                    key={pattern}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
                    style={{
                        backgroundImage: `url(${pattern})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: `${150 * scale}px`, // Zoomed in effect
                        opacity: index === currentIndex ? opacity : 0,
                        animation: index === currentIndex ? `slideBackground ${speed + 1}s linear infinite` : 'none',
                    }}
                />
            ))}
            <style jsx global>{`
        @keyframes slideBackground {
          from { background-position: 0 0; }
          to { background-position: 100px 0; }
        }
      `}</style>
        </div>
    );
};

export default PatternSlider;
