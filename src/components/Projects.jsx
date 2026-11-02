import { useEffect, useRef, useState } from "react";
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

import { projects } from "../data/projects";

const INITIAL_PROJECT_COUNT = 3;
const breakdownIcons = [Gauge, Database, Smartphone, ShieldCheck];

function Projects({ darkMode }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const detailRef = useRef(null);
  useEffect(() => {
    if (expandedProject && detailRef.current) {
      detailRef.current.focus({ preventScroll: true });
      detailRef.current.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    }
  }, [expandedProject]);
  const closeDetails = () => {
    const trigger = document.getElementById(`project-trigger-${expandedProject}`);
    setExpandedProject(null);
    trigger?.focus();
  };
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
          <p className="section-eyebrow mb-4">Portfolio</p>
          <h2 className="text-balance text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl">
            Selected Projects
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#4B5563]">Real products for everyday needs. Explore the experience, the business behind it, and what I built.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const expanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="project-card flex flex-col rounded-2xl border border-[#E1DDD6] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2E5E4E]/40 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-6"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-xl" style={{ backgroundColor: project.color }}>
                  <img src={project.logo} alt={`${project.name} logo`} width="128" height="128" loading="lazy" className={`h-32 w-32 object-contain ${project.id === "kismat" ? "mix-blend-multiply" : ""}`} />
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`} className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F172A] transition hover:bg-[#2E5E4E] hover:text-white"><ArrowUpRight size={18} /></a>
                  <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">{project.category}</span>
                  <span className="absolute bottom-3 right-4 text-[10px] font-semibold text-[#4B5563]">0{index + 1}</span>
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
                    id={`project-trigger-${project.id}`}
                    aria-label={`Learn more about ${project.name}`}
                    aria-controls={expanded ? `project-details-${project.id}` : undefined}
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
              onClick={() => {
                if (showAll && !projects.slice(0, INITIAL_PROJECT_COUNT).some(project => project.id === expandedProject)) setExpandedProject(null);
                setShowAll(!showAll);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0F172A] bg-white px-5 py-3 text-sm font-black text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white"
              aria-expanded={showAll}
            >
              {showAll ? "Show fewer projects" : "View All Projects"}
              <ChevronDown
                size={17}
                className={`transition ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        {selectedProject && (
          <div
            id={`project-details-${selectedProject.id}`}
            ref={detailRef}
            tabIndex={-1}
            role="region"
            aria-label={`${selectedProject.name} project details`}
            className="project-details mt-6 rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] p-5 shadow-sm sm:p-6"
          >
            <button type="button" onClick={closeDetails} className="mb-5 rounded-full border border-[#D8D6CD] bg-white px-4 py-2 text-sm font-bold text-[#2E5E4E] hover:bg-[#E7EDE6]">Close details <span aria-hidden="true">×</span></button>
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
              {selectedProject.breakdown.map((item, index) => {
                const Icon = breakdownIcons[index];

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
