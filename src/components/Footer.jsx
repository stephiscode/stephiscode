import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full px-4 sm:px-6 md:px-16 py-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
              StephisCode
            </span>
          </h3>

          <p className="text-sm sm:text-base text-gray-400">
            Building modern, responsive, and user-friendly web experiences.
          </p>
          <div className="flex flex-wrap sm:flex-nowrap space-x-3 sm:space-x-4 mt-2 gap-2">
            <a
              href="https://github.com/stephiscode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaGithub size={20} sm={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephen-okeke-405569331/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin size={20} sm={24} />
            </a>
            <a
              href="mailto:Okekeestephbliss@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              <FaEnvelope size={20} sm={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Quick Links</h3>
          <a href="#home" className="hover:text-emerald-400 transition text-sm sm:text-base">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-400 transition text-sm sm:text-base">
            About
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition text-sm sm:text-base">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition text-sm sm:text-base">
            Contact
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg sm:text-xl mb-2">Stay Updated</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Subscribe to get updates on my latest projects and blog posts.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 sm:p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 flex-1 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 px-4 py-2 sm:py-3 bg-emerald-500 text-black rounded-md hover:bg-emerald-600 transition font-semibold text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm sm:text-base text-gray-400">
        © 2025 StephisCode | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
