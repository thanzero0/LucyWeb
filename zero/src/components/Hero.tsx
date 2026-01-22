'use client';

import React from 'react';
import GlitchText from './UI/GlitchText';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated particles background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--cyber-cyan) 0%, transparent 70%)',
                        animation: 'float 6s ease-in-out infinite',
                        filter: 'blur(40px)'
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--cyber-magenta) 0%, transparent 70%)',
                        animation: 'float 8s ease-in-out infinite reverse',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="cyber-container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div
                        className="space-y-6"
                        style={{ animation: 'fadeInUp 1s ease-out' }}
                    >
                        <div className="space-y-2">
                            <p
                                className="text-sm uppercase tracking-widest"
                                style={{
                                    color: 'var(--cyber-cyan)',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                Cyberpunk: Edgerunners
                            </p>
                            <GlitchText className="text-6xl md:text-7xl lg:text-8xl font-black">
                                LUCY
                            </GlitchText>
                            <div
                                className="h-1 w-32"
                                style={{
                                    background: 'var(--gradient-cyber)',
                                    boxShadow: 'var(--glow-cyan)'
                                }}
                            />
                        </div>

                        <p
                            className="text-xl md:text-2xl leading-relaxed"
                            style={{
                                color: 'var(--cyber-white)',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 300
                            }}
                        >
                            Elite Netrunner | Dream Chaser | Night City Legend
                        </p>

                        <p
                            className="text-lg leading-relaxed opacity-80"
                            style={{ color: 'var(--cyber-white)' }}
                        >
                            A skilled netrunner with dreams of escaping to the moon, Lucy is a mysterious and talented member of Maine's crew. Her expertise in hacking and her enigmatic past make her one of the most fascinating characters in Night City.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div
                                className="px-6 py-3 rounded-lg"
                                style={{
                                    background: 'rgba(0, 240, 255, 0.1)',
                                    border: '1px solid var(--cyber-cyan)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <p className="text-sm opacity-60">Occupation</p>
                                <p className="text-lg font-semibold" style={{ color: 'var(--cyber-cyan)' }}>Netrunner</p>
                            </div>
                            <div
                                className="px-6 py-3 rounded-lg"
                                style={{
                                    background: 'rgba(255, 0, 255, 0.1)',
                                    border: '1px solid var(--cyber-magenta)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <p className="text-sm opacity-60">Affiliation</p>
                                <p className="text-lg font-semibold" style={{ color: 'var(--cyber-magenta)' }}>Maine's Crew</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="relative"
                        style={{ animation: 'fadeInUp 1s ease-out 0.3s backwards' }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                border: '2px solid rgba(0, 240, 255, 0.3)',
                                boxShadow: '0 0 50px rgba(0, 240, 255, 0.3)',
                            }}
                        >
                            <div
                                className="aspect-[3/4] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                                style={{
                                    backgroundImage: 'url(/lucy-hero.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="text-center p-8">
                                    <p className="text-6xl mb-4">🌙</p>
                                    <p className="text-2xl font-bold text-gradient">To The Moon</p>
                                </div>
                            </div>

                            {/* Scan line effect */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(transparent 50%, rgba(0, 240, 255, 0.03) 50%)',
                                    backgroundSize: '100% 4px',
                                    animation: 'scanline 8s linear infinite'
                                }}
                            />
                        </div>

                        {/* Floating accent elements */}
                        <div
                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-50"
                            style={{
                                background: 'var(--cyber-cyan)',
                                filter: 'blur(30px)',
                                animation: 'neonPulse 2s ease-in-out infinite'
                            }}
                        />
                        <div
                            className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-50"
                            style={{
                                background: 'var(--cyber-magenta)',
                                filter: 'blur(40px)',
                                animation: 'neonPulse 2s ease-in-out infinite 1s'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                style={{ animation: 'float 2s ease-in-out infinite' }}
            >
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm opacity-60">Scroll Down</p>
                    <div
                        className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
                        style={{ borderColor: 'var(--cyber-cyan)' }}
                    >
                        <div
                            className="w-1 h-2 rounded-full"
                            style={{
                                background: 'var(--cyber-cyan)',
                                animation: 'float 1.5s ease-in-out infinite'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
