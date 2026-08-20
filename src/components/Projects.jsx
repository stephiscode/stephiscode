import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  Database,
  ExternalLink,
  Gauge,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import trackMoniLogo from "../images/project-icons/trackmoni-logo.svg";

const projects = [{
  id: "trackmoni",
  name: "TrackMoni",
  live: "https://www.trackmoni.online/",
  logo: trackMoniLogo,
  description:
    "An expense tracker and personal finance dashboard built to help users understand income, expenses, bills, and money movement from one clean product.",
  highlights: [
    "Expense, income, bills, and transaction workflows",
    "Dashboard summaries and analytics for money decisions",
    "Installable PWA experience for app-like access",
  ],
  stack: ["Next.js", "TypeScript", "Prisma", "Recharts", "PWA", "API routes"],
}];

const INITIAL_PROJECT_COUNT = 6;

const breakdown = [
  {
    title: "Problem",
    icon: Gauge,
    copy: "People need a simple way to understand where their money is going without depending on scattered notes or spreadsheets.",
  },
  {
    title: "Build",
    icon: Database,
    copy: "TrackMoni organizes financial activity into authenticated dashboards, summaries, transaction history, bill flows, and data-backed views.",
  },
  {
    title: "Product detail",
    icon: Smartphone,
    copy: "The PWA feature gives it a more app-like feel, so users can access the product more naturally from their device.",
  },
  {
    title: "Impact",
    icon: ShieldCheck,
    copy: "The product helps users see patterns, manage expenses, and make better financial decisions with less friction.",
  },
];

function Projects({ darkMode }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);
  const selectedProject = projects.find(
    (project) => project.id === expandedProject,
  );

  return (
    <section
      id="projects"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-[#F7F4ED]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-balance text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const expanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="flex min-h-[20rem] flex-col rounded-2xl border border-[#E1DDD6] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2E5E4E]/40 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1DDD6] bg-[#F7F4ED]">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E1DDD6] bg-white text-[#0F172A] transition hover:border-[#2E5E4E] hover:text-[#2E5E4E]"
                    aria-label={`Open ${project.name}`}
                    title={`Open ${project.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <h3 className="text-2xl font-black text-[#0F172A]">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedProject(expanded ? null : project.id)
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#2E5E4E]"
                    aria-expanded={expanded}
                  >
                    Learn more
                    <ChevronDown
                      size={16}
                      className={`transition ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#E1DDD6] bg-white px-4 py-2.5 text-sm font-black text-[#0F172A] transition hover:border-[#2E5E4E]"
                  >
                    Visit site
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {projects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0F172A] bg-white px-5 py-3 text-sm font-black text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white"
              aria-expanded={showAll}
            >
              {showAll ? "Show fewer projects" : "See More Projects"}
              <ChevronDown
                size={17}
                className={`transition ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        {selectedProject && (
          <div
            className="mt-6 rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] p-5 shadow-sm sm:p-6"
            data-aos="fade-up"
          >
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  {selectedProject.name} breakdown
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5563]">
                  A quick look at what it solves, how it was built, and the
                  product features behind it.
                </p>
              </div>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#2E5E4E] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#0F172A]"
              >
                Open product
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {breakdown.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#E1DDD6] bg-white p-5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F4ED] text-[#2E5E4E] ring-1 ring-[#E1DDD6]">
                      <Icon size={19} />
                    </div>
                    <h4 className="text-lg font-black text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.75fr]">
              <div className="rounded-[1.5rem] border border-[#E1DDD6] bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2E5E4E]">
                  Product features
                </p>
                <div className="mt-4 grid gap-3">
                  {selectedProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm font-bold leading-6 text-[#0F172A]"
                    >
                      <BadgeCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-[#2E5E4E]"
                      />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#0F172A] p-5 text-white">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#A7F3D0]">
                  Stack used
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
