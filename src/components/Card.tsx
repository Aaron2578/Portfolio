import { useState, useEffect } from "react";
import { feedbackData } from "../data/feedBackData";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./ReactBits/SpotlightCard";
import { X, Calendar, BookOpen, Users, Award } from "lucide-react";

// Asset Imports
import studentsMentoredImg from "../assets/students_mentored.png";
import averageRatingImg from "../assets/average_rating.png";
import orientationImg from "../assets/orientation.png";
import technicalInterviewImg from "../assets/technical_interview.png";
import totSessionImg from "../assets/tot_session.png";

type ModalType = "students" | "rating" | "orientation" | "interview" | "tot" | null;

function Card() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const dashboardData = feedbackData.filter(f => f.useForDashboard);

  const studentsMentored = dashboardData.length;

  const avg =
    dashboardData.length > 0
      ? dashboardData.reduce((sum, f) => sum + f.rating, 0) /
      dashboardData.length
      : 0;

  const avgRating = Number.isInteger(avg) ? avg.toString() : avg.toFixed(1);

  const orientationConducted = 1;
  const technicalInterview = 1;
  const totSessions = 1;

  // Configuration for each stats card modal detail
  const modalData = {
    students: {
      tag: "🎓 Mentorship Impact",
      title: "Students Mentored",
      subtitle: "Empowering next-generation developers through direct mentorship.",
      image: studentsMentoredImg,
      description: `I have had the privilege of mentoring and training ${studentsMentored}+ students and professionals in full-stack web technologies, design systems, and core programming languages. My focus is on providing high-quality, practical learning experiences that prepare individuals for careers in software development and UI/UX design.`,
      colorClass: "from-green-400 to-emerald-300",
      borderClass: "border-green-500/20 text-green-400 bg-green-500/10",
      iconColor: "text-green-400",
      bullets: [
        { icon: Users, label: "Total Reach", value: "Over 50+ students mentored across diverse coding Bootcamps." },
        { icon: BookOpen, label: "Core Stacks", value: "HTML, CSS, JavaScript, React, Tailwind CSS, Python, and Java ecosystems." },
        { icon: Calendar, label: "Practical Projects", value: "Guided students in building fully responsive web applications and interactive prototypes." },
        { icon: Award, label: "Job Placement", value: "Helped learners build industry-relevant portfolios and prepare for interviews." }
      ]
    },
    rating: {
      tag: "⭐ Excellence & Feedback",
      title: "Average Rating",
      subtitle: "Real verified ratings and testimonials from trainee reviews.",
      image: averageRatingImg,
      description: `Maintaining a strong average rating of ${avgRating} / 5.0. This score represents verified feedback and high satisfaction ratings from students and professionals attending my classes, orientation programs, and coding bootcamps.`,
      colorClass: "from-purple-400 to-fuchsia-300",
      borderClass: "border-purple-500/20 text-purple-400 bg-purple-500/10",
      iconColor: "text-purple-400",
      bullets: [
        { icon: Users, label: "Verified Reviews", value: "Drawn from course feedback surveys and training evaluations." },
        { icon: BookOpen, label: "Key Strengths", value: "Clear conceptual explanations, real-world examples, and patience in answering queries." },
        { icon: Calendar, label: "Learning Pace", value: "Flexible teaching speed customized to both beginners and advanced students." },
        { icon: Award, label: "Professionalism", value: "Consistent 5-star ratings across Python, Java, Power BI, and design courses." }
      ]
    },
    orientation: {
      tag: "🎤 Orientation Programs",
      title: "Orientation Sessions",
      subtitle: "Conducting technical workshops and career alignment programs.",
      image: orientationImg,
      description: "Conducted technical orientation programs aimed at aligning beginners with software engineering roadmaps, UI/UX opportunities, and effective learning methodologies. These workshops help clear academic confusion and design optimal paths for tech domain success.",
      colorClass: "from-red-400 to-rose-300",
      borderClass: "border-red-500/20 text-red-400 bg-red-500/10",
      iconColor: "text-red-400",
      bullets: [
        { icon: Users, label: "Reach", value: "Oriented batch groups on transition strategies from college to professional environments." },
        { icon: BookOpen, label: "Content", value: "Industry expectations, resume building basics, coding roadmap structures, and tool walkthroughs." },
        { icon: Calendar, label: "Format", value: "Interactive Q&A rounds, live product breakdowns, and portfolio showcases." },
        { icon: Award, label: "Goal", value: "Inspire students to learn by building, removing entry barriers to software design." }
      ]
    },
    interview: {
      tag: "📝 Technical Interviewing",
      title: "Mock Technical Interviews",
      subtitle: "Helping candidates build confidence and clear real interviews.",
      image: technicalInterviewImg,
      description: "Conducted mock technical interviews and conceptual evaluations for aspiring developers. By simulating real-world tech interview rounds, I help students identify their weak spots, improve their problem-solving communication, and structure their coding answers.",
      colorClass: "from-blue-400 to-sky-300",
      borderClass: "border-blue-500/20 text-blue-400 bg-blue-500/10",
      iconColor: "text-blue-400",
      bullets: [
        { icon: Users, label: "Assessment", value: "Detailed feedback reports on coding syntax, structure, complexity analysis, and soft skills." },
        { icon: BookOpen, label: "Domains Covered", value: "Data structures, frontend algorithms, object-oriented concepts, and CSS layout challenges." },
        { icon: Calendar, label: "Simulations", value: "Time-bound coding sprints followed by feedback and correction." },
        { icon: Award, label: "Result", value: "Significant improvement in candidate confidence and technical communication." }
      ]
    },
    tot: {
      tag: "🎓 Trainer Training",
      title: "Training of Trainers (TOT) Session",
      subtitle: "Aligning educators and financial experts with AI-driven Excel frameworks.",
      image: totSessionImg,
      description: `As a Technical Trainer at SA 3D SOLUTIONS, I conducted a high-impact Training of Trainers (TOT) program focusing on integrating AI tools within Microsoft Excel for advanced financial analysis. The training was designed to empower instructors, developers, and finance professionals with modern AI-assisted analytical workflows.`,
      colorClass: "from-orange-400 to-amber-300",
      borderClass: "border-orange-500/20 text-orange-400 bg-orange-500/10",
      iconColor: "text-orange-400",
      bullets: [
        { icon: Users, label: "Audience", value: "Academic instructors, senior mentors, and corporate training coordinators." },
        { icon: BookOpen, label: "Topics Handled", value: "AI formulas, automated financial modeling, ChatGPT integration in Excel, dynamic dashboards, and predictive forecasting." },
        { icon: Calendar, label: "Session Format", value: "Hands-on financial modeling workshops, interactive AI prompt design, and real-time spreadsheet automation labs." },
        { icon: Award, label: "Key Outcome", value: "Empowered trainers to instruct students on building automated financial forecasting models and AI-driven valuation templates." }
      ]
    }
  };

  return (
    <motion.div
      className="py-10 sm:pt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-0">

        {/* Students Mentored */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="cursor-pointer"
          onClick={() => setActiveModal("students")}
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-green-500">
              {studentsMentored}+
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">🎓 Students Mentored</h2>
          </SpotlightCard>
        </motion.div>

        {/* Average Rating */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="cursor-pointer"
          onClick={() => setActiveModal("rating")}
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-purple-500">
              {avgRating} <span className="text-yellow-400">★</span>
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">⭐ Average Rating</h2>
          </SpotlightCard>
        </motion.div>

        {/* Orientation program */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="cursor-pointer"
          onClick={() => setActiveModal("orientation")}
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-red-500">
              {orientationConducted}
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">🎤 Orientation Program</h2>
          </SpotlightCard>
        </motion.div>

        {/* Technical Interview */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="cursor-pointer"
          onClick={() => setActiveModal("interview")}
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-blue-500">
              {technicalInterview}
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">📝 Technical Interview</h2>
          </SpotlightCard>
        </motion.div>

        {/* TOT Sessions */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="cursor-pointer"
          onClick={() => setActiveModal("tot")}
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-orange-500">
              {totSessions}
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">👥 TOT Sessions</h2>
          </SpotlightCard>
        </motion.div>

      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-left flex flex-col max-h-[85vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-slate-950/50 hover:bg-slate-950 transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto p-6 sm:p-8 flex flex-col gap-6">
                {/* Header */}
                <div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-2 border ${modalData[activeModal].borderClass}`}>
                    {modalData[activeModal].tag}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold text-white montserrat bg-gradient-to-r ${modalData[activeModal].colorClass} bg-clip-text text-transparent`}>
                    {modalData[activeModal].title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">
                    {modalData[activeModal].subtitle}
                  </p>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-slate-950 shadow-inner group">
                  <img
                    src={modalData[activeModal].image}
                    alt={modalData[activeModal].title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-medium">
                      📸 Visual overview of {modalData[activeModal].title}
                    </p>
                  </div>
                </div>

                {/* Details / Description */}
                <div className="flex flex-col gap-4 text-slate-300 text-sm leading-relaxed font-sans">
                  <p>
                    {modalData[activeModal].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {modalData[activeModal].bullets.map((bullet, idx) => {
                      const Icon = bullet.icon;
                      return (
                        <div key={idx} className="flex gap-3 items-start bg-slate-950/55 p-3.5 rounded-xl border border-white/5 animate-fadeIn">
                          <Icon className={`${modalData[activeModal].iconColor} flex-shrink-0 mt-0.5`} size={18} />
                          <div>
                            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">{bullet.label}</h4>
                            <p className="text-slate-400 text-xs mt-0.5">{bullet.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;