import { useEffect } from "react";
import { motion } from "framer-motion";
import BlurText from "./ReactBits/BlurText";
import PERSON from "../assets/person.png";
import SocialLinks from "./SocialLinks";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".auto-type1", {
      strings: ["Full Stack Developer", "Designer", "Technical Trainer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    // Cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col-reverse w-[90%] mx-auto md:flex-row justify-between items-center h-fit overflow-hidden">
      <motion.div
        className="w-[90%] m-auto md:w-[80%] flex flex-col justify-center gap-3 md:gap-5 md:mt-30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="gap-2 text-white">
          <h6 className="text-2xl dancing-script">Hi, I am</h6>
          <BlurText text="Aaron" className="text-5xl tagesschrift-regular" animateBy="letters" delay={100} />
          <h3 className="text-xl md:text-3xl font-bold pacifico-regular mt-3">
            <span className="auto-type1 text-violet-200 hover:text-cyan-300"></span>
          </h3>
          <div className="py-5">
            <SocialLinks />
          </div>
          <NavLink to={"/contactus"}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button text={"Hire Me"} />
            </motion.div>
          </NavLink>
        </div>

        <div>
          <Card />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.img
          src={PERSON}
          alt="person image"
          className="w-30 md:w-50 drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

export default Banner;
