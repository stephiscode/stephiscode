import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import AOS from "aos";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import SkillsCV from "./components/SkillsCV";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#F7F4ED] text-[#0F172A]" : "bg-white text-[#0F172A]"
      }`}
    >
      <Router>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about-me" element={<AboutMe darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/contact" element={<ContactMe darkMode={darkMode} />} />
            <Route path="/skills" element={<SkillsCV darkMode={darkMode} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
