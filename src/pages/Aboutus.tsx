import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PROFILE_IMG from "../assets/person12.png";
import Button from "../components/Button";
import RESUME from "../documents/Master Resume -Aaron.pdf";

function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />
      <div className="flex-grow flex items-center justify-center py-12">
        <motion.div
          className="w-[90%] max-w-5xl bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block mb-8 relative">
            About Me
            <div className="w-12 h-1 bg-blue-600 mt-2 rounded-full" />
          </h2>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center md:items-start">
            <div className="md:w-[70%]">
              <p className="montserrat text-justify leading-loose text-slate-300">
                I’m Aaron, a dedicated Full Stack Developer, UI/UX Designer, and
                Technical Trainer with a passion for creating impactful digital
                experiences. I specialize in designing and developing responsive,
                user-centric websites and interfaces using modern technologies
                such as HTML, CSS, JavaScript, React, and Tailwind CSS. With a
                strong eye for design and attention to detail, I strive to bridge
                the gap between creativity and functionality — crafting solutions
                that are visually appealing, accessible, and performance-driven.
                <br /><br />
                As a technical trainer, I’m equally passionate about mentoring
                aspiring developers and designers. I take pride in simplifying
                complex technical concepts, fostering curiosity, and inspiring
                learners to build with confidence and creativity. I believe in
                continuous learning and collaboration, always exploring new tools
                and design trends to stay ahead in the ever-evolving tech
                landscape. My goal is to deliver digital solutions that not only
                look great but also provide seamless, intuitive user experiences.
              </p>
              <div className="mt-8">
                <a href={RESUME} download>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                    <Button
                      text={"Download Resume"}
                      icon={<FaDownload size={16} color="black" />}
                    />
                  </motion.div>
                </a>
              </div>
            </div>
            <motion.div
              className="md:w-[30%] flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative group p-2 rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl overflow-hidden">
                <motion.img
                  src={PROFILE_IMG}
                  alt="profile_img"
                  className="w-48 md:w-60 h-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
