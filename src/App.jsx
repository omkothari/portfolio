import React from 'react'
import Home from './components/Home.jsx'
import Nav from './components/Navigation.jsx'
import About from './components/About.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contacts.jsx'
import Education from './components/Education.jsx';
function App() {
  const scroll = new LocomotiveScroll();

 return (


// overflow-hidden"
  <main className="pt-3 bg-[#FFFFFF] font-['gilroy']  w-full text-[#7B7B7B] overflow-hidden" data-scroll-container>
  <Nav />
  <Home />
  <About />
  <Skills />
  <Education />
  <Projects />
  <Contact />
  
  </main>
  
  
 )
}

export default App
