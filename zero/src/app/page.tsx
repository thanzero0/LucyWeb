export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <span className="tag">// CYBERPUNK NETRUNNER</span>

        <h1 className="title glitch" data-text="LUCY">
          LUCY
        </h1>

        <p className="subtitle">
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

    </main>
  )
}