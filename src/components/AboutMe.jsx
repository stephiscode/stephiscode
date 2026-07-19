import {
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  Gauge,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

const strengths = [
  {
    title: "Frontend systems",
    icon: Code2,
    copy: "React interfaces with clean structure, strong states, responsive layouts, and sharp interaction details.",
  },
  {
    title: "Mobile apps",
    icon: Smartphone,
    copy: "React Native product thinking for mobile experiences that feel focused, usable, and connected to real APIs.",
  },
  {
    title: "Backend logic",
    icon: ServerCog,
    copy: "Node and Express APIs that keep data flows readable, secure, and ready for real users.",
  },
  {
    title: "Data design",
    icon: Database,
    copy: "PostgreSQL-backed thinking for dashboards, finance tools, tasks, and product workflows.",
  },
  {
    title: "Performance",
    icon: Gauge,
    copy: "Fast pages, lean components, clear loading states, and UI decisions that respect attention.",
  },
  {
    title: "Product delivery",
    icon: Cloud,
    copy: "Modern build tooling, deployment awareness, and production polish across web and mobile product work.",
  },
];

const workflow = [
  "Map the user flow before touching the interface",
  "Build the backend contract around real data needs",
  "Design responsive screens that feel fast and obvious",
  "Ship, review, refine, and keep the product moving",
];

function AboutMe({ darkMode }) {
  return (
    <section
      id="about"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-aos="fade-up">
            

            <h2 className="max-w-3xl text-balance text-4xl font-black sm:text-5xl">
              A fullstack software engineer who can own the flow end to end.
            </h2>

            <div
              className={`mt-6 space-y-5 text-lg leading-8 ${
                darkMode ? "text-zinc-300" : "text-slate-700"
              }`}
            >
              <p>
                I build with the whole product in mind: how a user finds the
                feature, how the screen responds, how the API behaves, how the
                database stores truth, and how the final product feels in
                someone&apos;s hands.
              </p>
              <p>
                My work sits where design sense meets engineering discipline. I
                care about clean interfaces, useful systems, and code that can
                grow without becoming painful to maintain.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workflow.map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-3xl border p-4 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <BadgeCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-300"
                  />
                  <span className="text-sm font-bold leading-6">{item}</span>
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
                  className={`rounded-[1.75rem] border p-5 transition hover:-translate-y-1 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-emerald-300/35"
                      : "border-slate-200 bg-white shadow-sm hover:border-emerald-400"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-zinc-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      darkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
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
