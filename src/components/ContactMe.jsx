import { useState } from "react";
import {
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Users,
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
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    setIsSending(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      if (!endpoint) {
        throw new Error("The contact form endpoint is not configured.");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const formspreeMessage = result?.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(" ");

        throw new Error(
          formspreeMessage || "Formspree could not deliver the message.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Please check your connection and try again.",
      );
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${
        darkMode ? "bg-white" : "bg-[#F7F4ED]"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-aos="fade-up">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-[#2E5E4E]">
            Build with me
          </p>

          <h2 className="text-balance text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl">
            Have an app idea, product problem, or client build?
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4B5563]">
            I am open to freelance work, SaaS collaboration, dashboards, mobile
            app flows, APIs, and fullstack products that need both design sense
            and engineering discipline.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.75rem] border border-[#E1DDD6] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#2E5E4E] p-3 text-white">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="font-black text-[#0F172A]">
                    Product-minded development
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                    From idea validation and UI direction to backend structure,
                    launch details, and practical iteration.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#E1DDD6] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#C65D3D] p-3 text-white">
                  <Users size={22} />
                </div>
                <div>
                  <p className="font-black text-[#0F172A]">
                    Client and collaboration ready
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4B5563]">
                    Clear communication, fast iteration, and a builder mindset
                    for people who want to move from concept to shipped product.
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
                  className="group flex items-center justify-between rounded-2xl border border-[#E1DDD6] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#2E5E4E]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F4ED] text-[#2E5E4E] ring-1 ring-[#E1DDD6]">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#0F172A]">
                        {link.label}
                      </span>
                      <span className="block text-xs font-semibold text-[#4B5563]">
                        {link.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#2E5E4E] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onChange={() => {
            if (status !== "idle") {
              setStatus("idle");
              setErrorMessage("");
            }
          }}
          className="rounded-[2rem] border border-[#E1DDD6] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.10)] sm:p-8"
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="hidden"
            name="_subject"
            value="New project inquiry from Stephiscode"
          />
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                <Mail size={22} />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A]">
                Share the product details.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                Send the idea, feature, timeline, or collaboration note. I will
                read it like a builder, not just a form submission.
              </p>
            </div>
            <MessageSquare size={22} className="hidden text-[#2E5E4E] sm:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#0F172A]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#4B5563]/60 focus:border-[#2E5E4E] focus:ring-2 focus:ring-[#2E5E4E]/15"
              />
            </label>

            <label className="grid gap-2 text-sm font-black text-[#0F172A]">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#4B5563]/60 focus:border-[#2E5E4E] focus:ring-2 focus:ring-[#2E5E4E]/15"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-black text-[#0F172A]">
            Message
            <textarea
              name="message"
              placeholder="Tell me about the product, role, timeline, or idea."
              rows="7"
              required
              className="resize-none rounded-2xl border border-[#E1DDD6] bg-[#F7F4ED] px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#4B5563]/60 focus:border-[#2E5E4E] focus:ring-2 focus:ring-[#2E5E4E]/15"
            />
          </label>

          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 flex animate-[contactFeedbackIn_300ms_ease-out] items-start gap-3 rounded-2xl border border-[#2E5E4E]/30 bg-[#2E5E4E]/10 px-4 py-3.5 text-[#2E5E4E] shadow-[0_12px_30px_rgba(46,94,78,0.10)]"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2E5E4E] text-white">
                <CheckCircle2 size={16} strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-sm font-black">
                  Message sent successfully.
                </span>
                <span className="mt-0.5 block text-xs font-semibold leading-5 text-[#2E5E4E]/80">
                  Thank you for reaching out. I will get back to you shortly.
                </span>
              </span>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mt-4 flex animate-[contactFeedbackIn_300ms_ease-out] items-start gap-3 rounded-2xl border border-[#C65D3D]/30 bg-[#C65D3D]/10 px-4 py-3.5 text-[#9F4329] shadow-[0_12px_30px_rgba(198,93,61,0.10)]"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C65D3D] text-white">
                <AlertCircle size={16} strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-sm font-black">
                  Your message was not sent.
                </span>
                <span className="mt-0.5 block text-xs font-semibold leading-5 text-[#9F4329]/80">
                  {errorMessage}
                </span>
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2E5E4E] px-5 py-4 text-sm font-black text-white transition hover:bg-[#0F172A] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending Message
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
