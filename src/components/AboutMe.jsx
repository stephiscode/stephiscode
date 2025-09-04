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
          Skilled in <strong>React, JavaScript, HTML, CSS, Express.js, Node.js</strong>,
          and always eager to learn new technologies. I value clean code,
          creativity, and continuous improvement.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center mt-8 gap-3 sm:gap-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {["React", "JavaScript", "Typescript", "HTML", "CSS", "Express.js"].map((skill, index) => (
          <span
            key={skill}
            className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
              darkMode
                ? "bg-emerald-500 text-black"
                : "bg-emerald-600 text-white"
            }`}
            data-aos="zoom-in"
            data-aos-delay={600 + index * 100}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
