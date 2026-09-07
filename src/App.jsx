import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryClick = (id) => {
    setActiveCategory(id)
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Services onCategoryClick={handleCategoryClick} />
        <Portfolio activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}