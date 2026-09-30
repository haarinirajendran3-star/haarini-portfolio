import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'

function Hero() {
  const [portraitLoaded, setPortraitLoaded] = useState(true)

  return (
    <section className="hero-section page-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> AI &amp; Data Science · Class of 2027</p>
        <h1 id="hero-title">Haarini<br />Rajendran<span className="hero-period">.</span></h1>
        <p className="hero-description">
          AI &amp; software developer building full-stack applications, backend APIs
          and machine-learning systems. Seeking Software Development Engineer and
          Backend Software Engineer internship opportunities.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore projects <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="#about">
            About me <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          {portraitLoaded ? (
            <img
              src="/profile.png"
              alt="Portrait of Haarini Rajendran"
              onError={() => setPortraitLoaded(false)}
            />
          ) : (
            <div className="portrait-fallback" aria-label="Haarini Rajendran">
              <span>HR</span>
            </div>
          )}
          <div className="portrait-index">PROFILE / 2026</div>
          <div className="portrait-badge"><Sparkles size={15} /> AI + SOFTWARE</div>
          <div className="portrait-caption">
            <span>Haarini Rajendran</span>
            <span>AI &amp; Data Science</span>
          </div>
        </div>
      </div>
      <a className="scroll-note" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}

export default Hero
