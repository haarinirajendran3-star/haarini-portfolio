import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-content">
        <a className="wordmark" href="#top">haarini<span>.</span></a>
        <p>Made with curiosity and care.</p>
        <a className="back-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  )
}

export default Footer
