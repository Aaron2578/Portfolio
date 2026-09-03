import { useState, useEffect, useRef } from "react";
import { feedbackData } from "../data/feedBackData";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SpotlightCard from "./ReactBits/SpotlightCard";
import CountUp from "./ReactBits/CountUp";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  const studentsMentored = feedbackData.filter(
    (item) => item.useForDashboard === true
  ).length;

  const totalRating = feedbackData.reduce((acc, item) => {
    return acc + Number(item.rating);
  }, 0);

  const avgNumber = feedbackData.length > 0 ? totalRating / feedbackData.length : 0;
  const hasDecimal = avgNumber % 1 !== 0;
  const avg = hasDecimal ? avgNumber.toFixed(1) : avgNumber.toFixed(0);

  const orientationConducted = 1;
  const technicalInterview = 1;
  const totSessions = 1;

  const modalData = {
    students: {
      title: "Students Mentored & Trained",
      subtitle: "Hands-on Technical Training & Career Guidance",
      image: studentsMentoredImg,
      metricValue: `${studentsMentored}+`,
      metricLabel: "Active Learners Guided",
      tagText: "Academic Impact",
      borderClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/10",
      iconColor: "text-emerald-400",
      bullets: [
        { icon: Users, label: "Program Scope", value: "Trained and mentored 17+ college students in modern web development frameworks and production best practices." },
        { icon: BookOpen, label: "Core Curriculum", value: "In-depth modules covering React.js, Tailwind CSS, TypeScript, REST APIs, Git workflows, and collaborative project architecture." },
        { icon: Calendar, label: "Interactive Format", value: "Daily live coding demonstrations, interactive sprint reviews, and personalized code evaluation sessions." },
        { icon: Award, label: "Measurable Impact", value: "100% of participants built and deployed capstone portfolio projects with modern CI/CD pipelines." }
      ]
    },
    rating: {
      title: "Student Satisfaction & Feedback",
      subtitle: "Comprehensive Learner Reviews & Evaluation",
      image: averageRatingImg,
      metricValue: `${avg} / 5.0 ★`,
      metricLabel: "Average Feedback Score",
      tagText: "Quality Excellence",
      borderClass: "border-purple-500/20 text-purple-400 bg-purple-500/10",
      iconColor: "text-purple-400",
      bullets: [
        { icon: Award, label: "Unanimous Excellence", value: `Maintained a pristine ${avg} out of 5.0 rating across all anonymous student evaluations and surveys.` },
        { icon: BookOpen, label: "Teaching Clarity", value: "Consistently recognized for breaking down complex architectural abstractions into intuitive, actionable milestones." },
        { icon: Users, label: "Student Engagement", value: "High engagement with active doubt-clearing channels and 1-on-1 personalized debugging assistance." },
        { icon: Award, label: "Recommendation Rate", value: "98%+ of surveyed students explicitly recommended the training program to prospective cohort peers." }
      ]
    },
    orientation: {
      title: "Academic Induction & Orientation Program",
      subtitle: "Full-Stack Development Roadmap & Industry Readiness",
      image: orientationImg,
      metricValue: `${orientationConducted} Cohort`,
      metricLabel: "Institution-wide Keynote",
      tagText: "Industry Induction",
      borderClass: "border-rose-500/20 text-rose-400 bg-rose-500/10",
      iconColor: "text-rose-400",
      bullets: [
        { icon: Calendar, label: "Program Purpose", value: "Conducted an intensive launchpad session outlining the modern software engineering landscape and career trajectories." },
        { icon: Users, label: "Audience Reach", value: "Addressed incoming batch students, setting clear expectations for technical rigor and open-source contributions." },
        { icon: BookOpen, label: "Roadmap Shared", value: "Outlined step-by-step masteries for JavaScript engines, frontend component architecture, and server-side paradigms." },
        { icon: Award, label: "Key Outcome", value: "Students kickstarted their GitHub journey and formed study circles for peer-to-peer programming." }
      ]
    },
    interview: {
      title: "Technical Mock Interviews & Assessments",
      subtitle: "Industry-standard Readiness & Code Evaluation",
      image: technicalInterviewImg,
      metricValue: `${technicalInterview} Edition`,
      metricLabel: "Simulated Hiring Round",
      tagText: "Career Readiness",
      borderClass: "border-sky-500/20 text-sky-400 bg-sky-500/10",
      iconColor: "text-sky-400",
      bullets: [
        { icon: BookOpen, label: "Structure", value: "Designed and executed real-world technical assessment rounds modeled after top-tier software company interviews." },
        { icon: Users, label: "Format", value: "Live whiteboard problem-solving, algorithmic reasoning challenges, and deep-dive resume project defensibility." },
        { icon: Calendar, label: "Constructive Feedback", value: "Delivered granular rubric evaluations covering code modularity, edge case handling, and communication clarity." },
        { icon: Award, label: "Key Outcome", value: "Significantly reduced student interview anxiety and improved problem articulation under time constraints." }
      ]
    },
    tot: {
      title: "Training of Trainers (TOT) Workshop",
      subtitle: "AI, Predictive Modeling & Advanced Excel for Faculty",
      image: totSessionImg,
      metricValue: `${totSessions} Session`,
      metricLabel: "Faculty Empowerment Program",
      tagText: "Executive Training",
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
      ref={containerRef}
      className="py-10 sm:pt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
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
              <CountUp
                to={studentsMentored}
                suffix="+"
                duration={1.8}
                start={isContainerInView}
              />
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
              <CountUp
                to={avgNumber}
                decimals={hasDecimal ? 1 : 0}
                duration={1.8}
                start={isContainerInView}
              />{" "}
              <span className="text-yellow-400">★</span>
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
              <CountUp
                to={orientationConducted}
                duration={1.8}
                start={isContainerInView}
              />
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
              <CountUp
                to={technicalInterview}
                duration={1.8}
                start={isContainerInView}
              />
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
              <CountUp
                to={totSessions}
                duration={1.8}
                start={isContainerInView}
              />
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header & Hero Image */}
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                <img
                  src={modalData[activeModal].image}
                  alt={modalData[activeModal].title}
                  className="w-full h-full object-cover object-center brightness-95 filter hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md ${modalData[activeModal].borderClass}`}>
                    {modalData[activeModal].tagText}
                  </span>
                </div>

                {/* Bottom Header Text */}
                <div className="absolute bottom-3 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {modalData[activeModal].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 drop-shadow">
                    {modalData[activeModal].subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Key Metric Banner */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/60 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Highlight Metric</span>
                    <h4 className="text-sm font-semibold text-slate-200">{modalData[activeModal].metricLabel}</h4>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold ${modalData[activeModal].iconColor}`}>
                    {modalData[activeModal].metricValue}
                  </div>
                </div>

                {/* Detailed Highlights */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Overview & Key Takeaways
                  </h4>
                  <div className="grid gap-3">
                    {modalData[activeModal].bullets.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/30 border border-white/5 hover:border-white/10 transition-colors">
                          <div className={`p-2 rounded-lg bg-slate-800 flex-shrink-0 mt-0.5 ${modalData[activeModal].iconColor}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-300">{item.label}</p>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-0.5">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-950/60 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 text-sm font-medium rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;