import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

function AboutMe({ darkMode }) {
  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-16 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center">
        About <span className="text-emerald-400">Me</span>
      </h2>

      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl text-center space-y-4 text-base sm:text-lg md:text-xl">
        <p>
          Hi, I'm <strong>Okeke Stephen</strong>, a Full-Stack Software Developer
          passionate about building modern, responsive, and interactive web
          applications. I enjoy creating projects that solve real-world problems
          and enhance user experiences.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          Skilled in modern frontend and backend technologies, focused on
          building scalable applications, clean user interfaces, and efficient
          APIs while continuously learning and improving.
        </p>
      </div>

      {/* ✅ ICON SKILLS SECTION */}
      <div
        className="flex flex-wrap justify-center mt-10 gap-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {[
          { icon: <FaReact size={40} />, name: "React" },
          { icon: <SiNextdotjs size={40} />, name: "Next.js" },
          { icon: <FaJs size={40} />, name: "JavaScript" },
          { icon: <SiTypescript size={40} />, name: "TypeScript" },
          { icon: <FaNodeJs size={40} />, name: "Node.js" },
          { icon: <TbApi size={40} />, name: "REST API" },
          { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
          { icon: <FaHtml5 size={40} />, name: "HTML5" },
          { icon: <FaCss3Alt size={40} />, name: "CSS3" },
        ].map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-transform duration-300 hover:scale-110 ${
              darkMode ? "bg-zinc-900" : "bg-gray-100"
            }`}
            data-aos="zoom-in"
            data-aos-delay={600 + index * 100}
          >
            <span className="mb-2">{skill.icon}</span>

            <span className="text-sm sm:text-base font-semibold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;