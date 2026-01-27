export default function Home() {
  return (
    <main className="container">
      <section className="hero hero-full">
        <span className="tag"> CYBERPUNK NETRUNNER</span>

        <h1 className="hero-title glitch" data-text="LUCY">
          LUCY
        </h1>

        <p className="hero-subtitle">
          Silent. Precise. Wired to the dark side of the net.
        </p>
      </section>


      <section className="about">
        <h2 className="section-title">PROFILE</h2>
        <p>
          Lucy is a minimal interface concept inspired by cyberpunk aesthetics:
          neon light, solitude, and digital resistance.
        </p>
      </section>

      <section className="quote">
        <p>
          "The net is vast... and silent."
        </p>
      </section>

      <section className="skills">
        <h2 className="section-title">SKILLS</h2>
          <ul>
            <li>Netrunning</li>
            <li>Cyber Hacking</li>
            <li>Stealth Infiltration</li>
            <li>Neural Interface Control</li>
          </ul>
      </section>

      <section className="timeline">
         <h2 className="section-title">TIMELINE</h2>

         <ul>
            <li>
              <span className="year">2076</span>
              <p>Raised in isolation, trained for netrunning.</p>
            </li>
            <li>
              <span className="year">2077</span>
              <p>Joins David Martinez crew.</p>
            </li>
            <li>
              <span className="year">2077</span>
              <p>Escapes Night City, heading to the Moon.</p>
            </li>
          </ul>
      </section>

      <section className="gallery">
        <h2 className="section-title">GALLERY</h2>

          <div className="gallery-grid">
            <img src="https://i.pinimg.com/1200x/d7/93/27/d793278a7b6337fd0cb2d2feb7274412.jpg" alt="Lucy cyberpunk portrait" />
            <img src="https://i.pinimg.com/736x/f1/42/3e/f1423e97651fed8f3513ac0ae2a47da5.jpg" alt="Lucy netrunning scene" />
            <img src="https://i.pinimg.com/736x/f6/0f/03/f60f03469884f72bbaf8cd672ae18226.jpg" alt="Lucy Night City" />
            <img src="https://i.pinimg.com/736x/44/cb/c1/44cbc1c2aab51c919b86040156ac3862.jpg" alt="Lucy moon scene" />
          </div>
      </section>

    </main>
  )
}