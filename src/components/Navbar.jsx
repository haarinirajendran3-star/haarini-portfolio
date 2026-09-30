import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Haarini, home">
          Haarini<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links${isOpen ? ' is-open' : ''}`}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
