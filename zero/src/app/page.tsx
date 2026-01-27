'use client'

import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import ArchiveCard from '@/components/ArchiveCard'
import Stats from '@/components/Stats'

const archiveData = [
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
]

export default function Home() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Hero />
      <Intro />

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
          {archiveData.map((card, index) => (
            <ArchiveCard key={index} {...card} />
          ))}
        </div>
      </section>

      <Stats />

    </main>
  )
}