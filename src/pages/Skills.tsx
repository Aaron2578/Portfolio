import Footer from "../components/Footer";
import Header from "../components/Header";
import { Monitor, UserCheck, PenTool, Users, Activity } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaJava,
  FaFileExcel,
} from "react-icons/fa"; // FontAwesome
import {
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTypescript,
  SiPython,
  SiDjango,
  SiSpring,
  SiMongodb,
  SiTableau,
  // SiMicrosoftexcel,
} from "react-icons/si"; // SimpleIcons
import { DiPhp, DiMysql } from "react-icons/di";
import { MdInsertChart } from "react-icons/md"; // Material Design Icons
import { FiPenTool } from "react-icons/fi"; // Feather icons


function Skills() {
  // Front-end skills with proper icons
  const frontEndLanguages = [
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={24} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
  ];
  const frontEndFrameWorks = [
    { name: "Bootstrap", icon: <FaBootstrap size={24} color="#7952B3" /> },
    { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
  ];
  const uiuxSkills = [
    { name: "Wireframing", icon: <PenTool size={24} /> },
    { name: "Prototyping", icon: <Monitor size={24} /> },
    { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },
  ];
  const backEndLanguages = [
    { name: "Php", icon: <DiPhp size={24} color="#777BB4" /> },
    { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={24} color="#E76F00" /> },
  ];
  const backEndFrameWorks = [
    { name: "Django", icon: <SiDjango size={24} color="#092E20" /> },
    { name: "Spring Boot", icon: <SiSpring size={24} color="#6DB33F" /> },
  ];

  const dataBase = [
    { name: "MySql", icon: <DiMysql size={24} color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
  ];
  const dataAnalytics = [
    { name: "Microsoft Excel", icon: <FaFileExcel size={22} color="#217346" /> },
    { name: "MySql", icon: <DiMysql size={24} color="#4479A1" /> },
    { name: "Power BI", icon: <MdInsertChart size={24} color="#4479A1" /> },
    { name: "Tableau", icon: <SiTableau size={24} color="#47A248" /> },
    { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
  ];

  const design = [
    { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },

    { name: "Canva", icon: <FiPenTool size={24} color="#00C4CC" /> },

    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop size={24} color="#31A8FF" />,
    },
    {
      name: "Adobe illustrator",
      icon: <SiAdobeillustrator size={24} color="#FF9A00" />,
    },
  ];

  const professionalSkills = [
    { name: "Technical Training", icon: <Users size={24} /> },
    { name: "Mentoring", icon: <UserCheck size={24} /> },
    { name: "Problem Solving", icon: <Activity size={24} /> },
  ];

  // Function to render skill items
  const renderSkills = (skills: { name: string; icon: any }[]) =>
    skills.map((skill) => (
      <div
        key={skill.name}
        className="flex items-center space-x-2 p-2 bg-gray-200 rounded-lg"
      >
        {skill.icon}
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <div>
      <Header />
      <div className="w-[90%] m-auto p-3 md:p-8 space-y-6 md:space-y-10 my-7 md:my-5">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Front-end Development
          </h2>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Languages :{" "}
            </span>
            {renderSkills(frontEndLanguages)}
          </div>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Frameworks :{" "}
            </span>
            {renderSkills(frontEndFrameWorks)}
          </div>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Ui/Ux Skills :{" "}
            </span>
            {renderSkills(uiuxSkills)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Back-end Development
          </h2>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Languages :{" "}
            </span>
            {renderSkills(backEndLanguages)}
          </div>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Frameworks :{" "}
            </span>
            {renderSkills(backEndFrameWorks)}
          </div>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              DataBase :{" "}
            </span>
            {renderSkills(dataBase)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Data Analytics
          </h2>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Tools & Software :{" "}
            </span>
            {renderSkills(dataAnalytics)}
          </div>
        </div> 

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Design & Creativity
          </h2>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Tools :{" "}
            </span>
            {renderSkills(design)}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Professional Skills
          </h2>
          <div className="flex flex-wrap gap-3 my-10 md:my-5">
            <span className="text-white pacifico-regular md:ml-15">
              Technical :{" "}
            </span>
            {renderSkills(professionalSkills)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
