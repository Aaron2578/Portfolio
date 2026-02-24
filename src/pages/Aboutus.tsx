import { FaDownload } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PROFILE_IMG from "../assets/person12.png";
import Button from "../components/Button";
import RESUME from "../documents/Front-end Developer-Aaron.pdf";
function Aboutus() {
  return (
    <div>
      <Header />
      <div className="w-[90%] mt-10 m-auto text-white">
        <h2 className="text-3xl border-b-2 w-fit pacifico-regular">
          About us :
        </h2>
        <div className="flex flex-2 flex-col-reverse md:flex-row justify-between gap-5 items-center mb-10 md:mb-0">
          <div className="md:w-[80%]">
            <p className="montserrat mt-5 text-justify leading-loose">
              I’m Aaron, a dedicated Front-End Developer, UI/UX Designer, and
              Technical Trainer with a passion for creating impactful digital
              experiences. I specialize in designing and developing responsive,
              user-centric websites and interfaces using modern technologies
              such as HTML, CSS, JavaScript, React, and Tailwind CSS. With a
              strong eye for design and attention to detail, I strive to bridge
              the gap between creativity and functionality — crafting solutions
              that are visually appealing, accessible, and performance-driven.
              As a technical trainer, I’m equally passionate about mentoring
              aspiring developers and designers. I take pride in simplifying
              complex technical concepts, fostering curiosity, and inspiring
              learners to build with confidence and creativity. I believe in
              continuous learning and collaboration, always exploring new tools
              and design trends to stay ahead in the ever-evolving tech
              landscape. My goal is to deliver digital solutions that not only
              look great but also provide seamless, intuitive user experiences.
            </p>
            <a href={RESUME}>
              <Button
                text={"Download Resume"}
                icon={<FaDownload size={16} color="black" />}
              />
            </a>
          </div>
          <div className="md:w-[20%]">
            <img src={PROFILE_IMG} alt="profile_img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
