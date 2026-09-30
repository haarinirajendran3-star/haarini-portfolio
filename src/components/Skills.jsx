import { skills } from '../data/skills.js'
import { BrainCircuit, Code2, Database, GitBranch, PanelsTopLeft, Server } from 'lucide-react'

const icons = { BrainCircuit, Code2, Database, GitBranch, PanelsTopLeft, Server }

function Skills() {
  return (
    <section className="skills-section page-width section-pad" id="skills">
      <div className="section-heading">
        <div className="section-label"><span>02</span> Technical skills</div>
        <h2>Tools I use to<br /><em>build and analyze.</em></h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = icons[group.icon]
          return (
            <article className="skill-item" key={group.title}>
              <div className="skill-icon"><Icon size={21} strokeWidth={1.7} /></div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
