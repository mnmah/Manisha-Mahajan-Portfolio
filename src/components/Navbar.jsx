import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Manisha Logo"
              className="w-18 h-18 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-300">

            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="
                    hover:text-purple-400
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="
              hidden lg:block
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              px-5 py-2.5
              rounded-xl
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            isOpen
              ? "max-h-[500px] border-t border-slate-800"
              : "max-h-0"
          }
        `}
      >
        <div className="bg-slate-950 px-6 py-4">

          <ul className="flex flex-col gap-5 text-gray-300">

            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    hover:text-purple-400
                    transition
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
              mt-6
              block
              text-center
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              py-3
              rounded-xl
              font-medium
            "
          >
            Hire Me
          </a>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;