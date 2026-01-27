'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let x = 0.5
    let y = 0.5
    let tx = 0.5
    let ty = 0.5

    const move = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth
      ty = e.clientY / window.innerHeight
    }

    const loop = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06

      document.documentElement.style.setProperty('--mx', `${x}`)
      document.documentElement.style.setProperty('--my', `${y}`)

      requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move)
    loop()

    return () => window.removeEventListener('pointermove', move)
  }, [])


  return (
    <main className="container">
      <section className="hero">
        <h1 className="hero-title">LUCY</h1>
        <p className="hero-subtitle">
          Silent. Precise. Wired to the dark side of the net.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3 className="card-title">DESCRIPTION</h3>
          <p className="card-text">
            Lucy is a quiet netrunner living on the edge of Night City,
            navigating data streams and isolation.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">STORY</h3>
          <p className="card-text">
            From the shadows of the net to the chaos of reality,
            her story unfolds through loss, trust, and escape.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">GALLERY</h3>
          <p className="card-text">
            Visual moments and fragments from Lucy’s world.
          </p>
        </div>

        <div className="card card-disabled">
          <h3 className="card-title">COMING SOON</h3>
          <p className="card-text">
            More data will be available soon.
          </p>
        </div>
      </section>

    </main>
  )
}