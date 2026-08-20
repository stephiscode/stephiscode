import {
  Code2,
  Database,
  Layers3,
  ServerCog,
  Smartphone,
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

const skillGroups = [
  {
    title: "Product interfaces",
    icon: Layers3,
    description:
      "Frontend and mobile-ready experiences built to feel simple, sharp, and useful.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "React Native", icon: Smartphone },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend systems",
    icon: ServerCog,
    description:
      "APIs, authentication-aware flows, data models, and services that make products usable.",
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
    title: "Launch workflow",
    icon: Workflow,
    description:
      "The habits and tools that move a product from first idea to live experience.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Vercel", icon: SiVercel },
      { name: "Product Design", icon: Layers3 },
      { name: "API Integration", icon: Code2 },
      { name: "Mobile Apps", icon: Smartphone },
      { name: "SaaS Thinking", icon: Workflow },
    ],
  },
];

function SkillsCV({ darkMode }) {
  return (
    <section
      id="skills"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-[#F7F4ED]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-[2rem] border border-[#E1DDD6] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#2E5E4E]/40 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4ED] text-[#2E5E4E] ring-1 ring-[#E1DDD6]">
                  <GroupIcon size={25} />
                </div>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  {group.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#4B5563]">
                  {group.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] px-4 py-3"
                      >
                        <SkillIcon size={21} className="text-[#2E5E4E]" />
                        <span className="text-sm font-black text-[#0F172A]">
                          {skill.name}
                        </span>
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
