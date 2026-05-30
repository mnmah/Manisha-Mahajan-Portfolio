import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import profile from "../assets/home_profile_image.png";

function Home() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="absolute bottom-10 right-0 w-40 sm:w-72 h-40 sm:h-72 bg-pink-500/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 md:py-8">

          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Manisha
          </h1>

          <ul className="hidden lg:flex gap-8 text-gray-300">
            <li className="cursor-pointer hover:text-purple-400 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-purple-400 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-purple-400 transition">
              Skills
            </li>

            <li className="cursor-pointer hover:text-purple-400 transition">
              Projects
            </li>

            <li className="cursor-pointer hover:text-purple-400 transition">
              Contact
            </li>
          </ul>

          <button className="text-sm md:text-base bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 md:px-5 md:py-2 rounded-xl hover:scale-105 transition">
            Hire Me
          </button>

        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[85vh] py-10">

          {/* Image Section */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>

              <img
                src={profile}
                alt="profile"
                className="
                  relative z-10
                  w-56
                  sm:w-72
                  md:w-80
                  lg:w-[450px]
                  object-cover
                  rounded-full
                  border-4 border-purple-500
                  shadow-2xl
                "
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-3 leading-tight">
              Manisha
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mahajan
              </span>
            </h1>

            {/* Typewriter */}
            <div className="mt-5 min-h-[60px]">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
                cursor={true}
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  font-bold
                  bg-gradient-to-r
                  from-purple-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                "
              />
            </div>

            <p className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0 leading-7 sm:leading-8 text-sm sm:text-base">
              Passionate Full Stack Developer specializing in
              React.js, Node.js, Express.js, MongoDB and modern web
              technologies. I love building scalable, responsive,
              and user-friendly applications with beautiful UI/UX.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium hover:scale-105 transition">
                View Projects
              </button>

              <button className="border border-purple-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-purple-500 hover:text-white transition">
                Download Resume
              </button>

            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8 text-2xl">

              <a href="#">
                <FaGithub className="hover:text-purple-400 transition cursor-pointer" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-purple-400 transition cursor-pointer" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-purple-400 transition cursor-pointer" />
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Home;