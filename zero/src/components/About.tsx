'use client';

import React from 'react';
import HolographicCard from './UI/HolographicCard';

export default function About() {
    const stats = [
        { label: 'Netrunning Level', value: 'Elite', color: 'cyan' },
        { label: 'Crew Status', value: 'Active', color: 'magenta' },
        { label: 'Dream', value: 'Moon', color: 'purple' }
    ];

    const abilities = [
        { name: 'Advanced Netrunning', description: 'Expert-level hacking and network infiltration capabilities', icon: '🧠' },
        { name: 'Cyberdeck Mastery', description: 'Proficient with cutting-edge cyberdeck technology', icon: '💻' },
        { name: 'Stealth Operations', description: 'Skilled in covert operations and data extraction', icon: '🥷' },
        { name: 'Combat Training', description: 'Trained in both armed and unarmed combat', icon: '⚔️' }
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'rgba(15, 15, 30, 0.3)' }}>
            <div className="cyber-container">
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        ABOUT LUCY
                    </h2>
                    <p className="text-lg opacity-80">The Netrunner with a Dream</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Bio */}
                    <HolographicCard>
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{
                                color: 'var(--cyber-cyan)',
                                fontFamily: 'var(--font-heading)'
                            }}
                        >
                            Biography
                        </h3>
                        <div className="space-y-4 text-base leading-relaxed opacity-90">
                            <p>
                                Lucy is a highly skilled netrunner and a prominent member of Maine's edgerunner crew in Night City.
                                With her distinctive white hair and mysterious past, she stands out as one of the most talented hackers in the city.
                            </p>
                            <p>
                                Trained from a young age in the art of netrunning, Lucy possesses exceptional abilities that make her
                                invaluable to her crew. Her expertise in navigating the digital realm and extracting valuable data has
                                earned her a reputation among Night City's underground.
                            </p>
                            <p>
                                Despite her dangerous profession, Lucy harbors a simple yet profound dream: to escape to the moon,
                                far away from the chaos and violence of Night City. This dream drives her actions and defines her
                                character throughout her journey.
                            </p>
                        </div>
                    </HolographicCard>

                    {/* Stats */}
                    <div className="space-y-6">
                        <HolographicCard>
                            <h3
                                className="text-2xl font-bold mb-6"
                                style={{
                                    color: 'var(--cyber-magenta)',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                Character Stats
                            </h3>
                            <div className="space-y-4">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm opacity-80">{stat.label}</span>
                                            <span
                                                className="font-bold"
                                                style={{
                                                    color: stat.color === 'cyan' ? 'var(--cyber-cyan)' :
                                                        stat.color === 'magenta' ? 'var(--cyber-magenta)' :
                                                            'var(--cyber-purple)'
                                                }}
                                            >
                                                {stat.value}
                                            </span>
                                        </div>
                                        <div
                                            className="h-2 rounded-full overflow-hidden"
                                            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: '90%',
                                                    background: stat.color === 'cyan' ? 'var(--cyber-cyan)' :
                                                        stat.color === 'magenta' ? 'var(--cyber-magenta)' :
                                                            'var(--cyber-purple)',
                                                    boxShadow: stat.color === 'cyan' ? 'var(--glow-cyan)' :
                                                        stat.color === 'magenta' ? 'var(--glow-magenta)' :
                                                            'var(--glow-purple)',
                                                    animation: 'fadeInUp 1s ease-out'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </HolographicCard>

                        <HolographicCard>
                            <div className="text-center">
                                <p className="text-6xl mb-4">🌙</p>
                                <p
                                    className="text-xl font-bold mb-2"
                                    style={{
                                        color: 'var(--cyber-purple)',
                                        fontFamily: 'var(--font-heading)'
                                    }}
                                >
                                    "I want to go to the moon"
                                </p>
                                <p className="text-sm opacity-60">Lucy's Dream</p>
                            </div>
                        </HolographicCard>
                    </div>
                </div>

                {/* Abilities */}
                <div>
                    <h3
                        className="text-3xl font-bold mb-8 text-center"
                        style={{
                            color: 'var(--cyber-cyan)',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        Abilities & Skills
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {abilities.map((ability, index) => (
                            <HolographicCard
                                key={index}
                                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
                            >
                                <div className="text-center space-y-3">
                                    <div className="text-4xl mb-2">{ability.icon}</div>
                                    <h4
                                        className="text-lg font-bold"
                                        style={{
                                            color: 'var(--cyber-cyan)',
                                            fontFamily: 'var(--font-heading)'
                                        }}
                                    >
                                        {ability.name}
                                    </h4>
                                    <p className="text-sm opacity-80 leading-relaxed">
                                        {ability.description}
                                    </p>
                                </div>
                            </HolographicCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
