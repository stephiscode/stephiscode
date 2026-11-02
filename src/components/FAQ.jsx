import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const questions = [
  { question: "What can you build for my business?", answer: "I design and build custom websites and mobile apps, including business websites, portfolios, e-commerce stores, booking and reservation systems, dashboards, and SaaS products. Whether you need a focused website or a platform with accounts, payments, and management tools, we can shape the features around your business." },
  { question: "How much will my project cost?", answer: "Pricing depends on the scope, design, features, and integrations your project needs. Share your idea and budget, and I’ll put together a tailored proposal with clear deliverables. Hosting, domain names, and any third-party service costs are discussed before work begins." },
  { question: "How long does a project take, and how do we start?", answer: "The timeline depends on the size and complexity of the build. We start with your goals, audience, must-have features, and preferred launch date, then agree on the scope and milestones. You’ll have opportunities to review the design and working product before launch." },
  { question: "Can you improve my existing website or support it after launch?", answer: "Yes. I can refresh an existing design, improve mobile usability, add features, or help with maintenance and future updates. We’ll review the current setup and agree on what needs attention. Any ongoing support is scoped separately so the responsibilities and costs are clear." },
];

export default function FAQ({ darkMode }) {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <section id="faq" className={`px-4 py-20 sm:px-6 lg:px-8 ${darkMode ? "bg-[#F7F4ED]" : "bg-white"}`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="section-eyebrow">Before we build</p>
          <h2 className="section-title mt-4">Good questions.<br />Clear answers.</h2>
          <p className="mt-5 max-w-sm leading-7 text-[#4B5563]">A few things you might want to know before bringing your idea to life.</p>
          <a href="/#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-[#2E5E4E] hover:underline">Let’s talk about your project <ArrowUpRight size={18} /></a>
        </div>
        <div className="border-t border-[#D8D6CD]">
          {questions.map((item, index) => {
            const open = openQuestion === index;
            return (
              <div key={item.question} className="border-b border-[#D8D6CD]">
                <h3>
                  <button id={`faq-question-${index}`} type="button" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={() => setOpenQuestion(open ? null : index)} className="group flex w-full items-center gap-4 py-6 text-left">
                    <span className="text-xs font-bold text-[#2E5E4E]">0{index + 1}</span>
                    <span className="flex-1 text-base font-bold leading-6 text-[#0F172A] sm:text-lg">{item.question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${open ? "bg-[#2E5E4E] text-white" : "bg-white text-[#2E5E4E] group-hover:bg-[#E7EDE6]"}`}><Plus size={18} className={`transition-transform ${open ? "rotate-45" : ""}`} /></span>
                  </button>
                </h3>
                <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!open} className="pb-6 pl-8 pr-3 text-sm leading-7 text-[#4B5563] sm:pr-14">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
