import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="glass p-10 rounded-3xl w-full max-w-2xl"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-black/30 mb-6 outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-black/30 mb-6 outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-black/30 mb-6 outline-none"
      />

      <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl text-lg font-bold hover:scale-105 transition">
        Send Message
      </button>

    </motion.form>
  );
}