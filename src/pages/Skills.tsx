import Footer from "../components/Footer";
import Header from "../components/Header";
import { Monitor, UserCheck, PenTool, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaJava,
  FaFileExcel,
  FaNodeJs,
  FaFileWord,
  FaFilePowerpoint,
  FaGitAlt,
  FaGithub,
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
  SiExpress
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
    { name: "Wireframing", icon: <PenTool size={24} className="text-pink-400" /> },
    { name: "Prototyping", icon: <Monitor size={24} className="text-blue-400" /> },
    { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },
  ];
  const backEndLanguages = [
    { name: "Php", icon: <DiPhp size={24} color="#777BB4" /> },
    { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={24} color="#E76F00" /> },
    { name: "Node.js", icon: <FaNodeJs size={24} color="#339933" /> }
  ];
  const backEndFrameWorks = [
    { name: "Django", icon: <SiDjango size={24} color="#092E20" /> },
    { name: "Spring Boot", icon: <SiSpring size={24} color="#6DB33F" /> },
    { name: "Express", icon: <SiExpress size={24} color="#ffffff" /> }
  ];
  const versionControl = [
    {
      name: "Git",
      icon: <FaGitAlt size={24} className="text-orange-500" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} className="text-white" />,
    },
  ];
  const dataBase = [
    { name: "MySql", icon: <DiMysql size={24} color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
  ];
  const dataAnalytics = [
    { name: "Microsoft Excel", icon: <FaFileExcel size={22} color="#217346" /> },
    { name: "MySql", icon: <DiMysql size={24} color="#4479A1" /> },
    { name: "Power BI", icon: <MdInsertChart size={24} color="#f2c811" /> },
    { name: "Tableau", icon: <SiTableau size={24} color="#e97627" /> },
    { name: "Python", icon: <SiPython size={24} color="#3776AB" /> },
  ];
  const officeTools = [
    { name: "Microsoft Word", icon: <FaFileWord size={22} color="#2B579A" /> },
    { name: "Microsoft PowerPoint", icon: <FaFilePowerpoint size={22} color="#D24726" /> },
    { name: "Microsoft Excel", icon: <FaFileExcel size={22} color="#217346" /> },
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
    { name: "Technical Training", icon: <Users size={24} className="text-purple-400" /> },
    { name: "Mentoring", icon: <UserCheck size={24} className="text-green-400" /> },
    { name: "Problem Solving", icon: <Activity size={24} className="text-rose-400" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const renderSkills = (skills: { name: string; icon: React.ReactNode }[]) =>
    skills.map((skill) => (
      <motion.div
        key={skill.name}
        variants={itemVariants}
        className="flex items-center gap-3 p-3 bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:bg-slate-900/60 shadow-md cursor-default"
      >
        {skill.icon}
        <span className="font-semibold text-sm">{skill.name}</span>
      </motion.div>
    ));

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />
      <div className="flex-grow w-[90%] max-w-5xl mx-auto py-12">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            A listing of development stacks, database systems, designs tools, and analytical software I use.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* Front-end Category */}
          <motion.div className="bg-slate-900/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-3 text-white montserrat uppercase tracking-wider text-[15px]">
              Front-end Development
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Languages</span>
                <div className="flex flex-wrap gap-3">{renderSkills(frontEndLanguages)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Frameworks</span>
                <div className="flex flex-wrap gap-3">{renderSkills(frontEndFrameWorks)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">UI/UX Skills</span>
                <div className="flex flex-wrap gap-3">{renderSkills(uiuxSkills)}</div>
              </div>
            </div>
          </motion.div>

          {/* Back-end Category */}
          <motion.div className="bg-slate-900/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold border-l-4 border-emerald-500 pl-3 text-white montserrat uppercase tracking-wider text-[15px]">
              Back-end Development
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Languages</span>
                <div className="flex flex-wrap gap-3">{renderSkills(backEndLanguages)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Frameworks</span>
                <div className="flex flex-wrap gap-3">{renderSkills(backEndFrameWorks)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Databases</span>
                <div className="flex flex-wrap gap-3">{renderSkills(dataBase)}</div>
              </div>
            </div>
          </motion.div>

          {/* Data Analytics & Version Control */}
          <motion.div className="bg-slate-900/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold border-l-4 border-indigo-500 pl-3 text-white montserrat uppercase tracking-wider text-[15px]">
              Data Analytics & Versioning
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Analytics Tools</span>
                <div className="flex flex-wrap gap-3">{renderSkills(dataAnalytics)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Version Control</span>
                <div className="flex flex-wrap gap-3">{renderSkills(versionControl)}</div>
              </div>
            </div>
          </motion.div>

          {/* Creative Tools & Professional Skills */}
          <motion.div className="bg-slate-900/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold border-l-4 border-pink-500 pl-3 text-white montserrat uppercase tracking-wider text-[15px]">
              Design & Collaboration
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Creative Tools</span>
                <div className="flex flex-wrap gap-3">{renderSkills(design)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Productivity</span>
                <div className="flex flex-wrap gap-3">{renderSkills(officeTools)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Professional</span>
                <div className="flex flex-wrap gap-3">{renderSkills(professionalSkills)}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
