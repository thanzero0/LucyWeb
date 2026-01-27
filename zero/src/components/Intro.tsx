import React from 'react'

const Intro = () => {
    return (
        <section style={{
            padding: '5rem 1rem',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    background: 'linear-gradient(90deg, #22d3ee, #0ea5e9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    DEEP DIVE
                </h2>
                <div style={{
                    width: '96px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #22d3ee, #0ea5e9)',
                    margin: '0 auto 2rem auto'
                }}></div>
                <p style={{
                    color: '#9ca3af',
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                    marginBottom: '3rem'
                }}>
                    A netrunner shaped by silence, neon light, and the endless noise of the city.
                    This space documents fragments of Lucy&apos;s world—from the shadows of the net
                    to the chrome-plated streets of Night City.
                </p>
            </div>
        </section>
    )
}

export default Intro
