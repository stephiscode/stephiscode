import blissbuy from "../images/Bliss-buy.png";
import blissstore from "../images/Bliss-store.png";
import blogapp from "../images/blog-app.png";
import doqueue from "../images/DoQueue.png";
import getadvice from "../images/Get-advice.png";
import landingpage from "../images/Landingpage-Ecommerce.png";
import trackfi from "../images/TrackFi.png";
import weatherapp from "../images/Weather-App.png";
import fuelupright from "../images/FuelUpRight.png";

const projectImages = {
  "BlissBuy": blissbuy,
  "TrackFi": trackfi,
  "DoQueue": doqueue,
  "Get Advice": getadvice,
  "E-commerce Landing Page": landingpage,
  "Blog App": blogapp,
  "Bliss Store": blissstore,
  "Weather App": weatherapp,
  "Fuel Up Right" : fuelupright
};

function Projects({ darkMode }) {
  const projects = [
    {
      name: "BlissBuy",
      description: "E-commerce frontend built with React and Tailwind, featuring product filtering and modern UI.",
      tech: ["React", "Tailwind CSS", "Axios, TypeScript"],
      link: "https://bliss-buy.vercel.app/"
    },
    {
      name: "TrackFi",
      description: "Personal finance tracker with transaction list, summary, and monthly breakdown.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://track-fi-henna.vercel.app/"
    },
    {
      name: "DoQueue",
      description: "Task management app to organize and track daily tasks efficiently.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://do-queue-steel.vercel.app/"
    },
    {
      name: "Get Advice",
      description: "Advice app fetching random advice from API using React and Axios.",
      tech: ["React", "Axios", "JavaScript"],
      link: "https://get-advice-xi.vercel.app/"
    },
    {
      name: "E-commerce Landing Page",
      description: "Modern, responsive landing page for an online store featuring product filtering, dynamic product display, and smooth interactive UI.",
      tech: ["React", "Axios", "TypeScript", "Tailwind CSS"],
      link: "https://ecommerce-landing-page-eight.vercel.app/"
    },
    {
      name: "Blog App",
      description: "A modern, responsive blog app built with React for creating, reading, and browsing engaging posts with a smooth user experience.",
      tech: ["React", "Axios", "TypeScript", "Tailwind CSS"],
      link: "https://blogs-app-eta-ivory.vercel.app/"
    },
    {
      name: "Bliss Store",
      description: "Modern fashion and beauty e-commerce store featuring clothing, lipsticks, and fragrances. Includes dynamic product filtering and smooth UI interactions.",
      tech: ["React", "Axios", "TypeScript", "Tailwind CSS"],
      link: "https://bliss-store.vercel.app/"
    },
    {
      name: "Weather App",
      description: "Dynamic weather app showing real-time weather and forecast by city.",
      tech: ["Html", "JavaScript", "API", "CSS"],
      link: "https://weather-app-lovat-three-48.vercel.app/"
    },
    {
      name: "Fuel Up Right",
      description: "A responsive nutrition website providing meal plans, health tips, and BMI tracking for a healthier lifestyle.",
      tech: ["Html", "JavaScript", "CSS"],
      link: "https://fuel-up-right.vercel.app/"
    }
  ];

  return (
    <section
      id="projects"
      className={`w-full min-h-screen px-4 sm:px-6 md:px-16 py-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
        data-aos="fade-right" 
        data-aos-delay="200"
      >
        My <span className="text-emerald-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ${
              darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-emerald-100 hover:bg-emerald-200"
            }`} 
            data-aos="fade-up"            
            data-aos-delay={index * 150}   
            data-aos-duration="800"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={projectImages[project.name]}
                alt={project.name}
                className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm sm:text-base mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-semibold ${
                    darkMode ? "bg-emerald-600 text-black" : "bg-emerald-500 text-black"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
