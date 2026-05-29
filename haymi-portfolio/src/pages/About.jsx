
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,_rgba(230,126,78,0.05),_transparent_50%)]"></div>
      
      {/* Main Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Hero Section of About Page - Left Aligned */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 text-left"
        >
          <span className="inline-block bg-[#E67E4E]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#E67E4E] mb-4">
            GET TO KNOW ME
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] rounded-full"></div>
        </motion.div>

        {/* Main About Content - Left Aligned Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#E67E4E]/10 border border-[#E67E4E]/30 rounded-full px-4 py-2">
                <i className="fas fa-code text-[#E67E4E] text-sm"></i>
                <span className="text-[#E67E4E] text-sm font-medium">3D Artist & Interactive Web Developer</span>
              </div>
            </motion.div>

            {/* Interactive Web Developer Identity */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <i className="fas fa-laptop-code text-[#E67E4E] text-3xl"></i>
                Interactive Web Developer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate interactive web developer who creates engaging, dynamic web experiences. 
                I specialize in building responsive applications with smooth animations, intuitive user interfaces, 
                and immersive 3D integrations using React, Three.js, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["React", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion"].map((tech) => (
                  <span key={tech} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 3D Artist Identity */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <i className="fas fa-cube text-[#E67E4E] text-3xl"></i>
                3D Artist
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                As a 3D artist, I've mastered the complete Blender workflow — from modeling and sculpting 
                to lighting and rendering. I breathe life into characters and environments, creating 
                immersive worlds that tell stories through every polygon and texture.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Blender", "Maya", "ZBrush", "Substance Painter", "Unreal Engine"].map((tool) => (
                  <span key={tool} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Video Editor Identity */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <i className="fas fa-video text-[#E67E4E] text-3xl"></i>
                Video Editor
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in cinematic storytelling through video editing. From color grading and motion 
                graphics to seamless transitions and sound design, I create engaging content that captures 
                attention and delivers powerful narratives for YouTube, social media, and commercial projects.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Audition"].map((tool) => (
                  <span key={tool} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Philosophy / Personality */}
            <motion.div variants={fadeInUp} className="pt-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-[#E67E4E]/20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed pl-8 relative z-10">
                  Being both an interactive web developer and a 3D artist allows me to see the world 
                  through two lenses — <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">structure and imagination</span>.
                </p>
                <div className="absolute -right-4 bottom-0 text-6xl text-[#E67E4E]/20 font-serif">"</div>
              </div>
            </motion.div>

            {/* "See More" Button */}
            <motion.div variants={fadeInUp} className="pt-6">
              <button className="group flex items-center gap-3 bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#FF9B5E]">
                <span>See More of My Journey</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Circular Shining Photo Section (Orange overlay removed) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main Photo Card - Circular with shine effect */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Animated glowing rings - kept for decoration */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#E67E4E]/10 to-[#FF9B5E]/10 animate-pulse blur-xl"></div>
              </div>
              
              {/* Rotating border ring */}
              <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-[#E67E4E]/30 animate-[spin_10s_linear_infinite] lg:right-0"></div>
              
              {/* Second rotating ring (reverse) */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-[#FF9B5E]/10 animate-[spin-reverse_15s_linear_infinite] lg:right-0"></div>
              
              {/* Circular Photo Container - NO ORANGE OVERLAY */}
              <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden ring-4 ring-[#E67E4E]/20 shadow-2xl group">
                {/* Shine overlay - kept for glossy effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10"></div>
                
                {/* Your Photo - NO orange gradient overlay anymore */}
                <img 
                  src="haymi.jpg" 
                  alt="Haymi Girma"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div class="text-center space-y-4 p-8">
                          <div class="w-24 h-24 mx-auto bg-[#E67E4E]/20 rounded-full flex items-center justify-center">
                            <i class="fas fa-user-astronaut text-4xl text-[#E67E4E]"></i>
                          </div>
                          <div>
                            <p class="text-gray-400 text-sm">Haymi Girma</p>
                            <p class="text-[#E67E4E] text-xs mt-1">3D Artist & Developer</p>
                          </div>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Shine reflection effect on top - subtle */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-full"></div>
              </div>
              
              {/* Floating social icons */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#E67E4E] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fas fa-camera text-black text-sm"></i>
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#FF9B5E] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-heart text-black text-xs"></i>
              </div>
            </div>

            {/* Name and Title below photo */}
            <div className="text-left lg:text-right">
              <h3 className="text-2xl font-bold text-white">Haymi Girma</h3>
              <p className="text-[#E67E4E] font-medium">3D Artist & Interactive Web Developer</p>
            </div>

            {/* Stats and Achievements */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
                <i className="fas fa-calendar-alt text-3xl text-[#E67E4E] mb-2 group-hover:scale-110 transition-transform"></i>
                <div className="text-white font-bold text-2xl">3+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
                <i className="fas fa-folder-open text-3xl text-[#E67E4E] mb-2 group-hover:scale-110 transition-transform"></i>
                <div className="text-white font-bold text-2xl">20+</div>
                <div className="text-gray-500 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
                <i className="fas fa-code text-3xl text-[#E67E4E] mb-2 group-hover:scale-110 transition-transform"></i>
                <div className="text-white font-bold text-lg">Interactive</div>
                <div className="text-gray-500 text-sm">Web Dev</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
                <i className="fas fa-cube text-3xl text-[#E67E4E] mb-2 group-hover:scale-110 transition-transform"></i>
                <div className="text-white font-bold text-lg">3D Artist</div>
                <div className="text-gray-500 text-sm">& Video Editor</div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-r from-[#E67E4E]/10 to-[#FF9B5E]/10 rounded-2xl p-6 border border-[#E67E4E]/20 backdrop-blur-sm">
              <p className="text-gray-300 italic text-center">
                "The intersection of code, 3D art, and video editing is where magic happens. 
                I strive to create experiences that are not just functional, but unforgettable."
              </p>
              <div className="text-center mt-3">
                <span className="text-[#E67E4E] text-sm">— Haymi Girma</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-10"
        >
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Creative{" "}
              <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-[#E67E4E]/50 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#E67E4E]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-code text-2xl text-[#E67E4E]"></i>
              </div>
              <div className="text-[#E67E4E] font-bold mb-2">Phase 01</div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Web Dev</h3>
              <p className="text-gray-400 text-sm">Creating engaging web experiences with React, Three.js, and modern animations.</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#E67E4E]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-cube text-2xl text-[#E67E4E]"></i>
              </div>
              <div className="text-[#E67E4E] font-bold mb-2">Phase 02</div>
              <h3 className="text-xl font-bold text-white mb-2">3D Art & Animation</h3>
              <p className="text-gray-400 text-sm">Creating immersive worlds with Blender, sculpting, and rendering.</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-center hover:border-[#E67E4E]/30 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-[#E67E4E]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-video text-2xl text-[#E67E4E]"></i>
              </div>
              <div className="text-[#E67E4E] font-bold mb-2">Phase 03</div>
              <h3 className="text-xl font-bold text-white mb-2">Video Editing</h3>
              <p className="text-gray-400 text-sm">Cinematic storytelling with color grading and motion graphics.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}