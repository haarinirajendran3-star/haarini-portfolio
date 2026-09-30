import About from './components/About.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Skills from './components/Skills.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
