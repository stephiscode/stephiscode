import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import StephLogo from "../assets/new-stephiscode.PNG";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "TrackMoni", href: "#projects" },
  { label: "Stack", href: "#skills" },
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
      className={`border-t border-[#E1DDD6] px-4 py-12 sm:px-6 lg:px-8 ${
        darkMode ? "bg-[#F7F4ED]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E1DDD6] bg-white shadow-sm">
              <img
                src={StephLogo}
                alt="StephisCode logo"
                className="h-8 w-8 object-contain"
              />
            </span>
            <div>
              <p className="text-xl font-black tracking-[0.18em] text-[#0F172A]">
                STEPHISCODE
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.3em]">
                <span className="text-[#0F172A]">Build</span>
                <span className="text-[#2E5E4E]"> . Launch . </span>
                <span className="text-[#C65D3D]">Impact</span>
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl leading-7 text-[#4B5563]">
            Fullstack software developer, software engineer, and product
            designer building useful apps, SaaS ideas, and client-ready
            products from zero to launch.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#2E5E4E]">
            <MapPin size={16} />
            Lagos, Nigeria
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#0F172A]">
            Navigate
          </h3>
          <div className="grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4B5563] transition hover:text-[#2E5E4E]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#0F172A]">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1DDD6] bg-white text-[#4B5563] transition hover:-translate-y-0.5 hover:border-[#2E5E4E] hover:text-[#2E5E4E]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <a
            href="mailto:Stephiscode@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2E5E4E] px-4 py-2 text-sm font-black text-white transition hover:bg-[#0F172A]"
          >
            <Mail size={16} />
            Email me
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#E1DDD6] pt-5 text-sm text-[#4B5563]">
        (c) {year} StephisCode. Build. Launch. Impact.
      </div>
    </footer>
  );
}

export default Footer;
