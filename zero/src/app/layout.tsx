import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucy // Cyberpunk Runner',
  description: 'Silent. Precise. Wired to the dark side of the net.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Inter', system-ui, sans-serif; }
        `}</style>
      </head>
      <body style={{
        background: 'radial-gradient(circle at top, #0f172a, #020617)',
        minHeight: '100vh'
      }}>
        {/* Navbar */}
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
              <div style={{
                width: '12px',
                height: '12px',
                background: '#22d3ee',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
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
        
        {children}
        
        {/* Footer */}
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
        
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </body>
    </html>
  )
}