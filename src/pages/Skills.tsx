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
} from "react-icons/fa"; // FontAwesome
import {
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTypescript,
  SiPython,
} from "react-icons/si"; // SimpleIcons
import { DiPhp, DiMysql } from "react-icons/di";

function Skills() {
  // Front-end skills with proper icons
  const frontEndSkills = [
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={24} color="#F7DF1E" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={24} color="#7952B3" /> },
    { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
    { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
  ];
  const backEndSkills = [
    { name: "Php", icon: <DiPhp size={24} color="#777BB4" /> },
  ];
  const dataBaseSkills = [
    { name: "MySql", icon: <DiMysql size={24} color="#4479A1" /> },
  ];
  const programmingSkills = [
    { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={24} color="#E76F00" /> },
  ];

  const uiuxSkills = [
    { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop size={24} color="#31A8FF" />,
    },
    {
      name: "Adobe illustrator",
      icon: <SiAdobeillustrator size={24} color="#FF9A00" />,
    },
    { name: "Wireframing", icon: <PenTool size={24} /> },
    { name: "Prototyping", icon: <Monitor size={24} /> },
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
          <div className="flex flex-wrap gap-3">
            {renderSkills(frontEndSkills)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Back-end Development
          </h2>
          <div className="flex flex-wrap gap-3">
            {renderSkills(backEndSkills)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            DataBase
          </h2>
          <div className="flex flex-wrap gap-3">
            {renderSkills(dataBaseSkills)}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Programming Languages
          </h2>
          <div className="flex flex-wrap gap-3">
            {renderSkills(programmingSkills)}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            UI/UX Design
          </h2>
          <div className="flex flex-wrap gap-3">{renderSkills(uiuxSkills)}</div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white tagesschrift-regular">
            Professional Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {renderSkills(professionalSkills)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
