import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-slate-950/80
        backdrop-blur-xl
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Manisha Logo"
              className="
                w-12 h-12
                md:w-14 md:h-14
                object-contain
                hover:scale-110
                transition-all
                duration-300
              "
            />

            <span
              className="
                hidden sm:block
                text-xl md:text-2xl
                font-bold
                bg-gradient-to-r
                from-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Manisha Mahajan
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="
                    text-gray-300
                    hover:text-purple-400
                    font-medium
                    transition-all
                    duration-300
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-[2px]
                    after:bg-purple-400
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="
              hidden lg:flex
              items-center
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              px-6 py-3
              rounded-xl
              font-medium
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-purple-500/20
            "
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              text-white
              text-2xl
              p-2
            "
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
        <div className="bg-slate-950 px-6 py-5">

          <ul className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    text-gray-300
                    hover:text-purple-400
                    transition-all
                    duration-300
                    text-lg
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
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Hire Me
          </a>

        </div>
      </div>

    </header>
  );
}

export default Navbar;