import { ArrowUpRight, Mail } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import StephLogo from "../images/stephiscode-icon-black.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/stephiscode", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stephen-okeke-405569331/",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:Stephiscode@gmail.com", icon: FaEnvelope },
];

function Footer({ darkMode }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t px-4 py-12 sm:px-6 lg:px-8 ${
        darkMode
          ? "border-white/10 bg-zinc-950 text-white"
          : "border-slate-200 bg-white text-slate-950"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
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
            <div>
              <p className="text-xl font-black">StephisCode</p>
              <p
                className={`text-xs font-bold ${
                  darkMode ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                Fullstack Software Engineer
              </p>
            </div>
          </div>

          <p
            className={`mt-5 max-w-xl leading-7 ${
              darkMode ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            Building modern digital products with sharp interfaces, reliable
            APIs, mobile app thinking, and the kind of polish that makes a
            portfolio feel alive.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black">
            Navigate
          </h3>
          <div className="grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`inline-flex items-center gap-2 text-sm font-bold transition ${
                  darkMode
                    ? "text-zinc-400 hover:text-emerald-300"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black">
            Connect
          </h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                    darkMode
                      ? "border-white/10 bg-white/5 text-zinc-300 hover:border-emerald-300/40 hover:text-emerald-300"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-500/40 hover:text-emerald-700"
                  }`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <a
            href="mailto:Stephiscode@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-black text-zinc-950 transition hover:bg-emerald-200"
          >
            <Mail size={16} />
            Email me
          </a>
        </div>
      </div>

      <div
        className={`mx-auto mt-10 max-w-7xl border-t pt-5 text-sm ${
          darkMode
            ? "border-white/10 text-zinc-500"
            : "border-slate-200 text-slate-500"
        }`}
      >
        (c) {year} StephisCode. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
