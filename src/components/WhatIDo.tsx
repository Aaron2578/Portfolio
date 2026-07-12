import { motion } from "framer-motion";
import { BookOpen, Code2, Palette, Target, Rocket } from "lucide-react";
import { SiPython } from "react-icons/si";

function WhatIDo() {
  const services = [
    {
      id: 1,
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      bg: "bg-purple-500/10",
      title: "Technical Training & Mentorship",
      description: "Teaching complex concepts in a simple and practical way.",
    },
    {
      id: 2,
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      bg: "bg-blue-500/10",
      title: "Front-End Development",
      description: "HTML, CSS, JavaScript, React & modern libraries.",
    },
    {
      id: 3,
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      bg: "bg-pink-500/10",
      title: "UI/UX Design & Prototyping",
      description: "Designing intuitive user experiences and interfaces.",
    },
    {
      id: 4,
      icon: <SiPython className="w-6 h-6 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      title: "Programming",
      description: "Core Programming (Python & Java), OOPs, Problem Solving & real-world projects.",
    },
    {
      id: 5,
      icon: <Target className="w-6 h-6 text-amber-400" />,
      bg: "bg-amber-500/10",
      title: "Interview Preparation & Guidance",
      description: "Helping students crack interviews with confidence.",
    },
    {
      id: 6,
      icon: <Rocket className="w-6 h-6 text-sky-400" />,
      bg: "bg-sky-500/10",
      title: "Project-Based Learning",
      description: "Guiding students to build real-world projects.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="py-20 bg-slate-950/30 text-white relative z-10 border-t border-white/5 backdrop-blur-sm">
      <div className="w-[90%] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white montserrat inline-block relative">
            What I Do
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:border-blue-500/30"
            >
              {/* Icon Bubble */}
              <div className={`w-12 h-12 rounded-full ${service.bg} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-100 mb-3 montserrat">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIDo;
