import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill out all fields.");
      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/aaronc2578@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch {
      setStatus("⚠️ Network error. Please check your connection.");
    }

    setIsSending(false);
  };

  return (
    <div className="w-full max-w-xl">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/25 text-white"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-slate-300 montserrat"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-3 bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 font-medium transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-slate-300 montserrat"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full p-3 bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 font-medium transition-all"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-semibold text-slate-300 montserrat"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full p-3 bg-slate-950/80 border border-white/10 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 font-medium transition-all"
          />
        </div>

        {/* Hidden FormSubmit Fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition duration-300 disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
        >
          <Send size={16} />
          <span>{isSending ? "Sending..." : "Send Message"}</span>
        </motion.button>

        {/* Status */}
        {status && (
          <p className="mt-4 text-center text-sm font-semibold text-slate-400">
            {status}
          </p>
        )}
      </motion.form>
    </div>
  );
}

export default ContactForm;