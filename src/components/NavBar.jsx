import { Moon, Sun } from "lucide-react";
import { FaEnvelope, FaHome, FaUser, FaProjectDiagram, FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 flex flex-col sm:flex-row sm:justify-between items-center px-4 sm:px-8 py-4 shadow-md bg-opacity-80 backdrop-blur-sm">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-lg mb-2 sm:mb-0">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
          StephisCode
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full sm:w-auto">
        <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start space-x-4 sm:space-x-8 items-center text-lg sm:text-xl mb-2 sm:mb-0 w-full sm:w-auto">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-emerald-400 transition-colors"
            title="Home"
          >
            <FaHome size={25} sm={30} />
          </li>
          <li
            onClick={() => navigate("/about-me")}
            className="cursor-pointer hover:text-emerald-400 transition-colors"
            title="About"
          >
            <FaUser size={20} sm={25} />
          </li>
          <li
            onClick={() => navigate("/projects")}
            className="cursor-pointer hover:text-emerald-400 transition-colors"
            title="Projects"
          >
            <FaProjectDiagram size={20} sm={25} />
          </li>
          <li
            onClick={() => navigate("/skills")}
            className="cursor-pointer hover:text-emerald-400 transition-colors"
            title="Skills"
          >
            <FaCode size={20} sm={25} />
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-emerald-400 transition-colors"
            title="Contact"
          >
            <FaEnvelope size={20} sm={25} />
          </li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors ml-0 sm:ml-4"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
