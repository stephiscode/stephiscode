import { useState } from "react";
import {
  Code2,
  Download,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import resume from "../assets/Stefiscode_Resume.pdf";
import StephLogo from "../assets/new-stephiscode.PNG";

const navItems = [
  { label: "Home", section: "home", icon: Home },
  { label: "About", section: "about", icon: UserRound },
  { label: "Project", section: "projects", icon: FolderKanban },
  { label: "Stack", section: "skills", icon: Code2 },
  { label: "Contact", section: "contact", icon: Mail },
];

function NavBar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    const target = document.getElementById(section);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (section) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(section), 120);
      return;
    }

    scrollToSection(section);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-2xl transition-colors duration-500 ${
        darkMode
          ? "border-[#2E5E4E]/15 bg-[#F7F4ED]/90"
          : "border-[#E1DDD6] bg-white/90"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E1DDD6] bg-white shadow-sm">
            <img
              src={StephLogo}
              alt="StephisCode logo"
              className="h-9 w-9 object-contain"
            />
          </span>
        </button>

        <div
          className="hidden items-center gap-1 rounded-full border border-[#E1DDD6] bg-white p-1 shadow-sm lg:flex"
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.section}
                type="button"
                onClick={() => handleNav(item.section)}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#4B5563] transition hover:bg-[#F7F4ED] hover:text-[#0F172A]"
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={resume}
            download="Stefiscode_Resume.pdf"
            className="hidden items-center gap-2 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-black text-white transition hover:bg-[#2E5E4E] sm:flex"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
              darkMode
                ? "border-[#2E5E4E] bg-[#2E5E4E] text-white"
                : "border-[#E1DDD6] bg-white text-[#0F172A] hover:border-[#2E5E4E]"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1DDD6] bg-white text-[#0F172A] transition hover:border-[#2E5E4E] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="border-t border-[#E1DDD6] bg-white px-4 pb-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleNav(item.section)}
                  className="flex items-center justify-between rounded-2xl bg-[#F7F4ED] px-4 py-3 text-left text-sm font-bold text-[#0F172A] transition hover:bg-[#E1DDD6]"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />
                    {item.label}
                  </span>
                </button>
              );
            })}
            <a
              href={resume}
              download="Stefiscode_Resume.pdf"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-4 py-3 text-sm font-black text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
