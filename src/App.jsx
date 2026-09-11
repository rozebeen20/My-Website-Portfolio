import Header from './components/Header'
import Hero from './components/Hero'
import CapabilityStrip from './components/CapabilityStrip'
import SelectedWork from './components/SelectedWork'
import CreativePortfolio from './components/CreativePortfolio'
import CapabilityCards from './components/CapabilityCards'
import Differentiator from './components/Differentiator'
import About from './components/About'
import SkillsPreview from './components/SkillsPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <SelectedWork />
        <CreativePortfolio />
        <CapabilityCards />
        <Differentiator />
        <About />
        <SkillsPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
