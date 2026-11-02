import FAQ from "./FAQ";
import Services from "./Services";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Hero from "./Hero";
import Projects from "./Projects";
import SkillsCV from "./SkillsCV";

function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Services />
      <AboutMe darkMode={darkMode} />
      <SkillsCV darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
    </>
  );
}

export default Home;
