import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Projects() {
  const projects = [
    {
      title: "Mess Management System",
      image: project1,
      description:
        "A complete mess management platform for handling student meal plans, attendance tracking, meal records, and administrative operations with a responsive dashboard.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],

      github: "#",

      live:
        "https://mess-management-system-sigma.vercel.app/",
    },

    {
      title: "Imagify AI",
      image: project2,

      description:
        "AI-powered image generation application that converts text prompts into beautiful AI-generated images with a modern and responsive user interface.",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "OpenAI API",
        "Tailwind CSS",
      ],

      github:
        "https://imagify-frontend-hclo.onrender.com/",

      live:
        "https://imagify-frontend-hclo.onrender.com/",
    },

    {
      title: "Food Delivery App",
      image: project3,

      description:
        "Full-stack food ordering platform featuring authentication, cart management, order tracking, admin dashboard and seamless user experience.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
      ],

      github:
        "https://github.com/mnmah/Food-Delivery-App-backend",

      live:
        "https://food-delivery-app-frontend-eight.vercel.app/",
    },

    {
      title: "Bank Management System",
      image: project4,

      description:
        "Banking platform with secure authentication, account management, transactions, customer records and administrative controls.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],

      github:
        "https://github.com/mnmah/Bank-System-",

      live:
        "https://bank-system-45je.vercel.app/login",
    },

    {
      title: "Face Recognition Attendance System",
      image: project5,

      description:
        "AI-powered attendance management solution using facial recognition technology for automated attendance tracking and monitoring.",

      tech: [
        "React",
        "Express",
        "Node",
        "Face Recognition",
        "MongoDB",
      ],

      github:
        "https://github.com/mnmah/Face-Recognition-Attendance-System",

      live:
        "https://face-recognition-attendance-system-indol.vercel.app/",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject(
      (prev) => (prev + 1) % projects.length
    );
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) =>
        (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="relative bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured
            <span className="text-purple-400">
              {" "}
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Explore some of my recent work
          </p>
        </motion.div>

        {/* Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              grid
              lg:grid-cols-2
              gap-8
              items-center
              bg-slate-950/80
              border
              border-slate-800
              rounded-3xl
              p-5
              md:p-8
              lg:p-10
              backdrop-blur-md
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  object-cover
                  rounded-2xl
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />
            </div>

            {/* Content */}
            <div>

              <span
                className="
                  px-4 py-2
                  rounded-full
                  bg-purple-500/10
                  border
                  border-purple-500/20
                  text-purple-400
                  text-sm
                "
              >
                {String(currentProject + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-6">
                {projects[currentProject].title}
              </h3>

              <p className="text-gray-400 leading-8 mt-6">
                {projects[currentProject].description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">

                {projects[currentProject].tech.map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="
                        px-4 py-2
                        rounded-xl
                        bg-slate-800
                        border
                        border-slate-700
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <a
                  href={projects[currentProject].github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    px-6 py-3
                    rounded-xl
                    border border-slate-700
                    hover:border-purple-500
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={projects[currentProject].live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    hover:scale-105
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-10">

          <button
            onClick={prevProject}
            className="
              w-12 h-12
              rounded-full
              bg-slate-800
              hover:bg-purple-500
              transition
              flex items-center justify-center
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextProject}
            className="
              w-12 h-12
              rounded-full
              bg-slate-800
              hover:bg-purple-500
              transition
              flex items-center justify-center
            "
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">

          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentProject(index)
              }
              className={`transition-all duration-300 rounded-full ${
                currentProject === index
                  ? "w-8 h-3 bg-purple-500"
                  : "w-3 h-3 bg-slate-600"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;