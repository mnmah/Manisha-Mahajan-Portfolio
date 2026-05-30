import { motion } from "framer-motion";
import profile from "../assets/passport_img.png";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About
            <span className="text-purple-400"> Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Get to know me better
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>

              <img
                src={profile}
                alt="About"
                className="
                  relative z-10
                  w-64
                  sm:w-72
                  md:w-80
                  lg:w-[380px]
                  rounded-3xl
                  border
                  border-purple-500
                  shadow-2xl
                "
              />

            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-7 md:leading-8 text-sm sm:text-base text-center lg:text-left">
              I'm Manisha Mahajan, a passionate Full Stack Developer
              specializing in React.js, Node.js, Express.js, MongoDB,
              and modern web technologies.

              <br />
              <br />

              I enjoy building responsive, scalable, and user-friendly
              applications that solve real-world problems and deliver
              exceptional user experiences.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                <h4 className="text-purple-400 text-2xl font-bold">
                  3+
                </h4>

                <p className="text-gray-400">
                  Years Learning
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                <h4 className="text-purple-400 text-2xl font-bold">
                  12+
                </h4>

                <p className="text-gray-400">
                  Projects Completed
                </p>
              </div>

            </div>

            {/* Contact Information */}
            <div className="mt-10">

              <h3 className="text-xl font-semibold text-purple-400 mb-5">
                Contact Information
              </h3>

              <div className="grid md:grid-cols-3 gap-4">

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                  <MdEmail className="text-3xl text-purple-400 mb-2" />

                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p className="text-white break-all text-sm">
                    manishamahajan.dev@gmail.com
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                  <FaPhoneAlt className="text-3xl text-purple-400 mb-2" />

                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="text-white text-sm">
                    +91 93254 57393
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                  <MdLocationOn className="text-3xl text-purple-400 mb-2" />

                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="text-white text-sm">
                    Pune, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:scale-105 transition">
                Download Resume
              </button>

              <button className="border border-purple-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-purple-500 transition">
                Contact Me
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;