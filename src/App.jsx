import React from 'react'
import Header from './sections/Header'
import About from './sections/About'
import Navbar from './components/Navbar'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Header />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  )
}

export default App
