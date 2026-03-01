'use client';

export default function BackgroundSlider() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
                pointerEvents: 'none',
                backgroundColor: 'white'
            }}
        >
            {/* Static Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.08,
                    backgroundImage: 'url(/images/backgrounds/linear-pattern.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px',
                }}
            />
        </div>
    );
}
