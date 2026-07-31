import Footer from "../components/Footer";
import Header from "../components/Header";

import powerbi from "../assets/Power BI Course.png";
import powerbiPDF from "../documents/Power BI Course.pdf";

import uiuxImg from "../assets/UIUX.png";
import uiuxPDF from "../documents/Aaraon-UI&UX.pdf";

import codeAlphaFrontImg from "../assets/codeAlphaFrontenddevelopmentInternship.png";
import codeAlphaFrontPDF from "../documents/C.aaron.pdf";

import codeAlphaWebImg from "../assets/codeAlphaWebdevelopmentInternship.png";
import codeAlphaWebPDF from "../documents/C.aaron (2).pdf";

import rinexInternImg from "../assets/rinexInternship.png";
import rinexInternPDF from "../documents/Aaron C - Internship  Completion Certificate.pdf";

import rinexWebImg from "../assets/rinexWebCourseCompletion.png";
import rinexWebPDF from "../documents/Course completion certificate.pdf";

import excelQuizImg from "../assets/excel quiz.png";
import pythonMicroCourseImg from "../assets/Python Micro COurse.jpeg";

import { motion } from "framer-motion";

function Certificate() {
  const certificateCategories = [
    {
      category: "📊 Data & Analytics Certifications",
      certificates: [
        {
          name: "Power BI Analyst",
          img: powerbi,
          pdf: powerbiPDF,
        },
        {
          name: "Excel Quiz Certificate",
          img: excelQuizImg,
          pdf: excelQuizImg,
        },
      ],
    },
    {
      category: "🎨 UI/UX Design Internship",
      certificates: [
        {
          name: "UI/UX Designer",
          img: uiuxImg,
          pdf: uiuxPDF,
        },
      ],
    },
    {
      category: "💻 Development Certifications",
      certificates: [
        {
          name: "Web Development Course",
          img: rinexWebImg,
          pdf: rinexWebPDF,
        },
        {
          name: "Python Micro Course",
          img: pythonMicroCourseImg,
          pdf: pythonMicroCourseImg,
        },
      ],
    },
    {
      category: "🚀 Internship Certifications",
      certificates: [
        {
          name: "Frontend Development Internship",
          img: codeAlphaFrontImg,
          pdf: codeAlphaFrontPDF,
        },
        {
          name: "Web Development Internship",
          img: codeAlphaWebImg,
          pdf: codeAlphaWebPDF,
        },
        {
          name: "Web Development Internship",
          img: rinexInternImg,
          pdf: rinexInternPDF,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };



  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <section className="flex-grow w-[90%] max-w-5xl mx-auto py-12">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Certifications
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            A collection of certifications, internships, and achievements that showcase my learning journey and professional growth.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {certificateCategories.map((category) => (
            <div key={category.category} className="flex flex-col gap-6">
              {/* Category Title */}
              <h3 className="text-lg font-bold border-l-4 border-cyan-400 pl-3 text-white montserrat uppercase tracking-wider">
                {category.category}
              </h3>

              {/* Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {category.certificates.map((cert) => (
                  <motion.a
                    key={cert.name + cert.pdf}
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    className="group bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:border-cyan-400/50 hover:bg-slate-900/50 transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col h-full"
                  >
                    {/* Image Wrapper */}
                    <div className="overflow-hidden aspect-video bg-slate-950 flex items-center justify-center border-b border-white/5">
                      <img
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <h4 className="text-white font-bold text-[15px] montserrat text-center group-hover:text-cyan-300 transition-colors">
                        {cert.name}
                      </h4>

                      <p className="text-slate-400 text-xs text-center font-mono mt-3 uppercase tracking-wider">
                        Click to view credential
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Certificate;