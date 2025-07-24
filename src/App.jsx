import React from 'react'
import Home from './components/Home.jsx'
import Nav from './components/Navigation.jsx'
import About from './components/About.jsx'
import { ReactLenis, useLenis } from 'lenis/react'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contacts.jsx'
import Education from './components/Education.jsx';
import Background from './components/Background.jsx';
import Loading from './components/Loading.jsx';
import { useState, useEffect } from 'react'

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


 return (


<>
<ReactLenis root />


  <Background />
  <main className="pt-[0.1] font-['clash display'] relative  w-full text-[#7B7B7B] overflow-hidden z-1" >
  {loading && <Loading />}
  <Nav />
  <Home />
  <About />
  <Skills />
  <Projects />
  {/* <Education /> */}
  <Contact />
  
  </main>
  
</>
  
 )
}

export default App
