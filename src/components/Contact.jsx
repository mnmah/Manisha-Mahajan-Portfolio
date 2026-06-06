import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
FaGithub,
FaLinkedin,
FaInstagram,
FaPhoneAlt,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import {
MdEmail,
MdLocationOn,
} from "react-icons/md";

function Contact() {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs
  .sendForm(
    "service_91551lm",
    "template_7gxtf7r",
    form.current,
    "f-bvsxac2FQyY9z9-"
  )
  .then(
    () => {
      alert("Message sent successfully!");
      form.current.reset();
    },
    (error) => {
      alert("Failed to send message.");
      console.log(error);
    }
  );

};

return ( <section
   id="contact"
   className="
     scroll-mt-24
     relative
     bg-slate-950
     text-white
     py-16 sm:py-20
     px-4 sm:px-6 lg:px-8
     overflow-hidden
   "
 > <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" /> <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px]" />

```
  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Contact
        <span className="text-purple-400"> Me</span>
      </h2>

      <p className="text-gray-400 mt-4">
        Let's discuss your next project
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          bg-slate-900/80
          backdrop-blur-md
          border border-slate-800
          rounded-3xl
          p-5 sm:p-6 md:p-8
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Get In Touch
        </h3>

        <p className="text-gray-400 leading-8 mb-8">
          I'm always open to discussing new projects,
          freelance opportunities, internships,
          or full-time roles.
        </p>

        <div className="space-y-5">

          <div className="flex items-start sm:items-center gap-4">
            <div className="p-4 rounded-xl bg-purple-500/10">
              <MdEmail className="text-2xl text-purple-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Email
              </p>

              <p className="break-all text-sm sm:text-base">
                manishamahajan.dev@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-4">
            <div className="p-4 rounded-xl bg-purple-500/10">
              <FaPhoneAlt className="text-xl text-purple-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Phone
              </p>

              <p className="text-sm sm:text-base">
                +91 93254 57393
              </p>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-4">
            <div className="p-4 rounded-xl bg-purple-500/10">
              <MdLocationOn className="text-2xl text-purple-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Location
              </p>

              <p className="text-sm sm:text-base">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10">

          <h4 className="text-xl font-semibold mb-5">
            Follow Me
          </h4>

          <div className="flex flex-wrap gap-3 sm:gap-4">

            <a
              href="https://github.com/mnmah"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-xl bg-slate-800 hover:bg-purple-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/mnma/"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-xl bg-slate-800 hover:bg-purple-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/m.anyyyy"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-xl bg-slate-800 hover:bg-purple-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://leetcode.com/u/SpWbVqBx/"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-4 rounded-xl bg-slate-800 hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
            >
              <SiLeetcode size={22} />
            </a>

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          bg-slate-900/80
          backdrop-blur-md
          border border-slate-800
          rounded-3xl
          p-5 sm:p-6 md:p-8
        "
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="user_name"
            required
            placeholder="Full Name"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="user_email"
            required
            placeholder="Email Address"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            rows="6"
            required
            placeholder="Write your message..."
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none"
          />

          <button
            type="submit"
            className="
              w-full
              py-3 sm:py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              font-semibold
              hover:scale-[1.02]
              transition-all
              duration-300
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
