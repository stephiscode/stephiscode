import { ArrowUpRight, Globe2, ShoppingBag, Smartphone, CalendarCheck } from "lucide-react";

const services = [
  { title: "Websites with purpose", icon: Globe2, copy: "Custom business websites, portfolios, and landing pages that explain what you do and make the next step easy.", detail: "Business websites · Portfolios · Landing pages" },
  { title: "E-commerce that works", icon: ShoppingBag, copy: "Online stores with thoughtful shopping journeys, payment integrations, and practical tools to manage your business.", detail: "Online stores · Payments · Inventory" },
  { title: "Mobile & web apps", icon: Smartphone, copy: "Bring your product idea to life with usable interfaces, connected accounts, and the features your customers need.", detail: "Mobile apps · SaaS · Dashboards" },
  { title: "Bookings & custom systems", icon: CalendarCheck, copy: "Make everyday operations simpler with booking platforms, property websites, and systems shaped around your workflow.", detail: "Reservations · Property platforms · Admin tools" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#234C3E] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D3DFC1]">What I can do for you</p><h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">The right build for<br />your next chapter.</h2></div>
          <a href="/#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6EACD] px-5 py-3 text-sm font-bold text-[#173A2E] transition hover:bg-white">Discuss your idea <ArrowUpRight size={18} /></a>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {services.map(({ title, icon: Icon, copy, detail }) => (
            <article key={title} className="border-t border-white/20 py-8 sm:py-10">
              <div className="mb-5 flex items-center justify-between"><Icon size={27} strokeWidth={1.5} className="text-[#D3DFC1]" /></div>
              <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[#E0E8E3]">{copy}</p>
              <p className="mt-5 text-xs font-semibold leading-6 text-[#D3DFC1]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
