import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children, darkMode, setDarkMode }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  return (
    <div
      className={`min-h-screen selection:bg-[#2E5E4E] selection:text-white ${
        darkMode ? "bg-[#F7F4ED] text-[#0F172A]" : "bg-white text-[#0F172A]"
      }`}
    >
      <a href="#main-content" className="skip-link">Skip to content</a>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Layout;
