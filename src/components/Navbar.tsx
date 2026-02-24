import { useState } from "react";
// import LOGO from "../assets/react.svg";
import { Menu, X } from "lucide-react"; // icons from lucide-react (preinstalled in most setups)
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const name = "< Aaron/ >";
  return (
    <nav className="w-[90%] mx-auto mt-5 flex items-center justify-between text-gray-400 rounded-full relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src={LOGO} alt="logo" className="w-10 h-10" /> */}
        <h1 className="font-extrabold text-4xl montserrat text-white hover:text-cyan-300">
          {name}
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-8 montserrat py-2 px-3 rounded-full">
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/aboutus"}
        >
          ABOUT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/education"}
        >
          EDUCATION
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/experience"}
        >
          EXPERIENCE
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/skills"}
        >
          SKILLS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/projects"}
        >
          PROJECTS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/designs"}
        >
          DESIGNS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/certificate"}
        >
          CERTIFICATE
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`
          }
          to={"/contactus"}
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full text-white bg-black text-center flex flex-col gap-4 py-5 rounded-2xl shadow-lg md:hidden z-50">
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/aboutus"}
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/education"}
          >
            EDUCATION
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/experience"}
          >
            EXPERIENCE
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/skills"}
          >
            SKILLS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/projects"}
          >
            PROJECTS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/designs"}
          >
            DESIGNS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/certificate"}
          >
            CERTIFICATE
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
            to={"/contactus"}
          >
            CONTACT
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
