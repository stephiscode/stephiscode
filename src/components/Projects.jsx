import {
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  FolderKanban,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import doQueueLogo from "../images/project-icons/doqueue-logo.svg";
import quintLogo from "../images/project-icons/quint-icon.png";
import trackMoniLogo from "../images/project-icons/trackmoni-logo.svg";

const projects = [
  {
    name: "TrackMoni",
    role: "Fullstack finance platform",
    description:
      "A personal finance product for tracking income, expenses, analytics, and money decisions through a clean dashboard experience.",
    live: "https://www.trackmoni.online/",
    accent: "bg-emerald-300",
    logo: trackMoniLogo,
    logoAlt: "TrackMoni logo",
    highlights: [
      "Dashboard and analytics experience",
      "Typed product architecture",
      "Data-focused money workflows",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
  },
  
];

const standards = [
  {
    title: "Interface polish",
    icon: BadgeCheck,
    copy: "Readable screens, strong hierarchy, and UI states that make every action feel clear.",
  },
  {
    title: "Fullstack thinking",
    icon: Rocket,
    copy: "Frontend decisions connected to backend data, performance, mobile flows, and deployment needs.",
  },
  {
    title: "Mobile awareness",
    icon: Smartphone,
    copy: "Product decisions that can stretch cleanly from browser experiences into React Native apps.",
  },
  {
    title: "Production sense",
    icon: ShieldCheck,
    copy: "Clean structure, scalable patterns, and practical details a real project needs.",
  },
];

function Projects({ darkMode }) {
  const location = useLocation();
  const isAllProjectsPage = location.pathname === "/projects";
  const visibleProjects = isAllProjectsPage ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-slate-100 text-slate-950"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div data-aos="fade-up">

            <h2 className="max-w-3xl text-balance text-4xl font-extrabold sm:text-5xl">
              {isAllProjectsPage
                ? "A growing collection of products, experiments, and client-ready builds."
                : "Selected products with clean interfaces and reliable engineering."}
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            return (
              <article
                key={project.name}
                className={`group rounded-[2rem] border p-5 transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/10 bg-zinc-950/80 hover:border-emerald-300/35"
                    : "border-slate-200 bg-white shadow-sm hover:border-emerald-400"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${project.accent}`}
                  >
                    <img
                      src={project.logo}
                      alt={project.logoAlt}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                      darkMode
                        ? "border-white/10 bg-white/5 hover:bg-white/10"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p
                  className={`mb-3 text-sm font-black ${
                    darkMode ? "text-emerald-300" : "text-emerald-700"
                  }`}
                >
                  {project.role}
                </p>
                <h3 className="text-2xl font-black">{project.name}</h3>
                <p
                  className={`mt-3 min-h-24 text-sm leading-6 ${
                    darkMode ? "text-zinc-300" : "text-slate-700"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-5 grid gap-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className={`flex items-center gap-3 rounded-2xl border px-3 py-2 text-sm font-bold ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <BadgeCheck
                        size={17}
                        className="shrink-0 text-emerald-300"
                      />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1.5 text-xs font-black ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04] text-zinc-200"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2.5 text-sm font-black text-zinc-950 transition hover:bg-emerald-200"
                  >
                    Live Product
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {!isAllProjectsPage && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-black transition ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
              }`}
            >
              Show All Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        )}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {standards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`rounded-[1.75rem] border p-5 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-zinc-950">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    darkMode ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
