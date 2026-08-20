import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  ServerCog,
  Smartphone,
} from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import StephLogo from "../assets/new-stephiscode.PNG";

const stack = [
  { name: "React", icon: FaReact },
  { name: "React Native", icon: Smartphone },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node APIs", icon: ServerCog },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Product UI", icon: Layers3 },
];

const builderNotes = [
  {
    title: "Build",
    copy: "I turn rough ideas into useful product flows, clean interfaces, and backend-ready structures.",
  },
  {
    title: "Launch",
    copy: "I ship responsive web apps, mobile-ready experiences, dashboards, and client-facing products.",
  },
  {
    title: "Impact",
    copy: "I focus on useful outcomes, clear value, and products that can keep growing after launch.",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/stephiscode", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stephen-okeke-405569331/",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:Stephiscode@gmail.com", icon: FaEnvelope },
  { label: "X", href: "https://www.x.com/stephiscode", icon: FaSquareXTwitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/stephiscode/",
    icon: FaInstagramSquare,
  },
];

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
        darkMode ? "bg-[#F7F4ED]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div data-aos="fade-up">
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.02] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            I build digital products that move from idea to real-life use.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563] sm:text-xl">
            I'm Steph, a fullstack software developer, software engineer,
            and product designer building useful apps, SaaS products, and client
            projects with clean interfaces and reliable systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#2E5E4E]"
            >
              View Projects
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#E1DDD6] bg-white px-5 py-3 text-sm font-extrabold text-[#0F172A] transition hover:-translate-y-0.5 hover:border-[#2E5E4E] hover:bg-[#F7F4ED]"
            >
              Start a Build
              <FaEnvelope size={15} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1DDD6] bg-white text-base text-[#4B5563] transition hover:-translate-y-0.5 hover:border-[#2E5E4E] hover:text-[#2E5E4E]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E1DDD6] bg-white px-3 py-2 text-xs font-black text-[#0F172A]"
                >
                  <Icon size={15} className="text-[#2E5E4E]" />
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>

        <aside className="relative" data-aos="fade-left" data-aos-delay="120">
          <div className="rounded-[2rem] border border-[#E1DDD6] bg-[#F7F4ED] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-[#E1DDD6] pb-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#2E5E4E]">
                  StephisCode Studio
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
                  Builder. Founder. Problem solver.
                </h2>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-[#E1DDD6] bg-white shadow-sm">
                <img
                  src={StephLogo}
                  alt="StephisCode mark"
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>

            <div className="divide-y divide-[#E1DDD6]">
              {builderNotes.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-5 sm:grid-cols-[120px_1fr]"
                  data-aos="fade-up"
                  data-aos-delay={180 + index * 90}
                >
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C65D3D]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-6 text-[#4B5563]">{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Product UI", icon: Layers3 },
                { label: "APIs", icon: Code2 },
                { label: "Data", icon: Database },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-2xl border border-[#E1DDD6] bg-white px-3 py-3 text-sm font-black text-[#0F172A]"
                  >
                    <Icon size={17} className="text-[#2E5E4E]" />
                    {item.label}
                  </div>
                );
              })}
            </div>

          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
