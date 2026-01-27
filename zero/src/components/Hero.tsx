'use client'

import React, { useEffect } from 'react'

const Hero = () => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight
            document.documentElement.style.setProperty('--mouse-x', x.toString())
            document.documentElement.style.setProperty('--mouse-y', y.toString())
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `
          radial-gradient(
            800px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
            rgba(34, 211, 238, 0.1),
            transparent 40%
          )
        `,
                transition: 'background 0.3s ease-out'
            }}></div>

            {/* Content */}
            <div style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
                maxWidth: '900px'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(34, 211, 238, 0.1)',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        borderRadius: '9999px',
                        color: '#22d3ee',
                        fontSize: '0.875rem',
                        letterSpacing: '0.1em'
                    }}>
                        NETRUNNER PROFILE
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                    marginBottom: '1.5rem',
                    color: '#22d3ee',
                    textShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                }}>
                    LUCY
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: '#9ca3af',
                    letterSpacing: '0.05em',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Silent. Precise. Wired to the dark side of the net.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    marginTop: '3rem'
                }}>
                    <button style={{
                        padding: '0.75rem 2rem',
                        background: '#22d3ee',
                        color: 'black',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        Access Data
                    </button>
                    <button style={{
                        padding: '0.75rem 2rem',
                        background: 'transparent',
                        color: '#22d3ee',
                        border: '1px solid rgba(34, 211, 238, 0.5)',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        View Profile
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
