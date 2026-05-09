import {
  ArrowUpRight,
  BadgeCheck,
  Braces,
  Database,
  Layers3,
  Rocket,
  ServerCog,
  Smartphone,
  Sparkles,
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

const stack = [
  { name: "React", icon: Layers3 },
  { name: "React Native", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node APIs", icon: ServerCog },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Mobile UX", icon: Smartphone },
];

const focusAreas = [
  {
    title: "Interfaces",
    detail: "React and Next.js",
    icon: Layers3,
  },
  {
    title: "Mobile",
    detail: "React Native flows",
    icon: Smartphone,
  },
  {
    title: "Backend",
    detail: "Node and Express APIs",
    icon: ServerCog,
  },
  {
    title: "Data",
    detail: "PostgreSQL systems",
    icon: Database,
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
      className={`relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <div
        className={`absolute inset-0 -z-10 ${
          darkMode ? "bg-grid-dark opacity-45" : "bg-grid-light opacity-60"
        }`}
      />
      <div
        className={`absolute inset-0 -z-10 ${
          darkMode
            ? "bg-[linear-gradient(135deg,rgba(16,185,129,0.14),transparent_42%,rgba(56,189,248,0.09)_72%,transparent)]"
            : "bg-[linear-gradient(135deg,rgba(16,185,129,0.12),transparent_42%,rgba(14,165,233,0.10)_72%,transparent)]"
        }`}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div data-aos="fade-up">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${
              darkMode
                ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
                : "border-emerald-600/20 bg-white text-emerald-800 shadow-sm"
            }`}
          >
            <Sparkles size={16} />
            Fullstack Software Engineer
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
            Premium digital products across web, mobile, and backend systems.
          </h1>

          <p
            className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${
              darkMode ? "text-zinc-300" : "text-slate-700"
            }`}
          >
            I build clean interfaces, mobile experiences, APIs, and data-driven
            systems with a product-first engineering mindset.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-extrabold text-zinc-950 transition hover:bg-emerald-200"
            >
              View Work
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-extrabold transition ${
                darkMode
                  ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
              }`}
            >
              Contact Me
              <FaEnvelope size={15} />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-base transition ${
                    darkMode
                      ? "border-white/10 bg-white/5 text-zinc-200 hover:border-emerald-300/50 hover:text-emerald-200"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500/50 hover:text-emerald-700"
                  }`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4" data-aos="fade-left" data-aos-delay="120">
          <div
            className={`rounded-[2rem] border p-5 sm:p-6 ${
              darkMode
                ? "border-white/10 bg-zinc-900/80 shadow-2xl shadow-emerald-950/20"
                : "border-slate-200 bg-white shadow-xl shadow-slate-200/70"
            }`}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-extrabold">StephisCode</p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    darkMode ? "text-zinc-400" : "text-slate-500"
                  }`}
                >
                  Product engineering
                </p>
              </div>
              <BadgeCheck
                size={22}
                className={darkMode ? "text-cyan-300" : "text-cyan-600"}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-4 ${
                      darkMode
                        ? "border-white/10 bg-zinc-950/60"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-zinc-950">
                      <Icon size={19} />
                    </div>
                    <p className="font-extrabold">{item.title}</p>
                    <p
                      className={`mt-1 text-sm ${
                        darkMode ? "text-zinc-400" : "text-slate-600"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-[2rem] border p-5 ${
              darkMode
                ? "border-emerald-300/20 bg-emerald-300/10"
                : "border-emerald-500/20 bg-emerald-50"
            }`}
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-extrabold">
              <Braces size={18} className="text-amber-300" />
              Core stack
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {stack.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-bold ${
                      darkMode
                        ? "border-white/10 bg-zinc-950/55"
                        : "border-emerald-200 bg-white"
                    }`}
                  >
                    <Icon className="text-emerald-300" size={17} />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-[2rem] border p-5 ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              {["Clean UI", "Reliable APIs", "Mobile-ready", "Scalable data"].map(
                (item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-sm font-bold ${
                      darkMode
                        ? "border-white/10 bg-zinc-950/50 text-zinc-200"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
