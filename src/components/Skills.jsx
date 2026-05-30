import { motion } from "framer-motion";
import skillsImage from "../assets/Skills.png";

function Skills() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap 5",
  ];

  const expertise = [
    {
      title: "Frontend Development",
      width: "95%",
    },
    {
      title: "Backend Development",
      width: "92%",
    },
    {
      title: "Database Management",
      width: "90%",
    },
    {
      title: "API Integration",
      width: "96%",
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "Vercel",
    "Render",
    "AWS",
    "Postman",
    "CI/CD",
    "Stripe API",
    "Razorpay API",
    "OpenAI API",
    "Socket.io",
    "JWT",
  ];

  return (
    <section
      id="skills"
      className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My
            <span className="text-purple-400"> Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies, frameworks and tools I use to build
            modern web applications.
          </p>
        </motion.div>

        {/* Skills Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.img
            src={skillsImage}
            alt="Skills"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              w-64
              sm:w-80
              md:w-96
              lg:w-[450px]
              object-contain
            "
          />
        </motion.div>

        {/* Technology Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">

          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="
                px-5 py-3
                rounded-xl
                bg-slate-900
                border border-slate-700
                hover:border-purple-500
                transition
                cursor-pointer
              "
            >
              {tech}
            </motion.div>
          ))}

        </div>

        {/* Expertise Section */}
        <div className="max-w-4xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Expertise
          </h3>

          <div className="space-y-8">

            {expertise.map((item, index) => (
              <div key={index}>

                <div className="flex justify-between mb-3">
                  <span className="font-medium">
                    {item.title}
                  </span>

                  <span className="text-purple-400">
                    {item.width}
                  </span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: item.width,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="
                      h-3
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                    "
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Tools Section */}
        <div className="mt-24">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Tools & Integrations
          </h3>

          <div className="flex flex-wrap justify-center gap-3">

            {tools.map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  px-4 py-2
                  rounded-full
                  bg-purple-500/10
                  border border-purple-500/30
                  text-purple-300
                  cursor-pointer
                "
              >
                {tool}
              </motion.span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;