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

import okeke from "../assets/Okeke.pdf";
import StephLogo from "../images/stephiscode-icon-black.svg";

const navItems = [
  { label: "Home", section: "home", icon: Home },
  { label: "About", section: "about", icon: UserRound },
  { label: "Projects", section: "projects", icon: FolderKanban },
  { label: "Skills", section: "skills", icon: Code2 },
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
          ? "border-white/10 bg-zinc-950/80"
          : "border-slate-200/80 bg-white/85"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
              darkMode
                ? "border-emerald-400/30 bg-white/5"
                : "border-emerald-500/30 bg-emerald-50"
            }`}
          >
            <img
              src={StephLogo}
              alt="StephisCode logo"
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="text-left leading-none">
            <span className="block text-lg font-black sm:text-xl">
              StephisCode
            </span>
            <span
              className={`mt-1 hidden text-xs font-semibold sm:block ${
                darkMode ? "text-emerald-300" : "text-emerald-700"
              }`}
            >
              Fullstack Software Engineer
            </span>
          </span>
        </button>

        <div
          className={`hidden items-center gap-1 rounded-full border p-1 lg:flex ${
            darkMode
              ? "border-white/10 bg-white/[0.04]"
              : "border-slate-200 bg-white shadow-sm"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.section}
                type="button"
                onClick={() => handleNav(item.section)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
                  darkMode
                    ? "text-zinc-300 hover:bg-white/10 hover:text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={okeke}
            download
            className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition sm:flex ${
              darkMode
                ? "bg-emerald-300 text-zinc-950 hover:bg-emerald-200"
                : "bg-zinc-950 text-white hover:bg-zinc-800"
            }`}
          >
            <Download size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
              darkMode
                ? "border-white/10 bg-white/5 text-amber-200 hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
              darkMode
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-white hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`border-t px-4 pb-4 lg:hidden ${
            darkMode
              ? "border-white/10 bg-zinc-950"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleNav(item.section)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                    darkMode
                      ? "bg-white/5 text-zinc-100 hover:bg-white/10"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />
                    {item.label}
                  </span>
                </button>
              );
            })}
            <a
              href={okeke}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 py-3 text-sm font-black text-zinc-950"
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
