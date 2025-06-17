import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS with environment variables
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      console.log("Using Service ID:", serviceId);
      console.log("Using Template ID:", templateId);

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current
      );
      
      console.log("SUCCESS!", result.text);
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(error.text || "Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="w-full max-w-[600px]"
    >
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lightGrey">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="bg-[#1d1d1d] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBrown"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lightGrey">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="bg-[#1d1d1d] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBrown"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lightGrey">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            className="bg-[#1d1d1d] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBrown resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-lightBrown text-white py-4 px-8 rounded-lg hover:bg-[#8B4513] transition-all duration-300"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-500 text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
