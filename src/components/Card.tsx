import { feedbackData } from "../data/feedBackData";
import { motion } from "framer-motion";
import SpotlightCard from "./ReactBits/SpotlightCard";

function Card() {
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-0">

        {/* Students Mentored */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
        >
          <SpotlightCard className="bg-slate-900 border border-white/10 text-white px-3 py-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full" spotlightColor="rgba(255, 255, 255, 0.08)">
            <p className="text-4xl font-bold text-blue-500">
              {technicalInterview}
            </p>
            <h2 className="text-md font-semibold pt-2 text-slate-300">📝 Technical Interview</h2>
          </SpotlightCard>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Card;