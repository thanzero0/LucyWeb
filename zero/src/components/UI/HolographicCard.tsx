'use client';

import React from 'react';

interface HolographicCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: 'cyan' | 'magenta' | 'purple';
}

export default function HolographicCard({
    children,
    className = '',
    glowColor = 'cyan'
}: HolographicCardProps) {
    const glowColors = {
        cyan: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
        magenta: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]',
        purple: 'hover:shadow-[0_0_30px_rgba(157,0,255,0.3)]'
    };

    return (
        <div
            className={`relative group ${className}`}
            style={{
                background: 'rgba(26, 26, 46, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
            }}
        >
            {/* Holographic border effect */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(255,0,255,0.1), rgba(157,0,255,0.1))',
                    backgroundSize: '200% 200%',
                    animation: 'holographic 3s ease infinite',
                    pointerEvents: 'none'
                }}
            />

            {/* Content */}
            <div className="relative z-10 p-6">
                {children}
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--cyber-cyan)] rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--cyber-magenta)] rounded-br-xl" />
        </div>
    );
}
