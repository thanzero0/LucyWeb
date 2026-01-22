'use client';

import React from 'react';

interface GlitchTextProps {
    children: React.ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function GlitchText({
    children,
    className = '',
    as: Component = 'h1'
}: GlitchTextProps) {
    return (
        <Component
            className={`relative inline-block ${className}`}
            style={{
                fontFamily: 'var(--font-heading)',
                animation: 'glitchText 3s infinite'
            }}
        >
            {children}
        </Component>
    );
}
