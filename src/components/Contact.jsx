import { GitBranch, Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-width contact-layout">
        <div>
          <div className="section-label"><span>07</span> Contact</div>
          <h2>Have a real-world<br /><em>problem in mind?</em></h2>
        </div>
        <div className="contact-action">
          <p>Contact me about Software Development Engineer or Backend Software Engineer internship opportunities.</p>
          <a href="mailto:haarinirajendran3@gmail.com" className="contact-detail">
            <Mail size={17} aria-hidden="true" /> haarinirajendran3@gmail.com
          </a>
          <a href="tel:+918778502349" className="contact-detail">
            <Phone size={17} aria-hidden="true" /> +91 87785 02349
          </a>
          <a
            href="https://github.com/haarinirajendran3-star"
            className="contact-detail"
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={17} aria-hidden="true" /> github.com/haarinirajendran3-star
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
