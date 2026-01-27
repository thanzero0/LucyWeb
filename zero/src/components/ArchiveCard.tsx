import React from 'react'

interface ArchiveCardProps {
    title: string
    content: string
    tag: string
}

const ArchiveCard = ({ title, content, tag }: ArchiveCardProps) => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            transition: 'all 0.3s',
            cursor: 'pointer'
        }} className="card-hover">
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#22d3ee'
            }}>
                {title}
            </h3>
            <p style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
            }}>
                {content}
            </p>
            <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(31, 41, 55, 0.5)'
            }}>
                <span style={{
                    color: '#22d3ee',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em'
                }}>
                    {tag}
                </span>
            </div>
        </div>
    )
}

export default ArchiveCard
