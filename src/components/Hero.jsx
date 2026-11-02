import { ArrowDown, ArrowUpRight, Braces, Database, Layers3, Network } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { projects } from "../data/projects";

const socials = [
  { label: "GitHub", href: "https://github.com/stephiscode", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/stephen-okeke-405569331/", icon: FaLinkedin },
  { label: "Email", href: "mailto:Stephiscode@gmail.com", icon: FaEnvelope },
];

const layers = [
  { title: "Experience", detail: "Web & mobile interfaces", tools: "React · Next.js · React Native", icon: Layers3 },
  { title: "Application", detail: "Business logic & integrations", tools: "Node.js · APIs · Authentication", icon: Braces },
  { title: "Data", detail: "Structured, connected systems", tools: "PostgreSQL · Prisma", icon: Database },
];

export default function Hero({ darkMode }) {
  return (
    <section id="home" className={`px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${darkMode ? "bg-[#F7F4ED]" : "bg-white"}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <h1 className="max-w-3xl text-[2.5rem] sm:text-6xl lg:text-[3.25rem] xl:text-[4.5rem] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#0F172A]">
            Thoughtful design.<br />Dependable code.<br /><span className="text-[#2E5E4E]">Built for your<br className="hidden xl:block" /> business.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#4B5563] sm:text-lg">
            I’m Steph. I design and develop custom websites, mobile apps, and business systems, connecting polished interfaces with dependable engineering.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-[#2E5E4E] py-3.5 pl-6 pr-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0F172A]">
              Let’s build your idea
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"><ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </a>
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full border border-[#D8D6CD] px-5 py-3.5 text-sm font-bold text-[#0F172A] transition hover:border-[#2E5E4E] hover:bg-white">
              Explore my work <ArrowDown size={17} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D6CD] text-[#4B5563] transition hover:-translate-y-0.5 hover:border-[#2E5E4E] hover:text-[#2E5E4E]"><Icon size={17} /></a>
            ))}
          </div>
        </div>

        <aside aria-label="Fullstack engineering and featured projects" className="min-w-0">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#386150] bg-[#234C3E] p-5 text-white shadow-[0_22px_60px_-30px_rgba(35,76,62,0.5)] sm:p-7">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#E6EACD 1px, transparent 1px), linear-gradient(90deg, #E6EACD 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <div className="flex items-center justify-between gap-3 border-b border-white/20 pb-5">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#D3DFC1]">Fullstack engineering</span>
                <Network size={20} strokeWidth={1.5} className="text-[#D3DFC1]" aria-hidden="true" />
              </div>
              <h2 className="mb-7 mt-6 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.15rem]">From interface<br /><span className="text-[#D3DFC1]">to infrastructure.</span></h2>
              <div>
                {layers.map(({ title, detail, tools, icon: Icon }, index) => (
                  <div key={title}>
                    {index > 0 && <div aria-hidden="true" className="ml-[1.6rem] h-4 w-px bg-[#8BAA94]/60" />}
                    <div className="flex gap-3 rounded-xl border border-[#789981]/35 bg-[#1D4135] p-3.5 sm:gap-4 sm:p-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#789981]/40 bg-[#2E5847] text-[#E6EACD]"><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
                      <div className="min-w-0"><h3 className="text-sm font-semibold text-white">{title}<span className="ml-2 hidden text-[10px] font-normal text-[#C1D1C5] xl:inline">/ {detail}</span></h3><p className="mt-1.5 font-mono text-[10px] leading-5 text-[#D3DFC1] sm:text-[11px]">{tools}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B5563]">Featured builds</span><span aria-hidden="true" className="h-px flex-1 bg-[#D8D6CD]" /></div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {projects.filter(project => ["trackmoni", "theeplugg"].includes(project.id)).map(project => (
              <a key={project.id} href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[#E1DDD6] bg-white p-3 transition hover:-translate-y-0.5 hover:border-[#2E5E4E]/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: project.color }}><img src={project.logo} alt="" width="40" height="40" className="h-10 w-10 object-contain" /></span>
                <span className="min-w-0 flex-1"><span className="block text-xs font-bold text-[#0F172A]">{project.name}</span><span className="mt-1 block text-[10px] text-[#4B5563]">{project.category}</span></span>
                <ArrowUpRight size={15} className="shrink-0 text-[#2E5E4E] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
