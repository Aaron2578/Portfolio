import { useEffect } from "react";
import PERSON from "../assets/person.png";
import SocialLinks from "./SocialLinks";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".auto-type1", {
      strings: ["Frontend Developer", "Designer", "Technical Trainer"],
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
    <div className="flex flex-col-reverse w-[90%] mx-auto md:flex-row justify-between items-center h-fit">
      <div className="w-[90%] m-auto md:w-[80%] flex flex-col justify-center gap-3 md:gap-10">
        <div className="gap-2 text-white">
          <h6 className="text-2xl dancing-script">Hi, I am</h6>
          <h2 className="text-7xl tagesschrift-regular">Aaron</h2>
          <h3 className="text-xl md:text-3xl font-bold pacifico-regular mt-3">
            <span className="auto-type1 text-violet-200 hover:text-cyan-300"></span>
          </h3>

          <NavLink to={"/contactus"}>
            <Button text={"Hire Me"} />
          </NavLink>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
      <div>
        <img src={PERSON} alt="person image" className="w-30 md:w-52 " />
      </div>
    </div>
  );
}

export default Banner;
