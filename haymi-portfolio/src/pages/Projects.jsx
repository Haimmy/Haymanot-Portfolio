
import { useState, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import Footer from "../components/Footer";

// 3D Model Viewer Component
function ModelViewer({ modelPath, title }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.2}
      position={[0, -0.5, 0]}
    />
  );
}

// Loading Fallback
function ModelLoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-[#E67E4E] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#E67E4E] text-xs">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

// 3D Project Card with GLB Viewer
function ThreeDProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E67E4E]/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-[#E67E4E]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <Canvas
          camera={{ position: [3, 2, 5], fov: 45 }}
          shadows
          gl={{ antialias: true, alpha: false }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 2, 4]} intensity={0.5} color="#E67E4E" />
          <pointLight position={[2, 1, 3]} intensity={0.6} color="#FF9B5E" />
          <Environment preset="city" background={false} />
          
          <Suspense fallback={<ModelLoadingFallback />}>
            <ModelViewer modelPath={project.modelPath} title={project.title} />
          </Suspense>
          
          <OrbitControls
            enableZoom={isHovered}
            enablePan={false}
            autoRotate={!isHovered}
            autoRotateSpeed={1.5}
            zoomSpeed={0.5}
            minDistance={2}
            maxDistance={6}
            target={[0, 0, 0]}
          />
        </Canvas>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E67E4E]/20 text-[#E67E4E] border border-[#E67E4E]/30">
            <i className="fas fa-cube mr-1"></i> 3D Art
          </span>
        </div>
        
        {/* Interactive Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300">
            <i className="fas fa-mouse-pointer mr-1"></i> Interactive
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E67E4E] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Software Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-800/50 px-2 py-1 rounded-full text-gray-400 border border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Options */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <div className="flex gap-2">
            <span className="text-xs text-gray-500">
              <i className="fas fa-rotate-right mr-1"></i> Auto-rotates
            </span>
          </div>
          <button className="text-sm text-[#E67E4E] hover:text-[#FF9B5E] transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
            View in 3D <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Video Project Card
function VideoProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF9B5E]/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-[#FF9B5E]/10"
    >
      {/* Video Thumbnail Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fas fa-play-circle text-7xl text-[#FF9B5E]/30 group-hover:scale-110 group-hover:text-[#FF9B5E]/50 transition-all duration-500"></i>
        </div>
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="w-16 h-16 bg-[#FF9B5E] rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <i className="fas fa-play text-black text-xl ml-1"></i>
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FF9B5E]/20 text-[#FF9B5E] border border-[#FF9B5E]/30">
            <i className="fas fa-video mr-1"></i> Video Edit
          </span>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
            <i className="fas fa-clock mr-1"></i> {project.duration}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF9B5E] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-800/50 px-2 py-1 rounded-full text-gray-400 border border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <span className="text-xs text-gray-500">
            <i className="fas fa-calendar mr-1"></i> {project.year}
          </span>
          <button className="text-sm text-[#FF9B5E] hover:text-white transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
            Watch Now <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Web Project Card
function WebProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Website Preview Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fas fa-globe text-6xl text-blue-500/30 group-hover:scale-110 transition-transform duration-500"></i>
        </div>
        
        {/* Preview Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="px-6 py-2 bg-blue-500 rounded-full text-white text-sm font-medium transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg flex items-center gap-2">
            <i className="fas fa-external-link-alt"></i> Live Preview
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <i className="fas fa-code mr-1"></i> Website
          </span>
        </div>
        
        {/* Year Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
            {project.year}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-800/50 px-2 py-1 rounded-full text-gray-400 border border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
            <i className="fas fa-github mr-1"></i> Source Code
          </a>
          <button className="text-sm text-blue-400 hover:text-white transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
            View Project <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  // 3D Projects with GLB model paths
  const threeDProjects = [
    {
      id: 1,
      title: "Cyberpunk Character",
      category: "3D",
      description: "Realistic cyberpunk character with detailed armor and lighting effects. Fully textured and rigged.",
      tech: ["Blender", "Substance Painter", "Cycles"],
      modelPath: "/models/cyberpunk.glb",
      year: "2024"
    },
    {
      id: 2,
      title: "Fantasy Environment",
      category: "3D",
      description: "Magical forest environment with dynamic lighting and particle effects. Low-poly optimized.",
      tech: ["Blender", "Unreal Engine", "Photoshop"],
      modelPath: "/models/fantasy.glb",
      year: "2024"
    },
    {
      id: 3,
      title: "Sci-fi Weapon",
      category: "3D",
      description: "High-poly sci-fi weapon design with texture painting and PBR materials.",
      tech: ["Blender", "ZBrush", "Marmoset"],
      modelPath: "/models/weapon.glb",
      year: "2023"
    },
    {
      id: 4,
      title: "Abstract Sculpture",
      category: "3D",
      description: "Modern abstract sculpture with procedural textures and dynamic lighting setup.",
      tech: ["Blender", "Geometry Nodes"],
      modelPath: "/models/sculpture.glb",
      year: "2024"
    }
  ];

  // Video Projects
  const videoProjects = [
    {
      id: 5,
      title: "Cinematic Travel Reel",
      category: "Video",
      description: "Travel montage with professional color grading and dynamic transitions.",
      tech: ["Premiere Pro", "After Effects", "DaVinci"],
      duration: "2:30",
      year: "2024"
    },
    {
      id: 6,
      title: "Product Commercial",
      category: "Video",
      description: "Professional product commercial with motion graphics and sound design.",
      tech: ["After Effects", "Premiere Pro", "Audition"],
      duration: "1:45",
      year: "2024"
    },
    {
      id: 7,
      title: "YouTube Documentary",
      category: "Video",
      description: "Documentary style editing with storytelling focus and cinematic pacing.",
      tech: ["Premiere Pro", "DaVinci Resolve"],
      duration: "15:00",
      year: "2023"
    }
  ];

  // Web Projects
  const webProjects = [
    {
      id: 8,
      title: "Portfolio 2025",
      category: "Web",
      description: "Interactive 3D portfolio with Three.js and GSAP animations. Fully responsive.",
      tech: ["React", "Three.js", "Tailwind CSS"],
      link: "#",
      year: "2024"
    },
    {
      id: 9,
      title: "E-commerce Platform",
      category: "Web",
      description: "Full-featured e-commerce with cart, payment integration, and admin dashboard.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      year: "2024"
    },
    {
      id: 10,
      title: "Agency Website",
      category: "Web",
      description: "Modern agency site with smooth scroll, micro-interactions, and CMS integration.",
      tech: ["React", "Framer Motion", "SCSS"],
      link: "#",
      year: "2023"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-0">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,_rgba(230,126,78,0.05),_transparent_50%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 text-left"
        >
          <span className="inline-block bg-[#E67E4E]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#E67E4E] mb-4">
            MY CREATIVE WORK
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my latest work across 3D art, video editing, and web development.
            Each project represents my passion for creativity and technical excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] rounded-full mt-6"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12 border-b border-gray-800 pb-4"
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black shadow-lg shadow-[#E67E4E]/30"
                : "bg-gray-900/50 text-gray-400 hover:text-white hover:border-[#E67E4E]/50 border border-transparent hover:border-[#E67E4E]/30"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("3d")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "3d"
                ? "bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black shadow-lg shadow-[#E67E4E]/30"
                : "bg-gray-900/50 text-gray-400 hover:text-white hover:border-[#E67E4E]/50 border border-transparent hover:border-[#E67E4E]/30"
            }`}
          >
            <i className="fas fa-cube"></i> 3D Models
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "video"
                ? "bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black shadow-lg shadow-[#E67E4E]/30"
                : "bg-gray-900/50 text-gray-400 hover:text-white hover:border-[#E67E4E]/50 border border-transparent hover:border-[#E67E4E]/30"
            }`}
          >
            <i className="fas fa-video"></i> Video Edits
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "web"
                ? "bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black shadow-lg shadow-[#E67E4E]/30"
                : "bg-gray-900/50 text-gray-400 hover:text-white hover:border-[#E67E4E]/50 border border-transparent hover:border-[#E67E4E]/30"
            }`}
          >
            <i className="fas fa-code"></i> Websites
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeTab === "all" && (
            <>
              {threeDProjects.map((project, idx) => (
                <ThreeDProjectCard key={project.id} project={project} index={idx} />
              ))}
              {videoProjects.map((project, idx) => (
                <VideoProjectCard key={project.id} project={project} index={idx} />
              ))}
              {webProjects.map((project, idx) => (
                <WebProjectCard key={project.id} project={project} index={idx} />
              ))}
            </>
          )}
          {activeTab === "3d" && (
            threeDProjects.map((project, idx) => (
              <ThreeDProjectCard key={project.id} project={project} index={idx} />
            ))
          )}
          {activeTab === "video" && (
            videoProjects.map((project, idx) => (
              <VideoProjectCard key={project.id} project={project} index={idx} />
            ))
          )}
          {activeTab === "web" && (
            webProjects.map((project, idx) => (
              <WebProjectCard key={project.id} project={project} index={idx} />
            ))
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center py-12 bg-gradient-to-r from-[#E67E4E]/5 to-[#FF9B5E]/5 rounded-3xl border border-[#E67E4E]/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Let's collaborate and bring your ideas to life with creativity and technical excellence.
          </p>
          <button className="group bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#FF9B5E] flex items-center gap-2 mx-auto">
            Start a Project
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </motion.div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}