import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { StackSection } from './components/StackSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Footer } from './components/Footer'

function App() {
  const [white, setWhite] = useState(false)
  const [copied, setCopied] = useState(false)
  const emailAddress = 'fabricioperesdsantos@gmail.com'

  const copiar = async () => {
    await navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={white ? 'site theme-light' : 'site theme-dark'}>
      <Header white={white} onToggleTheme={() => setWhite((current) => !current)} />

      <main>
        <HeroSection white={white} />
        <AboutSection />
        <StackSection white={white} />
        <ProjectsSection />
      </main>

      <Footer white={white} emailAddress={emailAddress} copied={copied} onCopyEmail={copiar} />
    </div>
  )
}

export default App
