import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { useInView } from 'react-intersection-observer'
function App() {  
  const { ref:refHome, inView:homeInView } = useInView({threshold:0.5});
  const { ref:refAbout, inView:aboutInView } = useInView({threshold:0.5});
  const { ref:refSkills, inView:skillsInView } = useInView({threshold:0.5});
  const { ref:refProjects, inView:projectsInView } = useInView({threshold:0.5});
  const { ref:refContact, inView:contactInView } = useInView({threshold:0.5});
  
  
  return (
    <div className="App">
      <Navbar homeInView={homeInView} aboutInView={aboutInView} skillsInView={skillsInView} projectsInView={projectsInView} contactInView={contactInView}/>
      <Home refHome={refHome}/>
      <About refAbout={refAbout}/>
      <Skills refSkills={refSkills}/> 
      <Projects refProjects={refProjects}/>
      <Contact refContact={refContact}/>
    </div>
  )
}

export default App
