import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/stephiscode",
    href: "https://github.com/stephiscode",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/stephen-okeke-405569331/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "Stephiscode@gmail.com",
    href: "mailto:Stephiscode@gmail.com",
    icon: FaEnvelope,
  },
];

function ContactMe({ darkMode }) {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-slate-100 text-slate-950"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-aos="fade-up">
          

          <h2 className="text-balance text-4xl font-black sm:text-5xl">
            Need a developer who can move from idea to shipped product?
          </h2>
          <p
            className={`mt-6 text-lg leading-8 ${
              darkMode ? "text-zinc-300" : "text-slate-700"
            }`}
          >
            Available for freelance work, web apps, mobile apps, dashboards,
            APIs, and product collaboration.
          </p>

          <div className="mt-8 grid gap-4">
            <div
              className={`rounded-[1.75rem] border p-5 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-300 p-3 text-zinc-950">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="font-black">Available for focused work</p>
                  <p
                    className={`mt-1 text-sm leading-6 ${
                      darkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Portfolio upgrades, React apps, React Native apps,
                    dashboards, APIs, and fullstack product builds.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-[1.75rem] border p-5 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-300 p-3 text-zinc-950">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-black">Remote-ready</p>
                  <p
                    className={`mt-1 text-sm leading-6 ${
                      darkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    Clear communication, fast iteration, and a product-minded
                    approach from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group flex items-center justify-between rounded-2xl border p-4 transition ${
                    darkMode
                      ? "border-white/10 bg-zinc-950/50 hover:border-emerald-300/35"
                      : "border-slate-200 bg-white hover:border-emerald-400"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-zinc-950">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-sm font-black">{link.label}</span>
                      <span
                        className={`block text-xs font-semibold ${
                          darkMode ? "text-zinc-400" : "text-slate-500"
                        }`}
                      >
                        {link.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <form
          action="https://formspree.io/f/xgvlpalp"
          method="POST"
          onSubmit={handleSubmit}
          className={`rounded-[2rem] border p-5 sm:p-8 ${
            darkMode
              ? "border-white/10 bg-zinc-950/80"
              : "border-slate-300 bg-white text-slate-950 shadow-xl shadow-slate-200/80"
          }`}
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-zinc-950">
                <Mail size={22} />
              </div>
              <h3 className="text-2xl font-black">Share your project details.</h3>
              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-zinc-400" : "text-slate-600"
                }`}
              >
                Keep it short or give me the full idea. Either way, the inbox is
                open.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-emerald-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                    : "border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                }`}
              />
            </label>

            <label className="grid gap-2 text-sm font-black">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-emerald-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                    : "border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                }`}
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-black">
            Message
            <textarea
              name="message"
              placeholder="Tell me about the project, role, timeline, or idea."
              rows="7"
              required
              className={`resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-emerald-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                  : "border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
              }`}
            />
          </label>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-black text-emerald-300">
              <CheckCircle2 size={18} />
              Message sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-black text-red-300">
              Message failed. Please try again or email me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-5 py-4 text-sm font-black text-zinc-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
