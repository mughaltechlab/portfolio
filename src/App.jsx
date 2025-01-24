import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ZapierChatbot from './components/ZapierChatbot'

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Hero /> */}
      {/* <Skills /> */}
      <About />
      <Work />
      {/* <Contact /> */}
      <ZapierChatbot />
      <Footer />
    </div>
  )
}

export default App