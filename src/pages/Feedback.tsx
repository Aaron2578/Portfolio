import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackCard from "../components/FeedbackCard";
import type { Feedback as FeedbackType } from "../types/Feedback";
import { feedbackData } from "../data/feedBackData";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Search, 
  ArrowUpDown, 
  MessageSquare, 
  Award, 
  Sparkles, 
  BookOpen, 
  ThumbsUp, 
  X
} from "lucide-react";

const Feedback: React.FC = () => {
  // Use static feedbacks
  const feedbacks: FeedbackType[] = [...feedbackData];

  // States for interactive controls
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Calculate statistics
  const totalReviews = feedbacks.length;
  
  const averageRating = totalReviews > 0
    ? parseFloat(
        (feedbacks.reduce((sum, f) => sum + f.rating, 0) / totalReviews).toFixed(1)
      )
    : 0;

  const positivePercentage = totalReviews > 0
    ? Math.round(
        (feedbacks.filter((f) => f.rating >= 4).length / totalReviews) * 100
      )
    : 0;

  // Extract unique courses dynamically
  const uniqueCourses = Array.from(
    new Set(feedbacks.map((f) => f.course).filter(Boolean))
  );

  // Rating distribution calculations
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = feedbacks.filter((f) => f.rating === stars).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { stars, count, percentage };
  });

  // Category matching helper
  const matchCategory = (course: string, category: string) => {
    if (category === "All") return true;
    const c = course.toLowerCase();
    if (category === "Programming") {
      return c.includes("python") || c.includes("java");
    }
    if (category === "Data & Analytics") {
      return c.includes("data") || c.includes("power bi") || c.includes("excel");
    }
    if (category === "Design & Productivity") {
      return (
        c.includes("figma") ||
        c.includes("photoshop") ||
        c.includes("illustrator") ||
        c.includes("word") ||
        c.includes("powerpoint")
      );
    }
    return true;
  };

  // Filter and sort items
  const filteredAndSortedFeedbacks = feedbacks
    .filter((f) => {
      // Category filter
      if (!matchCategory(f.course || "", selectedCategory)) return false;
      
      // Search text filter
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        return (
          f.name.toLowerCase().includes(query) ||
          (f.course || "").toLowerCase().includes(query) ||
          f.review.toLowerCase().includes(query) ||
          (f.designation || "").toLowerCase().includes(query) ||
          (f.degree || "").toLowerCase().includes(query)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        const timeA = a.timestamp ? new Date(a.timestamp).getTime() : a.id;
        const timeB = b.timestamp ? new Date(b.timestamp).getTime() : b.id;
        return timeB - timeA;
      }
      if (sortBy === "oldest") {
        const timeA = a.timestamp ? new Date(a.timestamp).getTime() : a.id;
        const timeB = b.timestamp ? new Date(b.timestamp).getTime() : b.id;
        return timeA - timeB;
      }
      if (sortBy === "highest-rating") {
        if (b.rating !== a.rating) return b.rating - a.rating;
        const timeA = a.timestamp ? new Date(a.timestamp).getTime() : a.id;
        const timeB = b.timestamp ? new Date(b.timestamp).getTime() : b.id;
        return timeB - timeA; // Fallback to newest
      }
      if (sortBy === "lowest-rating") {
        if (a.rating !== b.rating) return a.rating - b.rating;
        const timeA = a.timestamp ? new Date(a.timestamp).getTime() : a.id;
        const timeB = b.timestamp ? new Date(b.timestamp).getTime() : b.id;
        return timeB - timeA; // Fallback to newest
      }
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <Header />

      <div className="flex-grow w-[90%] max-w-6xl mx-auto py-12 relative z-10">
        
        {/* Page Heading & Introduction */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/25 text-blue-400 uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
              <Sparkles size={12} className="animate-pulse" /> Testimonials
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent montserrat inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Trainees Say 💬
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-3 text-sm sm:text-base max-w-xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real feedback from students, developers, and professionals trained in core tech stacks, analytics, and software design.
          </motion.p>
        </div>

        {/* 📊 Interactive Ratings Dashboard Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* Card 1: Score Summary */}
          <div className="bg-slate-900/30 border border-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-xl">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">Overall Score</span>
            <div className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tighter montserrat drop-shadow-md">
              {averageRating}
            </div>
            <div className="flex gap-1 mt-3 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={i < Math.round(averageRating) ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]" : "text-slate-800"} 
                />
              ))}
            </div>
            <p className="text-xs text-slate-400 font-semibold mt-1">
              Based on {totalReviews} Verified Review{totalReviews !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Card 2: Rating Distribution */}
          <div className="bg-slate-900/30 border border-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-xl min-h-[170px]">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider font-mono mb-3 block">Rating Distribution</span>
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="w-8 font-semibold flex items-center gap-0.5 justify-end">
                    {item.stars} <Star size={10} className="fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-grow h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-8 text-right font-medium text-slate-300">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Performance & Scope */}
          <div className="bg-slate-900/30 border border-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider font-mono mb-3 block">Performance Metrics</span>
            <div className="grid grid-cols-2 gap-3.5 flex-grow">
              <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-center items-center text-center">
                <ThumbsUp size={16} className="text-blue-400 mb-1" />
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block font-mono">Satisfaction</span>
                <span className="text-lg sm:text-xl font-extrabold text-blue-400 mt-1 montserrat">{positivePercentage}%</span>
              </div>
              <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-center items-center text-center">
                <BookOpen size={16} className="text-purple-400 mb-1" />
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block font-mono">Courses</span>
                <span className="text-lg sm:text-xl font-extrabold text-purple-400 mt-1 montserrat">{uniqueCourses.length} Topics</span>
              </div>
              <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-center items-center text-center col-span-2">
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-emerald-400 animate-pulse" />
                  <span className="text-xs font-extrabold text-emerald-400 montserrat">100% Verified Trainees</span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium mt-0.5">Collected directly from students</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🛠️ Dynamic Filters, Search & Sort Control bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/15 border border-white/5 backdrop-blur-md rounded-3xl p-4 shadow-md">
          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["All", "Programming", "Data & Analytics", "Design & Productivity"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-slate-950 shadow-md shadow-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort combo */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:max-w-md shrink-0">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search trainees, courses..."
                className="w-full pl-10 pr-4 py-2 text-xs font-semibold bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 transition-all"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0 flex items-center bg-slate-950/80 border border-white/10 rounded-xl px-3 py-1.5">
              <ArrowUpDown size={14} className="text-slate-500 mr-2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-300 focus:outline-none border-none cursor-pointer pr-4"
              >
                <option value="newest" className="bg-slate-950 text-white">Newest First</option>
                <option value="oldest" className="bg-slate-950 text-white">Oldest First</option>
                <option value="highest-rating" className="bg-slate-950 text-white">Highest Rating</option>
                <option value="lowest-rating" className="bg-slate-950 text-white">Lowest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* 🎴 Feedbacks Grid */}
        {filteredAndSortedFeedbacks.length > 0 ? (
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSortedFeedbacks.map((f) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.35 }}
                >
                  <FeedbackCard feedback={f} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-slate-900/10 border border-white/5 rounded-3xl backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mx-auto text-slate-700 mb-4 border border-white/5">
              <MessageSquare size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-300 montserrat">No reviews match your criteria</h4>
            <p className="text-sm text-slate-500 mt-1 max-w-xs mx-auto">
              Try adjusting your filters or clearing your search query.
            </p>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;