import { useState } from "react";
import { Plus, Minus, Briefcase, Award, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Experience() {
  const experience = [
    {
      id: 1,
      company: "SA 3D SOLUTIONS",
      role: "Technical Trainer",
      mode: "Onsite",
      from_date: "2025-11-03",
      to_date: undefined,
      status: "Current",
    },
    {
      id: 2,
      company: "Rendercity Technologies",
      role: "UI/UX Design Intern",
      mode: "Virtual",
      from_date: "2024-10-01",
      to_date: "2025-03-27",
      status: "Completed",
    },
    {
      id: 3,
      company: "CodeAlpha",
      role: "Frontend Development Intern",
      mode: "Virtual",
      from_date: "2024-05-01",
      to_date: "2024-06-01",
      status: "Completed",
    },
    {
      id: 4,
      company: "CodeAlpha",
      role: "Web Development Intern",
      mode: "Virtual",
      from_date: "2023-10-01",
      to_date: "2023-11-01",
      status: "Completed",
    },
    {
      id: 5,
      company: "Rinex Technologies",
      role: "Web Development Intern",
      mode: "Virtual",
      from_date: "2023-09-05",
      to_date: "2023-11-25",
      status: "Completed",
    },
  ];

  // Function to calculate experience
  const calculateExperience = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return [
      years ? `${years} year${years > 1 ? "s" : ""}` : "",
      months ? `${months} month${months > 1 ? "s" : ""}` : "",
      days ? `${days} day${days > 1 ? "s" : ""}` : "",
    ]
      .filter(Boolean)
      .join(" ") || "0 days";
  };

  const getTotalExperience = () => {
    let totalDays = 0;

    experience.forEach((exp) => {
      const start = new Date(exp.from_date);
      const end = exp.to_date ? new Date(exp.to_date) : new Date();

      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      totalDays += diffDays;
    });

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = (totalDays % 365) % 30;

    return `${years} Year${years !== 1 ? "s" : ""} ${months} Month${months !== 1 ? "s" : ""
      } ${days} Day${days !== 1 ? "s" : ""}`;
  };

  // Track open state for each card
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const toggleOpen = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <div className="flex-grow w-[90%] max-w-4xl mx-auto py-12">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            My career timeline, internships, and educational training roles.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Total Experience card */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 backdrop-blur-md text-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Total Experience</h3>
              <p className="text-2xl md:text-3xl font-extrabold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {getTotalExperience()}
              </p>
            </div>
            <Award className="text-blue-500 w-10 h-10" />
          </div>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-6">
          {experience.map((i, index) => {
            const fromYear = new Date(i.from_date).getFullYear();
            const toYear = i.to_date ? new Date(i.to_date).getFullYear() : "Present";
            const isOpen = !!openItems[i.id];

            return (
              <motion.div
                key={i.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`border backdrop-blur-md rounded-3xl p-6 transition-all duration-300 shadow-lg cursor-pointer
                  ${i.status === "Current"
                    ? "bg-slate-900/50 border-green-500/30 hover:border-green-400/80 shadow-md shadow-green-500/5"
                    : "bg-slate-900/40 border-white/5 hover:border-blue-500/50"
                  }`}
                onClick={() => toggleOpen(i.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${i.status === "Current" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"}`}>
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white montserrat">
                        {i.role}
                      </h4>
                      <p className="text-slate-400 text-sm mt-0.5">
                        {i.company} &bull; <span className={i.status === "Current" ? "text-green-400 font-semibold" : "text-slate-400"}>{i.status}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block text-slate-400 text-sm bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                      {fromYear} - {toYear}
                    </span>
                    <button className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors duration-200">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-slate-300 mt-5 pt-5 border-t border-white/5 flex flex-col gap-3 text-[15px]">
                        <p className="flex items-center gap-2">
                          <Building size={16} className="text-gray-500" />
                          <strong>Company:</strong> {i.company}
                        </p>
                        <p className="flex items-center gap-2">
                          <Briefcase size={16} className="text-gray-500" />
                          <strong>Role:</strong> {i.role}
                        </p>
                        <p className="flex items-center gap-2">
                          <Award size={16} className="text-gray-500" />
                          <strong>Experience Period:</strong> {calculateExperience(i.from_date, i.to_date)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Experience;