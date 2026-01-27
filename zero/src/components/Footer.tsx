import React from 'react'

const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 1rem',
            borderTop: '1px solid rgba(34, 211, 238, 0.1)',
            background: 'linear-gradient(to top, rgba(2, 6, 23, 0.9), rgba(15, 23, 42, 0.7))'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#22d3ee',
                            borderRadius: '50%'
                        }}></div>
                        <span style={{
                            fontSize: '1.125rem',
                            fontWeight: 'bold'
                        }}>LUCY NETRUNNER</span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        © 2024 Night City Archives. All data encrypted.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>𝕏</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Discord</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>GitHub</a>
                </div>

                <p style={{
                    color: '#6b7280',
                    fontSize: '0.75rem',
                    borderTop: '1px solid rgba(31, 41, 55, 0.5)',
                    paddingTop: '2rem'
                }}>
                    Warning: This site contains encrypted data. Unauthorized access is prohibited.
                    <br />
                    Connection secured with quantum encryption protocol.
                </p>
            </div>
        </footer>
    )
}

export default Footer
