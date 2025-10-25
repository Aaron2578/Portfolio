import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate(); // For navigation

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill out all fields!");
      setIsSending(false);
      return;
    }

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
        setFormData({ name: "", email: "", message: "" });

        // Navigate to thank-you page
        navigate("/thank-you");
      } else {
        setStatus("❌ Something went wrong. Try again later.");
      }
    } catch {
      setStatus("⚠️ Network error. Check your connection.");
    }
    setIsSending(false);
  };

  return (
    <div className="flex justify-center items-center mt-20 md:mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-8 rounded-2xl shadow-lg w-[90%] mx-auto md:w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Hidden FormSubmit Fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
