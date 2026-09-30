import { achievements } from '../data/experience.js'
import { ArrowUpRight } from 'lucide-react'

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="page-width achievements-layout">
        <div className="section-label"><span>05</span> Achievements</div>
        <h2>Progress,<br /><em>in practice.</em></h2>
        <div className="achievement-list">
          {achievements.map((item) => (
            <div className="achievement-row" key={item.title}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
