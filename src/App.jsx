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
import RotatingRings from './components/RotatingRings'
import Keysets from './components/Keysets'
import Features from './components/Features'
import SmartCosts from './components/SmartCosts'
import RAGFeature from './components/RAGFeature'

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
   <div class="px-4 md:px-8 lg:px-16">
    <DeveloperExperience />
    </div> 
   <div class="grid w-full h-full auto-rows-[22rem] grid-cols-4 gap-5 px-4 md:px-8  w-full max-w-[95%] sm:max-w-[95%] lg:max-w-[64rem] xl:max-w-[80rem] mx-auto">
      <MemoryAPI/>
    <UnifiedAPI/>
      <AIPipes/> 
      <Features/>

     <Collaborate/>
     <ExploreAgents/>
     <MemoryCard/>
     <RAGFeature/>
     <Keysets/>
    
     <SmartCosts/>
     
   
    </div> 
  
   
   
   
   


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
