'use client'

import React from 'react'

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1rem 1.5rem',
            backdropFilter: 'blur(10px)',
            background: 'rgba(0, 0, 0, 0.8)',
            borderBottom: '1px solid rgba(34, 211, 238, 0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div className="pulse-dot" style={{
                        width: '12px',
                        height: '12px',
                        background: '#22d3ee',
                        borderRadius: '50%',
                    }}></div>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.05em'
                    }}>
                        LUCY<span style={{ color: '#22d3ee' }}>.NET</span>
                    </span>
                </div>

                <div style={{
                    display: 'none',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <a href="#" style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s'
                    }}>Home</a>
                    <a href="#" style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s'
                    }}>Profile</a>
                    <a href="#" style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s'
                    }}>Archive</a>
                    <button style={{
                        padding: '0.5rem 1rem',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        background: 'transparent',
                        color: '#22d3ee',
                        borderRadius: '0.5rem',
                        cursor: 'pointer'
                    }}>Login</button>
                </div>

                <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#d1d5db',
                    cursor: 'pointer'
                }}>
                    <div style={{ width: '24px', height: '14px', position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            height: '2px',
                            background: 'currentColor',
                            marginBottom: '4px'
                        }}></div>
                        <div style={{
                            width: '100%',
                            height: '2px',
                            background: 'currentColor',
                            marginBottom: '4px'
                        }}></div>
                        <div style={{
                            width: '100%',
                            height: '2px',
                            background: 'currentColor'
                        }}></div>
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
