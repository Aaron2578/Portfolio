import React from "react";
import type { Feedback } from "../types/Feedback";
import { formatDistanceToNow } from "date-fns";
import { Star, Quote } from "lucide-react";

interface Props {
  feedback: Feedback;
}

const getCourseBadgeStyles = (course: string) => {
  const c = course.toLowerCase();
  if (c.includes("python")) {
    return {
      bg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      glow: "hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      avatar: "from-blue-600 to-cyan-500"
    };
  }
  if (c.includes("java")) {
    return {
      bg: "bg-red-500/10 border-red-500/20 text-red-400",
      glow: "hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]",
      avatar: "from-red-600 to-orange-500"
    };
  }
  if (c.includes("data") || c.includes("power bi") || c.includes("excel")) {
    return {
      bg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
      glow: "hover:border-yellow-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]",
      avatar: "from-yellow-500 to-amber-500"
    };
  }
  if (c.includes("figma") || c.includes("design") || c.includes("photoshop") || c.includes("illustrator")) {
    return {
      bg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      glow: "hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
      avatar: "from-purple-600 to-pink-500"
    };
  }
  // Default fallback
  return {
    bg: "bg-slate-500/10 border-slate-500/20 text-slate-300",
    glow: "hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
    avatar: "from-indigo-600 to-purple-500"
  };
};

const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  const formattedTime = feedback.timestamp
    ? new Date(feedback.timestamp).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })
    : null;

  const relativeTime = feedback.timestamp
    ? formatDistanceToNow(new Date(feedback.timestamp), { addSuffix: true })
    : null;

  const styles = getCourseBadgeStyles(feedback.course || "");

  return (
    <div className={`relative overflow-hidden bg-slate-900/30 border border-white/5 backdrop-blur-md text-white rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between h-full shadow-lg ${styles.glow}`}>
      
      {/* Absolute quote background decoration */}
      <div className="absolute top-6 right-6 opacity-[0.03] text-white">
        <Quote size={56} className="transform rotate-180" />
      </div>

      {/* Top section */}
      <div>
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar with dynamic gradient and glow */}
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${styles.avatar} flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 border border-white/10`}>
            {feedback.name ? feedback.name[0].toUpperCase() : "?"}
          </div>

          {/* Name + Designation + Degree + Course */}
          <div className="min-w-0 flex-1">
            <h3 className="text-white font-extrabold text-base sm:text-[17px] tracking-tight truncate montserrat">
              {feedback.name}
            </h3>
            
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-400 mt-0.5">
              <span className="font-semibold text-slate-300">{feedback.designation || "Trainee"}</span>
              {feedback.degree && feedback.degree !== "N/A" && (
                <>
                  <span className="text-slate-600">•</span>
                  <span>{feedback.degree}</span>
                </>
              )}
            </div>
            
            {/* Course Tag */}
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded-md border mt-2.5 ${styles.bg}`}>
              {feedback.course || "General Course"}
            </span>
          </div>
        </div>

        {/* ⭐ Stars */}
        <div className="flex gap-1 mb-3.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={
                i < feedback.rating
                  ? "fill-amber-400 text-amber-400 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                  : "text-slate-800"
              }
            />
          ))}
        </div>

        {/* Review with quotation styling */}
        <p className="text-slate-300 leading-relaxed text-sm sm:text-[14.5px] font-medium italic relative z-10">
          "{feedback.review}"
        </p>
      </div>

      {/* Timestamp at bottom */}
      {formattedTime && relativeTime && (
        <div className="text-[11px] text-slate-500 mt-5 border-t border-white/5 pt-3 flex justify-between items-center">
          <span>{relativeTime}</span>
          <span className="opacity-60">{formattedTime}</span>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;