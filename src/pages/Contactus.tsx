import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Footer from "../components/Footer";
import ContactForm from "../components/Form";
import Header from "../components/Header";

function Contactus() {
  const contactDetails = [
    {
      id: 1,
      title: "Email Me",
      value: "aaronc2578@gmail.com",
      link: "mailto:aaronc2578@gmail.com",
      icon: <Mail className="w-6 h-6 text-blue-400" />,
    },
    {
      id: 2,
      title: "LinkedIn",
      value: "linkedin.com/in/aaron-dev",
      link: "https://www.linkedin.com/in/aaron-dev/",
      icon: <Linkedin className="w-6 h-6 text-indigo-400" />,
    },
    {
      id: 3,
      title: "GitHub",
      value: "github.com/aaron2578",
      link: "https://github.com/aaron2578",
      icon: <Github className="w-6 h-6 text-purple-400" />,
    },
    {
      id: 4,
      title: "Location",
      value: "Tamil Nadu, India",
      link: undefined,
      icon: <MapPin className="w-6 h-6 text-red-400" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <div className="flex-grow w-[90%] max-w-5xl mx-auto py-12 flex flex-col justify-center">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Have a question, project, or collaboration opportunity? Let's connect!
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-between w-full mt-4">

          {/* Left Column: Contact info cards */}
          <div className="w-full lg:w-[40%] flex flex-col gap-5 justify-center">
            {contactDetails.map((detail) => {
              const CardContent = (
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
                      {detail.title}
                    </h4>
                    <p className="text-white font-medium text-sm sm:text-base mt-1">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );

              return detail.link ? (
                <a
                  href={detail.link}
                  key={detail.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-2xl p-5 hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    {CardContent}
                  </motion.div>
                </a>
              ) : (
                <motion.div
                  key={detail.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-2xl p-5 hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300 shadow-lg"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Contact form */}
          <div className="w-full lg:w-[55%] flex items-center justify-center">
            <ContactForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contactus;
