'use client';

import React from 'react';

interface NeonButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'cyan' | 'magenta' | 'purple';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

export default function NeonButton({
    children,
    onClick,
    variant = 'cyan',
    type = 'button',
    className = '',
    disabled = false
}: NeonButtonProps) {
    const variants = {
        cyan: {
            bg: 'rgba(0, 240, 255, 0.1)',
            border: 'var(--cyber-cyan)',
            shadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            hoverShadow: '0 0 30px rgba(0, 240, 255, 0.8)'
        },
        magenta: {
            bg: 'rgba(255, 0, 255, 0.1)',
            border: 'var(--cyber-magenta)',
            shadow: '0 0 20px rgba(255, 0, 255, 0.5)',
            hoverShadow: '0 0 30px rgba(255, 0, 255, 0.8)'
        },
        purple: {
            bg: 'rgba(157, 0, 255, 0.1)',
            border: 'var(--cyber-purple)',
            shadow: '0 0 20px rgba(157, 0, 255, 0.5)',
            hoverShadow: '0 0 30px rgba(157, 0, 255, 0.8)'
        }
    };

    const style = variants[variant];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`relative px-8 py-3 font-semibold uppercase tracking-wider transition-all duration-300 ${className}`}
            style={{
                background: style.bg,
                border: `2px solid ${style.border}`,
                color: 'var(--cyber-white)',
                borderRadius: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
                if (!disabled) {
                    e.currentTarget.style.boxShadow = style.hoverShadow;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled) {
                    e.currentTarget.style.boxShadow = style.shadow;
                    e.currentTarget.style.transform = 'translateY(0)';
                }
            }}
        >
            {children}
        </button>
    );
}
