import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { NavLink } from "react-router-dom";

function CtaFooter() {
  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24 relative z-10">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16">
        {/* Left Side: Quote */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {/* Quote Symbol */}
          <span className="text-blue-500 text-6xl sm:text-7xl font-serif leading-none select-none">
            “
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight montserrat leading-tight -mt-4">
            Learning by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Building
            </span>
            ,<br className="hidden sm:inline" /> Growing by{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Teaching
            </span>
            .
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-2">
            Let's connect and learn together!
          </p>
        </div>

        {/* Right Side: CTA Button & Socials */}
        <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-6">
          {/* Connect Button */}
          <NavLink to="/contactus" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/30 cursor-pointer text-sm sm:text-base"
            >
              <Mail size={18} />
              <span>Let's Connect</span>
            </motion.button>
          </NavLink>

          {/* Circle Social Links */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aaron-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-700 hover:border-white flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aaron2578"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-700 hover:border-white flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:aaronc2578@gmail.com"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-700 hover:border-white flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaFooter;
