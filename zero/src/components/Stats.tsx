import React from 'react'

const statsData = [
    { value: '99%', label: 'Success Rate' },
    { value: '247', label: 'Missions' },
    { value: '24/7', label: 'Active' }
]

const Stats = () => {
    return (
        <section style={{
            padding: '5rem 1rem',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
            }}>
                {statsData.map((stat, index) => (
                    <div key={index} style={{
                        padding: '2rem',
                        background: 'rgba(30, 41, 59, 0.3)',
                        borderRadius: '0.75rem'
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#22d3ee',
                            marginBottom: '0.5rem'
                        }}>
                            {stat.value}
                        </div>
                        <div style={{ color: '#9ca3af' }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
