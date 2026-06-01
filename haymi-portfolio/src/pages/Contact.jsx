import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your EmailJS credentials
    const serviceId = 'service_30l4ldk';     
    const templateId = 'template_hdcrp9b';   
    const publicKey = '1Ajbay-bGTLQaCUnE';     
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'haymigirma26@gmail.com'  // Your email where you'll receive messages
    };
    
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Haimmy",
      color: "hover:bg-gray-700",
      username: "Haimmy"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/haymanot-girma",
      color: "hover:bg-[#0077b5]",
      username: "haymanot-girma"
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://instagram.com/hay_m_ii",
      color: "hover:bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#F56040]",
      username: "hay_m_ii"
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/@Blend_It_Easy",
      color: "hover:bg-[#FF0000]",
      username: "Blend_It_Easy"
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:haymigirma26@gmail.com",
      color: "hover:bg-[#E67E4E]",
      username: "haymigirma26@gmail.com"
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,_rgba(230,126,78,0.05),_transparent_50%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 text-left"
        >
          <span className="inline-block bg-[#E67E4E]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#E67E4E] mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] rounded-full mt-6"></div>
        </motion.div>

        {/* Contact Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT SIDE - Contact Info & Social Links */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="glass p-5 flex items-center gap-4 group hover:border-[#E67E4E]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#E67E4E]/10 rounded-full flex items-center justify-center group-hover:bg-[#E67E4E]/20 transition-all duration-300">
                  <i className="fas fa-envelope text-[#E67E4E] text-xl"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:haymigirma26@gmail.com" className="text-white hover:text-[#E67E4E] transition-colors">
                    haymigirma26@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="glass p-5 flex items-center gap-4 group hover:border-[#E67E4E]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#E67E4E]/10 rounded-full flex items-center justify-center group-hover:bg-[#E67E4E]/20 transition-all duration-300">
                  <i className="fas fa-phone text-[#E67E4E] text-xl"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+251987221138" className="text-white hover:text-[#E67E4E] transition-colors">
                    +251 987 221 138
                  </a>
                </div>
              </div>
              
              <div className="glass p-5 flex items-center gap-4 group hover:border-[#E67E4E]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#E67E4E]/10 rounded-full flex items-center justify-center group-hover:bg-[#E67E4E]/20 transition-all duration-300">
                  <i className="fas fa-map-marker-alt text-[#E67E4E] text-xl"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    custom={index}
                    className={`glass p-4 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#E67E4E]/50 group ${social.color}`}
                  >
                    <div className="w-10 h-10 bg-[#E67E4E]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <i className={`${social.icon} text-[#E67E4E] text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{social.name}</p>
                      <p className="text-gray-500 text-xs truncate">{social.username}</p>
                    </div>
                    <i className="fas fa-arrow-right text-gray-500 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={fadeInUp} className="glass p-5 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-400 text-sm font-medium">Available for freelance work</span>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Currently accepting new projects and collaborations. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-gray-400 text-sm mb-6">I'll get back to you within 24 hours</p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check-circle text-4xl text-green-500"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I'll respond shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}>
                      <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-[#E67E4E] focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Email Address
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                      <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-[#E67E4E] focus:outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'transform scale-[1.02]' : ''}`}>
                      <i className="fas fa-tag absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-[#E67E4E] focus:outline-none transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}>
                      <i className="fas fa-comment absolute left-4 top-4 text-gray-500"></i>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows="5"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-[#E67E4E] focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_25px_#FF9B5E]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass overflow-hidden rounded-2xl">
            <div className="relative h-64 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-6xl text-[#E67E4E]/30 mb-4"></i>
                <p className="text-gray-400">📍 Addis Ababa, Ethiopia</p>
                <p className="text-gray-500 text-sm mt-2">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center py-12 bg-gradient-to-r from-[#E67E4E]/5 to-[#FF9B5E]/5 rounded-3xl border border-[#E67E4E]/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Quick answers to common questions. Don't see your question? Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <i className="fas fa-clock text-3xl text-[#E67E4E] mb-3"></i>
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-gray-500 text-sm">Usually within 24 hours</p>
            </div>
            <div className="text-center">
              <i className="fas fa-dollar-sign text-3xl text-[#E67E4E] mb-3"></i>
              <h3 className="text-white font-semibold mb-2">Freelance Rates</h3>
              <p className="text-gray-500 text-sm">Project-based or hourly</p>
            </div>
            <div className="text-center">
              <i className="fas fa-globe text-3xl text-[#E67E4E] mb-3"></i>
              <h3 className="text-white font-semibold mb-2">Remote Work</h3>
              <p className="text-gray-500 text-sm">Available worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}