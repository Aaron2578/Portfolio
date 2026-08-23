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

import databricksGenAIImg from "../assets/databricks_generative_ai_fundamentals.png";
import milesAIImg from "../assets/miles_ai_in_accounting_101.png";
import simplilearnDSImg from "../assets/simplilearn_data_science.png";
import guviAIImg from "../assets/guvi_hcl_generative_ai.png";
import besantTestingImg from "../assets/besant_software_testing.png";
import guviPythonTamilImg from "../assets/guvi_python_tamil.png";
import guviAIForIndiaImg from "../assets/guvi_ai_for_india.png";
import fivesqlAdvancedImg from "../assets/fivesql_quiz_advanced.png";

import fivesqlAdvancedImg from "../assets/fivesql_quiz_advanced.png";

import { motion } from "framer-motion";

interface CertificateItem {
  name: string;
  img: string;
  pdf: string;
  credentialId?: string;
  issued?: string;
  provider?: string;
}

interface CertificateCategory {
  category: string;
  certificates: CertificateItem[];
}

function Certificate() {
  const certificateCategories: CertificateCategory[] = [
    {
      category: "🤖 Generative AI & AI Certifications",
      certificates: [
        {
          name: "Databricks Accredited Generative AI Fundamentals",
          img: databricksGenAIImg,
          pdf: databricksGenAIImg,
          credentialId: "191037528",
          issued: "August 9, 2026",
          provider: "Databricks",
        },
        {
          name: "AI in Accounting 101: CAIRA Essential Badge",
          img: milesAIImg,
          pdf: milesAIImg,
          issued: "August 10, 2026",
          provider: "Miles Education & CAIRA",
        },
        {
          name: "Master the Power of Generative AI",
          img: guviAIImg,
          pdf: guviAIImg,
          issued: "August 14, 2026",
          provider: "GUVI & HCL",
        },
        {
          name: "AI For India 2.0",
          img: guviAIForIndiaImg,
          pdf: guviAIForIndiaImg,
          issued: "August 15, 2023",
          provider: "GUVI & Skill India",
        },
      ],
    },
    {
      category: "📊 Data & Analytics Certifications",
      certificates: [
        {
          name: "Essentials of MS Excel - Formulas and Functions",
          img: fivesqlAdvancedImg,
          pdf: fivesqlAdvancedImg,
          credentialId: "SQL-QUIZ-466413",
          issued: "August 2026",
          provider: "UniAthena",
        },
        {
          name: "SQL - Advanced Quiz",
          img: fivesqlAdvancedImg,
          pdf: fivesqlAdvancedImg,
          credentialId: "SQL-QUIZ-466413",
          issued: "June 2026",
          provider: "FiveSQL",
        },
        {
          name: "Data Science Course",
          img: simplilearnDSImg,
          pdf: simplilearnDSImg,
          credentialId: "10590144",
          issued: "August 12, 2026",
          provider: "Simplilearn",
        },
        {
          name: "Power BI Analyst",
          img: powerbi,
          pdf: powerbiPDF,
          issued: "July 17, 2026",
          provider: "SkillCourse",
        },
        {
          name: "Excel Quiz Certificate",
          img: excelQuizImg,
          pdf: excelQuizImg,
          issued: "July 23, 2026",
          provider: "SkillCourse",
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
          issued: "March 31, 2025",
          provider: "Rendercity Technologies",
        },
      ],
    },
    {
      category: "💻 Development Certifications",
      certificates: [
        {
          name: "Python Programming Course",
          img: guviPythonTamilImg,
          pdf: guviPythonTamilImg,
          credentialId: "229566664V111L0901",
          issued: "August 14, 2023",
          provider: "GUVI & HCL",
        },
        {
          name: "Web Development Course",
          img: rinexWebImg,
          pdf: rinexWebPDF,
          credentialId: "WD23-RNC0-9002",
          issued: "September 5, 2023",
          provider: "Rinex Organization",
        },
        {
          name: "Python Micro Course",
          img: pythonMicroCourseImg,
          pdf: pythonMicroCourseImg,
          issued: "July 24, 2026",
          provider: "SkillCourse",
        },
      ],
    },
    {
      category: "🧪 Software Testing Certifications",
      certificates: [
        {
          name: "Software Testing Training",
          img: besantTestingImg,
          pdf: besantTestingImg,
          credentialId: "BFT207B061",
          issued: "September 30, 2023",
          provider: "Besant Technologies",
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
          credentialId: "CA/FD1/11581",
          issued: "June 4, 2024",
          provider: "CodeAlpha",
        },
        {
          name: "Web Development Internship",
          img: codeAlphaWebImg,
          pdf: codeAlphaWebPDF,
          issued: "November 20, 2023",
          provider: "CodeAlpha",
        },
        {
          name: "Web Development Internship",
          img: rinexInternImg,
          pdf: rinexInternPDF,
          credentialId: "WD23-RNI0-9002",
          issued: "November 25, 2023",
          provider: "Rinex Technologies",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Certifications
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            A collection of certifications, internships, and achievements that showcase my learning journey and professional growth.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        <div className="flex flex-col gap-12">
          {certificateCategories.map((category) => (
            <div key={category.category} className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-l-4 border-cyan-400 pl-3 text-white montserrat uppercase tracking-wider">
                {category.category}
              </h3>

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
                    <div className="overflow-hidden aspect-video bg-slate-950 flex items-center justify-center border-b border-white/5">
                      <img
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div className="flex flex-col gap-2 text-center">
                        {cert.provider && (
                          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                            {cert.provider}
                          </span>
                        )}

                        <h4 className="text-white font-bold text-[15px] montserrat group-hover:text-cyan-300 transition-colors">
                          {cert.name}
                        </h4>

                        {(cert.credentialId || cert.issued) && (
                          <div className="flex flex-col gap-1 text-xs text-slate-400 font-mono mt-2">
                            {cert.credentialId && (
                              <span className="text-cyan-400/95">
                                Credential ID: {cert.credentialId}
                              </span>
                            )}
                            {cert.issued && (
                              <span>
                                Issued: {cert.issued}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-slate-400 text-xs text-center font-mono mt-4 uppercase tracking-wider">
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