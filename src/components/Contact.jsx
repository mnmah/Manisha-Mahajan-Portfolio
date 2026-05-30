import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
            Contact
            <span className="text-purple-400"> Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Let's discuss your next project
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-slate-900/80
              backdrop-blur-md
              border border-slate-800
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              I'm always open to discussing new projects,
              creative ideas, freelance opportunities, or
              full-time roles.
            </p>

            {/* Contact Info */}

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-purple-500/10">
                  <MdEmail className="text-2xl text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p>
                    manishamahajan.dev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-purple-500/10">
                  <FaPhoneAlt className="text-xl text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p>
                    +91 93254 57393
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-purple-500/10">
                  <MdLocationOn className="text-2xl text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p>
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}

            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-5">
                Follow Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="
                    p-4 rounded-xl
                    bg-slate-800
                    hover:bg-purple-500
                    transition
                  "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="#"
                  className="
                    p-4 rounded-xl
                    bg-slate-800
                    hover:bg-purple-500
                    transition
                  "
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="#"
                  className="
                    p-4 rounded-xl
                    bg-slate-800
                    hover:bg-purple-500
                    transition
                  "
                >
                  <FaInstagram size={22} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-slate-900/80
              backdrop-blur-md
              border border-slate-800
              rounded-3xl
              p-8
            "
          >
            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-5 py-4
                    rounded-xl
                    bg-slate-800
                    border border-slate-700
                    outline-none
                    focus:border-purple-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-5 py-4
                    rounded-xl
                    bg-slate-800
                    border border-slate-700
                    outline-none
                    focus:border-purple-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="
                    w-full
                    px-5 py-4
                    rounded-xl
                    bg-slate-800
                    border border-slate-700
                    outline-none
                    focus:border-purple-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-5 py-4
                    rounded-xl
                    bg-slate-800
                    border border-slate-700
                    outline-none
                    focus:border-purple-500
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;