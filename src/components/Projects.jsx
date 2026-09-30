import { BrainCircuit, Scale } from 'lucide-react'
import { projects } from '../data/projects.js'

const icons = { BrainCircuit, Scale }

function Projects() {
  return (
    <section className="projects-section section-band" id="projects">
      <div className="page-width section-pad">
        <div className="projects-heading">
          <div>
            <div className="section-label"><span>03</span> Selected projects</div>
            <h2>Ideas made <em>tangible.</em></h2>
          </div>
          <p>AI-powered applications spanning trend analysis and legal query processing.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = icons[project.icon]
            return (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-topline"><span>PROJECT / 0{index + 1}</span><span>{project.shortLabel}</span></div>
                  <div className="visual-center">
                    <span className="visual-orbit orbit-one" />
                    <span className="visual-orbit orbit-two" />
                    <span className="visual-icon"><Icon size={34} strokeWidth={1.45} /></span>
                    <span className="visual-spark spark-one" />
                    <span className="visual-spark spark-two" />
                  </div>
                  <div className="visual-baseline"><span>{project.visualNote}</span><span>↗</span></div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
