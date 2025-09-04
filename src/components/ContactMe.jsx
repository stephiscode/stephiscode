import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function ContactMe({ darkMode }) {
  const [status, setStatus] = useState(""); 

  return (
    <section
      id="contact"
      className={`w-full min-h-screen px-4 sm:px-6 md:px-16 py-16 flex flex-col items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
        data-aos="fade-down"
      >
        Contact <span className="text-emerald-400">Me</span>
      </h2>

      <p 
        className="text-center max-w-md sm:max-w-xl md:max-w-2xl text-base sm:text-lg mb-8"
        data-aos="fade-up"
      >
        I will love to hear from you! Feel free to reach out via email or connect
        with me on GitHub and LinkedIn.
      </p>

      <div 
        className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-8 gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <a
          href="https://github.com/stephiscode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-emerald-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-okeke-405569331/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-emerald-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:Okekeestephbliss@gmail.com"
          className="text-2xl sm:text-3xl hover:text-emerald-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {status === "success" && (
        <p 
          className="mb-4 text-green-500 font-semibold"
          data-aos="fade-in"
        >
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p 
          className="mb-4 text-red-500 font-semibold"
          data-aos="fade-in"
        >
          Failed to send message. Try again.
        </p>
      )}

      <form
        data-aos="fade-up"
        data-aos-delay="200"
        action="https://formspree.io/f/xgvlpalp" 
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
          })
            .then((response) => {
              if (response.ok) {
                setStatus("success");
                form.reset();
              } else {
                setStatus("error");
              }
            })
            .catch(() => setStatus("error"));
        }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={`p-3 sm:p-4 rounded border focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base ${
            darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={`p-3 sm:p-4 rounded border focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base ${
            darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"
          }`}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className={`p-3 sm:p-4 rounded border focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base ${
            darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"
          }`}
        />
        <button
          type="submit"
          className="bg-emerald-500 text-black font-bold rounded py-3 sm:py-3.5 text-sm sm:text-base hover:bg-emerald-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
