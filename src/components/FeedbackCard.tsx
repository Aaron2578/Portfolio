import React from "react";
import type { Feedback } from "../types/Feedback";

interface Props {
  feedback: Feedback;
}

const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-zinc-800">
      
      {/* Top section */}
      <div className="flex items-center gap-4 mb-4">
        
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          {feedback.name[0]}
        </div>

        {/* Name + Degree */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            {feedback.name}
          </h3>
          <p className="text-gray-400 text-sm">
            {feedback.degree} • {feedback.course || "General"}
          </p>
        </div>
      </div>

      {/* ⭐ Stars */}
      <div className="flex gap-1 mb-3 text-xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={
              i < feedback.rating
                ? "text-yellow-400 drop-shadow-md"
                : "text-gray-600"
            }
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-300 leading-relaxed text-[15px] text-justify">
        “{feedback.review}”
      </p>
    </div>
  );
};

export default FeedbackCard;