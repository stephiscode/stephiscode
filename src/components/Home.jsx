import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import Hero from "./Hero"
import NavBar from "./NavBar"
import Projects from "./Projects"

function Home({darkMode}) {
  return (
   <>
     <Hero darkMode={darkMode}/>
   <AboutMe darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
   </>
  )
}

export default Home;