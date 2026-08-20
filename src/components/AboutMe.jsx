import {
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  PenTool,
  ServerCog,
  Smartphone,
} from "lucide-react";

const strengths = [
  {
    title: "Fullstack builds",
    icon: Code2,
    copy: "I connect polished interfaces with backend logic, APIs, auth flows, and database-backed product behavior.",
  },
  {
    title: "Product design sense",
    icon: PenTool,
    copy: "I care about the journey: what users see, what they click, what feels clear, and what moves them forward.",
  },
  {
    title: "Web and mobile direction",
    icon: Smartphone,
    copy: "I build responsive web products and think through mobile-ready flows that can stretch into React Native apps.",
  },
  {
    title: "Backend systems",
    icon: ServerCog,
    copy: "I structure APIs, data models, integrations, and product logic so the interface is backed by something reliable.",
  },
  {
    title: "Data-driven decisions",
    icon: Database,
    copy: "I like products that turn messy user activity into clear dashboards, summaries, and practical insights.",
  },
  {
    title: "Launch discipline",
    icon: Cloud,
    copy: "I think beyond the first screen: deployment, performance, iteration, and how the product grows after launch.",
  },
];

const workflow = [
  "Understand the problem and the real user flow",
  "Design the product experience before overbuilding",
  "Build the interface, API logic, and data structure together",
  "Launch, test, refine, and keep improving the product",
];

function AboutMe({ darkMode }) {
  return (
    <section
      id="about"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-white" : "bg-[#F7F4ED]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-aos="fade-up">
            <h2 className="max-w-3xl text-balance text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl">
              I build products from idea to shipped experience.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4B5563]">
              <p>
                I position myself as a fullstack software developer, software
                engineer, and product designer because useful products need all
                three: a clear experience, solid implementation, and a reason to
                exist.
              </p>
              <p>
                My work is about building practical tools people can use,
                testing ideas through real interfaces, and growing product ideas
                into SaaS products, client builds, and collaborative launches.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workflow.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-3xl border border-[#E1DDD6] bg-white p-4 shadow-sm"
                >
                  <BadgeCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#2E5E4E]"
                  />
                  <span className="text-sm font-bold leading-6 text-[#0F172A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-[#E1DDD6] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#2E5E4E]/40 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F4ED] text-[#2E5E4E] ring-1 ring-[#E1DDD6] transition group-hover:bg-[#2E5E4E] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
