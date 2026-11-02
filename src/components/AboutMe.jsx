import { ArrowUpRight } from "lucide-react";

const workflow = [
  { title: "Define the right problem", copy: "We start with your business, your users, and what the product needs to achieve. Then we agree on a clear scope." },
  { title: "Design, build, and refine", copy: "I bring the interface and the underlying system together, with room for your feedback along the way." },
  { title: "Test and prepare to launch", copy: "We review the experience across screens, check the important flows, and prepare your product for the real world." },
];

export default function AboutMe({ darkMode }) {
  return (
    <section id="about" className={`px-4 py-20 sm:px-6 lg:px-8 ${darkMode ? "bg-white" : "bg-[#F7F4ED]"}`}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div data-aos="fade-up"><p className="section-eyebrow">The person behind the code</p><h2 className="section-title mt-4">A builder’s mindset.<br />A partner’s approach.</h2><p className="mt-6 text-lg leading-8 text-[#4B5563]">I’m Stephen Okeke, the developer and product designer behind Stephiscode. I bring design and engineering together to build useful digital products for people and businesses.</p><p className="mt-4 leading-7 text-[#4B5563]">From a customer’s first click to the tools you use behind the scenes, I care about how the whole product works. You work directly with the person designing and building it.</p><a href="/#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-[#2E5E4E] hover:underline">Tell me what you’re working on <ArrowUpRight size={18} /></a></div>
        <div><p className="section-eyebrow mb-5">How we get there</p>{workflow.map((step, index) => <div key={step.title} className="flex gap-5 border-t border-[#D8D6CD] py-6"><span className="mt-1 text-xs font-bold text-[#C65D3D]">0{index + 1}</span><div><h3 className="text-xl font-bold tracking-tight text-[#0F172A]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#4B5563]">{step.copy}</p></div></div>)}</div>
      </div>
    </section>
  );
}
