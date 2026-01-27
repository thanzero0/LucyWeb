'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Simple mouse tracking
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
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
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

      {/* Intro Section */}
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

      {/* Cards Section */}
      <section style={{
        padding: '5rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>DATA ARCHIVE</h2>
          <p style={{ color: '#9ca3af' }}>Encrypted files and mission logs</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { 
              title: 'DESCRIPTION', 
              content: 'Quiet netrunner living on Night City\'s edge. Expert in stealth infiltration and data extraction.',
              tag: 'CLASSIFIED'
            },
            { 
              title: 'STORY', 
              content: 'From corporate experimentation to freelance netrunning. Each hack tells a story of rebellion.',
              tag: 'ENCRYPTED'
            },
            { 
              title: 'GALLERY', 
              content: 'Visual fragments from Lucy\'s world. Neon streets and cybernetic interfaces.',
              tag: '12 FILES'
            },
            { 
              title: 'GAMES', 
              content: 'Netrunning simulations and hacking challenges. Test your skills against corporate ICE.',
              tag: 'ACTIVE'
            }
          ].map((card, index) => (
            <div key={index} style={{
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
                {card.title}
              </h3>
              <p style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {card.content}
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
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
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
          {[
            { value: '99%', label: 'Success Rate' },
            { value: '247', label: 'Missions' },
            { value: '24/7', label: 'Active' }
          ].map((stat, index) => (
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

      <style jsx>{`
        .card-hover:hover {
          border-color: rgba(34, 211, 238, 0.5);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          h1 {
            font-size: 3rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </main>
  )
}