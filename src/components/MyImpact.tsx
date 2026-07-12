import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ILLUSTRATION from "../assets/impact_illustration.png";

function MyImpact() {
  const points = [
    "Trained students in modern web technologies and programming.",
    "Conducted technical orientations and workshops for career growth.",
    "Guided students through projects and problem-solving approaches.",
    "Helped learners build industry-relevant skills and become job-ready.",
  ];

  return (
    <section className="py-20 bg-slate-950/50 text-white relative z-10 overflow-hidden border-t border-white/5 backdrop-blur-sm">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & List */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white montserrat mb-8 relative inline-block">
              My Impact
              <div className="w-12 h-1 bg-blue-600 mt-3 rounded-full" />
            </h2>

            <div className="flex flex-col gap-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Solid Blue Check Circle */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white mt-0.5 shadow-md shadow-blue-600/20">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Illustration */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 bg-white p-4">
              <img
                src={ILLUSTRATION}
                alt="Impact Illustration"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MyImpact;
