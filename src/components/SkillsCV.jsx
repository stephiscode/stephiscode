import {
  Code2,
  Database,
  Download,
  Layers3,
  ServerCog,
  Smartphone,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import okeke from "../assets/Okeke.pdf";

const skillGroups = [
  {
    title: "Frontend and mobile",
    icon: Layers3,
    description:
      "Interfaces and mobile experiences that are responsive, accessible, animated with taste, and easy to maintain.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend and data",
    icon: ServerCog,
    description: "APIs, data models, auth-aware flows, and services that keep the product reliable.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Code2 },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Databases", icon: Database },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Product delivery",
    icon: Workflow,
    description: "The practical tooling and habits that turn a build into something people can use.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Vercel", icon: SiVercel },
      { name: "Mobile Apps", icon: Smartphone },
      { name: "CLI", icon: TerminalSquare },
      { name: "UI Systems", icon: Layers3 },
      { name: "API Integration", icon: Code2 },
    ],
  },
];

function SkillsCV({ darkMode }) {
  return (
    <section
      id="skills"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-aos="fade-up">
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black ${
                darkMode
                  ? "border-amber-300/20 bg-amber-300/10 text-amber-200"
                  : "border-amber-600/20 bg-amber-50 text-amber-800"
              }`}
            >
              <Code2 size={16} />
              Engineering stack
            </div>
            <h2 className="max-w-3xl text-balance text-4xl font-black sm:text-5xl">
              A toolkit for building complete products across interface,
              mobile, backend, and data.
            </h2>
          </div>
          <div
            className={`rounded-[2rem] border p-6 ${
              darkMode
                ? "border-emerald-300/20 bg-emerald-300/10"
                : "border-emerald-500/20 bg-emerald-50"
            }`}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <p
              className={`text-lg leading-8 ${
                darkMode ? "text-zinc-200" : "text-slate-700"
              }`}
            >
              I work across the full product path: responsive interfaces,
              mobile app flows, API integration, backend logic, and the systems
              that keep everything connected.
            </p>
            <a
              href={okeke}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-emerald-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <article
                key={group.title}
                className={`rounded-[2rem] border p-6 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-slate-200 bg-slate-50"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300 text-zinc-950">
                  <GroupIcon size={25} />
                </div>
                <h3 className="text-2xl font-black">{group.title}</h3>
                <p
                  className={`mt-3 min-h-20 text-sm leading-6 ${
                    darkMode ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  {group.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                          darkMode
                            ? "border-white/10 bg-zinc-950/50"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <SkillIcon size={21} className="text-emerald-300" />
                        <span className="text-sm font-black">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsCV;
