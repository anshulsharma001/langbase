import React from 'react'
import Header from './components/Header'
// import Hero from './components/Hero'  
import DeveloperExperience from './components/DeveloperExperience'
import MemoryAPI from './components/MemoryAPI'
import UnifiedAPI from './components/UnifiedAPI'
import AIPipes from './components/AIPipes'
import Collaborate from './components/Collaborate'
import ExploreAgents from './components/ExploreAgents'
import MemoryCard from './components/MemoryCard'
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
import Stats from './components/Stats'
import ServerlessHero from './components/ServerlessHero'
import Keysets from './components/Keysets'

function App() {
  return (
    <div className="min-h-screen bg-black"> 
    <Header />
    {/* <Hero /> */}
 
  <Testimonial />

  <LogosMarquee />
  <DeveloperPics />
  <div class="mb-16 md:mb-32 lg:mb-48"></div>
   <Marquee />
   <div class="mb-16 md:mb-32 lg:mb-48"></div>
  <MemoryAPI/>
    <UnifiedAPI/>
    <MemoryCard />
    <ExploreAgents />
    <Collaborate/>
    <Keysets/>
    
     <Pagination/>
      <About/> 
      <ComposableAI/>
        <Explore/>
        <AgenticSolutions />
       <div class="mb-16 md:mb-32 lg:mb-48"></div>
        <Stats />
         <div class="mb-16 md:mb-32 lg:mb-48"></div>
       <ServerlessHero />
       <div class="mb-16 md:mb-32 lg:mb-48"></div>
      <Footer />
     
    </div>
  )
}

export default App
