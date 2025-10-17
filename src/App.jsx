import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'  
import Footer from './components/Footer'
import About from './components/About'
import Explore from './components/ExploreSection' 
import Pagination from './components/Pagination'
import Marquee from './components/Marquee'
import LogosMarquee from './components/LogosMarquee'
import DeveloperPics from './components/DeveloperPics'
import Testimonial from './components/Testimonial'
import ComposableAI from './components/ComposableAI'
import AgenticSolutions from './components/AgenticSolutions'

function App() {
  return (
    <div className="min-h-screen bg-black"> 
    <Header />
    <Hero />
    <Marquee />
  <Testimonial />
  <LogosMarquee />
  <DeveloperPics />
 <Pagination/>
    <Explore/>
    <ComposableAI/>
    <AgenticSolutions />
      <About/> 
      <Footer />
     
    </div>
  )
}

export default App
