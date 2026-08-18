import { useState } from "react";
import { Plus, Minus, Briefcase, Award, Building, CheckCircle2 } from "lucide-react";
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
      to_date: "2026-05-31",
      status: "Completed",
      responsibilities: [
        "Conducting hands-on technical training sessions on software development and 3D design tools.",
        "Guiding students and professionals through practical real-world projects and technical problem solving.",
        "Developing structured curriculum materials, interactive coding exercises, and technical documentation."
      ]
    },
    {
      id: 2,
      company: "Rendercity Technologies",
      role: "UI/UX Design Intern",
      mode: "Virtual",
      from_date: "2024-10-01",
      to_date: "2025-03-27",
      status: "Completed",
      responsibilities: [
        "Designed high-fidelity wireframes, interactive prototypes, and user flows using Figma.",
        "Conducted user research and usability testing to refine web and mobile application interfaces.",
        "Collaborated with frontend developers to ensure pixel-perfect implementation and responsive design."
      ]
    },
    {
      id: 3,
      company: "CodeAlpha",
      role: "Frontend Development Intern",
      mode: "Virtual",
      from_date: "2024-05-01",
      to_date: "2024-06-01",
      status: "Completed",
      responsibilities: [
        "Built responsive, dynamic web user interfaces using HTML5, CSS3, JavaScript, and React.",
        "Implemented interactive UI components, sleek navigation systems, and CSS animations.",
        "Optimized website performance and ensured cross-browser compatibility across mobile and desktop devices."
      ]
    },
    {
      id: 4,
      company: "CodeAlpha",
      role: "Web Development Intern",
      mode: "Virtual",
      from_date: "2023-10-01",
      to_date: "2023-11-01",
      status: "Completed",
      responsibilities: [
        "Created web applications using modular component structure and clean coding practices.",
        "Integrated REST APIs, managed component state, and created custom responsive layouts.",
        "Collaborated with project mentors to review code and deliver scheduled features on time."
      ]
    },
    {
      id: 5,
      company: "Rinex Technologies",
      role: "Web Development Intern",
      mode: "Virtual",
      from_date: "2023-09-05",
      to_date: "2023-11-25",
      status: "Completed",
      responsibilities: [
        "Completed structured web development internship modules and practical hands-on projects.",
        "Developed responsive web applications adhering to modern web design and accessibility standards.",
        "Gained hands-on experience in frontend layout design, Git version control, and project deployment."
      ]
    },
  ];

  // Function to calculate experience duration
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

      <div className="flex-grow w-[92%] sm:w-[90%] max-w-4xl mx-auto py-8 sm:py-12">
        {/* Page Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-2 text-xs sm:text-base px-2">
            My career timeline, internships, and educational training roles.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Total Experience Card */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl flex flex-row justify-between items-center gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">Total Experience</h3>
              <p className="text-lg sm:text-2xl md:text-3xl font-extrabold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 truncate">
                {getTotalExperience()}
              </p>
            </div>
            <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 shrink-0">
              <Award className="text-blue-400 w-6 h-6 sm:w-9 sm:h-9" />
            </div>
          </div>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {experience.map((i, index) => {
            const isOpen = !!openItems[i.id];

            return (
              <motion.div
                key={i.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`border backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 shadow-lg cursor-pointer
                  ${i.status === "Current"
                    ? "bg-slate-900/60 border-green-500/30 hover:border-green-400/80 shadow-md shadow-green-500/5"
                    : "bg-slate-900/40 border-white/5 hover:border-blue-500/50"
                  }`}
                onClick={() => toggleOpen(i.id)}
              >
                {/* Collapsed Header */}
                <div className="flex items-center justify-between gap-3">
                  {/* Left Block: Icon + Role & Status + Company */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shrink-0 ${i.status === "Current" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"}`}>
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Role & Status */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-white montserrat leading-tight">
                          {i.role}
                        </h4>
                        {i.status === "Current" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-white/10">
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Company Name */}
                      <p className="text-slate-300 text-xs sm:text-sm mt-0.5 font-medium">
                        {i.company}
                      </p>
                    </div>
                  </div>

                  {/* Right Block: Expand Button */}
                  <button
                    className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors duration-200 shrink-0"
                    aria-label="Toggle details"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-slate-300 mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 text-xs sm:text-sm">
                        <p className="flex items-center gap-2.5 bg-slate-950/40 p-2.5 sm:p-3 rounded-xl border border-white/5">
                          <Building size={16} className="text-blue-400 shrink-0" />
                          <span><strong>Company:</strong> {i.company}</span>
                        </p>
                        <p className="flex items-center gap-2.5 bg-slate-950/40 p-2.5 sm:p-3 rounded-xl border border-white/5">
                          <Briefcase size={16} className="text-indigo-400 shrink-0" />
                          <span><strong>Role:</strong> {i.role}</span>
                        </p>
                        <p className="flex items-center gap-2.5 bg-slate-950/40 p-2.5 sm:p-3 rounded-xl border border-white/5">
                          <Award size={16} className="text-cyan-400 shrink-0" />
                          <span><strong>Experience Period:</strong> {calculateExperience(i.from_date, i.to_date)}</span>
                        </p>

                        {/* Key Responsibilities */}
                        <div className="bg-slate-950/40 p-3.5 sm:p-4 rounded-xl border border-white/5 mt-1">
                          <h5 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Key Responsibilities
                          </h5>
                          <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                            {i.responsibilities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-400 font-bold text-base leading-none">&bull;</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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