import profileImage from "../assets/profile.JPG";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Hero({ darkMode }) {

  return (
    <>
      <section id="home" 
      className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 md:px-8 lg:px-16 min-h-[80vh]"
      data-aos="fade-up">

        <img
          src={profileImage} 
          alt="profile-image"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-emerald-400 shadow-lg object-cover object-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        />

        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold"
        data-aos="fade-right"
        data-aos-delay="200">
          Okeke Stephen
        </h2>

        <p 
        className="mt-2 text-sm sm:text-lg md:text-xl text-emerald-400"
        data-aos="fade-left"
        data-aos-delay="300">
          FullStack Software Developer
        </p>

        <p 
        className={`mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg ${darkMode ? "text-gray-400" : "text-gray-700"}`}
        data-aos="fade-up"
        data-aos-delay="400">
          I design and develop full-stack web applications that are both visually appealing and highly functional. From crafting dynamic user interfaces with React and Tailwind to building robust backend systems with Node.js and Express, I focus on delivering solutions that provide real value to users.
        </p>

       
        <div 
        className="flex space-x-6 mb-9 mt-4 p-4 border-2 border-emerald-500 rounded-full"
        data-aos="fade-up"
        data-aos-delay="500">

          <a href="https://github.com/stephiscode" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-400 transition-colors">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/stephen-okeke-405569331/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-400 transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:Okekeestephbliss@gmail.com" className="text-2xl hover:text-emerald-400 transition-colors">
            <FaEnvelope size={30} />
          </a>

          <a href="https://www.x.com/stephiscode" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-400 transition-colors">
            <FaSquareXTwitter size={30} />
          </a>

          <a href="https://www.instagram.com/stephiscode/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-400 transition-colors">
            <FaInstagramSquare size={30} />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-2 border border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
            Contact Me
          </a>
       </div>
      </section>
   

      
      
     </>
  );
}

export default Hero;
