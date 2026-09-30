import { education, experience } from '../data/experience.js'
import { ArrowUpRight } from 'lucide-react'

function Experience() {
  return (
    <section className="experience-section page-width section-pad" id="experience">
      <div className="experience-intro">
        <div className="section-label"><span>04</span> Experience &amp; education</div>
        <h2>Learning by<br /><em>building.</em></h2>
        <p>
          Internship experience in data analysis, supported by a strong academic
          foundation in artificial intelligence and data science.
        </p>
        <a className="text-link" href="#contact">
          Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-row" key={item.title}>
            <span className="experience-index">0{index + 1}</span>
            <div>
              <h3>{item.title} <span className="experience-organization">at {item.organization}</span></h3>
              <p className="experience-period">{item.period}</p>
              <ul className="experience-details">
                {item.description.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
            <span className="experience-marker" aria-hidden="true" />
          </article>
        ))}
        <div className="education-list" id="education">
          <div className="section-label"><span>EDU</span> Education</div>
          {education.map((item) => (
            <article className="education-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
              </div>
              <div className="education-result"><span>{item.period}</span><strong>{item.result}</strong></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
