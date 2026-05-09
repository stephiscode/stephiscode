import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import SkillsCV from "./components/SkillsCV";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Layout from "./components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <Router>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
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
