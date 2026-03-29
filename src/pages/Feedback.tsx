import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackCard from "../components/FeedbackCard";
import  type { Feedback as FeedbackType } from "../types/Feedback";

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

  useEffect(() => {
    fetch("https://feedback-json-new.onrender.com/feedback")
      .then((res) => res.json())
      .then((data: FeedbackType[]) => setFeedbacks(data));
  }, []);

  return (
    <div>
      <Header />

      <div className="w-[90%] m-auto py-12">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white">
            What Students Say 💬
          </h1>
          <p className="text-gray-400 mt-2">
            Real feedback from learners
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((f) => (
            <FeedbackCard key={f.id} feedback={f} />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Feedback;