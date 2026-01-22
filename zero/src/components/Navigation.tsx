'use client';

import React, { useState } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '📖' },
        { id: 'stories', label: 'Stories', icon: '📝' },
        { id: 'gallery', label: 'Gallery', icon: '🖼️' }
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                background: 'rgba(10, 10, 15, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)'
            }}
        >
            <div className="cyber-container">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                                background: 'var(--gradient-cyber)',
                                boxShadow: 'var(--glow-cyan)'
                            }}
                        >
                            <span className="text-2xl">🌙</span>
                        </div>
                        <div>
                            <h1
                                className="text-xl font-bold"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--cyber-white)'
                                }}
                            >
                                LUCY
                            </h1>
                            <p className="text-xs opacity-60">Cyberpunk Archive</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="px-6 py-2 rounded-lg transition-all duration-300"
                                style={{
                                    background: activeSection === item.id
                                        ? 'rgba(0, 240, 255, 0.1)'
                                        : 'transparent',
                                    border: activeSection === item.id
                                        ? '1px solid var(--cyber-cyan)'
                                        : '1px solid transparent',
                                    color: activeSection === item.id
                                        ? 'var(--cyber-cyan)'
                                        : 'var(--cyber-white)',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.9rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeSection !== item.id) {
                                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeSection !== item.id) {
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }
                                }}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        style={{ color: 'var(--cyber-cyan)' }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
