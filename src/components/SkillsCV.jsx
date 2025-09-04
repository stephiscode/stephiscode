import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import { SiExpress, SiTypescript, SiMongodb } from "react-icons/si";
import okeke from "../assets/Okeke.pdf";

function SkillsCV({ darkMode }) {
  const frontendSkills = [
    { name: "React", icon: <FaReact size={30} />, level: 90 },
    { name: "JavaScript", icon: <FaJs size={30} />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript size={30} />, level: 85 },
    { name: "HTML5", icon: <FaHtml5 size={30} />, level: 90 },
    { name: "CSS3 / Tailwind", icon: <FaCss3Alt size={30} />, level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs size={30} />, level: 90 },
    { name: "Express.js", icon: <SiExpress size={30} />, level: 90 },
    { name: "MongoDB", icon: <SiMongodb size={30} />, level: 65 },
    { name: "SQL / Databases", icon: <FaDatabase size={30} />, level: 80 },
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div key={skill.name} className="flex flex-col items-start w-full">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-2">
          {skill.icon}
          <span className="text-base sm:text-lg md:text-xl font-semibold">{skill.name}</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4 overflow-hidden">
          <div
            className="h-3 sm:h-4 bg-emerald-500 transition-all duration-700"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section
      id="skills"
      className={`w-full min-h-screen px-4 sm:px-6 md:px-16 py-16 flex flex-col items-center transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        My <span className="text-emerald-400">Skills & CV</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl w-full mb-12">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-emerald-400">
            Frontend Skills
          </h3>
          {renderSkills(frontendSkills)}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-emerald-400">
            Backend Skills
          </h3>
          {renderSkills(backendSkills)}
        </div>
      </div>

      <a
        href={okeke}
        download
        className="px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500 text-black rounded-full hover:bg-emerald-600 transition text-sm sm:text-base md:text-lg"
      >
        Download Resume
      </a>
    </section>
  );
}

export default SkillsCV;
