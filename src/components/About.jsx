import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

function About() {
  const [portraitLoaded, setPortraitLoaded] = useState(true)

  return (
    <section className="about-section section-band" id="about">
      <div className="page-width about-layout">
        <div className="section-label"><span>01</span> A little context</div>
        <div className="about-copy">
          <h2>AI student.<br /><em>Software builder.</em></h2>
          <p>
            I’m pursuing a B.Tech in Artificial Intelligence and Data Science at
            Sri Venkateswara College of Engineering, graduating in 2027. I have a
            strong foundation in data structures, object-oriented programming,
            backend development, SQL and software engineering.
          </p>
          <p>
            I build AI-powered and full-stack applications involving backend APIs,
            databases and machine learning, with an interest in scalable application
            architecture and practical software engineering.
          </p>
          <a className="text-link" href="#experience">
            How I work <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <figure className="about-aside about-portrait">
          <div className="about-photo-frame">
            {portraitLoaded ? (
              <img
                src="/profile.png"
                alt="Haarini Rajendran"
                onError={() => setPortraitLoaded(false)}
              />
            ) : (
              <div className="about-photo-fallback" aria-label="Haarini Rajendran">
                HR
              </div>
            )}
          </div>
          <figcaption>
            <span>Haarini Rajendran</span>
            <small>ENGLISH · TAMIL</small>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default About
