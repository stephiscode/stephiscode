import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Hero from "./Hero";
import Projects from "./Projects";
import SkillsCV from "./SkillsCV";

function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <SkillsCV darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
    </>
  );
}

export default Home;
