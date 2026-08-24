import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import thankGif from "../assets/thank-you-thanks.gif";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-md w-full bg-slate-900/40 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl text-center flex flex-col items-center group overflow-hidden"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-40 transition duration-700 blur-[1px] -z-10" />

          {/* Success Icon Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-3xl mb-6 shadow-lg shadow-cyan-500/10"
          >
            <FaCheckCircle className="animate-pulse" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent montserrat mb-3">
            Message Sent!
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
            Thank you for reaching out. Your message has been transmitted successfully.
          </p>

          {/* The GIF styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/5 shadow-xl bg-slate-950/80 p-2.5 my-8 aspect-video"
          >
            <img src={thankGif} alt="thanking-gif" className="w-full h-full object-cover rounded-xl opacity-90" />
          </motion.div>

          <div className="flex flex-col items-center gap-6 w-full">
            {/* Status Pulse Bar */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-950/60 border border-white/5 rounded-full text-xs text-slate-300 font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>I will get back to you soon</span>
            </div>

            {/* Back Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-300 hover:brightness-110 cursor-pointer text-sm font-mono tracking-wider"
              >
                <FaArrowLeft />
                <span>BACK TO HOME</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default ThankYou;
