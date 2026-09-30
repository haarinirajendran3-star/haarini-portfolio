import { ArrowUpRight } from 'lucide-react'

function Resume() {
  return (
    <section className="resume-section page-width" aria-labelledby="resume-title">
      <div className="resume-number">06 / CAREER GOAL</div>
      <div>
        <h2 id="resume-title">Seeking SDE &amp;<br /><em>backend internships.</em></h2>
        <p>B.Tech Artificial Intelligence and Data Science · Class of 2027</p>
      </div>
      <a className="resume-link" href="mailto:haarinirajendran3@gmail.com?subject=Internship%20opportunity" aria-label="Email Haarini about an internship">
        <ArrowUpRight size={24} />
      </a>
    </section>
  )
}

export default Resume
