import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Load environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_bojfijx";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_75qv6x3";
    const userID = process.env.REACT_APP_EMAILJS_USER_ID || "KFWwjtEGkQuYWTqBd";

    console.log("Service ID:", serviceID);
    console.log("Template ID:", templateID);
    console.log("User ID:", userID);

    if (!serviceID || !templateID || !userID) {
      console.error("❌ Missing EmailJS credentials. Check your .env file.");
      setSuccess("EmailJS configuration error. Please contact support.");
      setLoading(false);
      return;
    }

    emailjs
      .send(serviceID, templateID, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      }, userID)
      .then((response) => {
        console.log("✅ Email Sent Successfully:", response);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Email failed to send:", error);
        setSuccess("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      {success && <p className="text-green-400 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
