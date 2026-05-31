// Hero.jsx - Updated with your LapTop.glb model
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useGLTF, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Custom component to load and animate the laptop model
function LaptopModel({ onLoad }) {
  const { scene, animations } = useGLTF("/models/MyLaptop.glb");
  const modelRef = useRef();
  
  useEffect(() => {
    if (scene) {
      // Adjust model scale and position
      scene.scale.set(0.5, 0.5, 0.5);
      scene.position.set(0, -0.2, 0);
      
      // Enable shadows
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Add slight emissive to make it pop
          if (child.material) {
            child.material.metalness = 0.7;
            child.material.roughness = 0.3;
          }
        }
      });
      
      onLoad(true);
    }
  }, [scene, onLoad]);

  useFrame((state) => {
    if (modelRef.current) {
      // Gentle floating animation
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

// Loading fallback component
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#E67E4E] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#E67E4E] text-sm font-medium">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

export default function Hero() {
  const mountRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const roles = ["3D Artist", "Video Editor", "Web Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRole];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(80);
      } else {
        setDisplayText((prev) => fullText.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setTypingSpeed(150);
    }
    
    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-between px-6 lg:px-20 py-32 flex-col lg:flex-row gap-12 relative bg-black overflow-hidden">
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,_rgba(230,126,78,0.08),_transparent_50%)]"></div>
      
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#E67E4E]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[#E67E4E] border border-[#E67E4E]/30 animate-pulse">
            <i className="fas fa-code"></i> PORTFOLIO 2026
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">Haymanot G.</span>
        </h1>
        
        {/* Typewriter Animation */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">I am a</span>
          <div className="relative inline-block">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E67E4E] min-w-[200px] inline-block">
              {displayText}
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E67E4E] animate-pulse">|</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
          Crafting immersive 3D experiences, cinematic video edits, and high-performance web applications.
          Let's bring your vision to life with creativity and precision.
        </p>
        
        {/* Buttons with enhanced effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#FF9B5E] shadow-lg">
            <i className="fas fa-compass"></i> Explore Work
            <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"></i>
          </button>
          <button className="group flex items-center justify-center gap-2 bg-transparent border-2 border-[#E67E4E] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#E67E4E]/20 hover:border-[#FF9B5E] hover:scale-105 hover:shadow-[0_0_20px_#E67E4E]/50">
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <i className="fas fa-check-circle text-[#E67E4E]"></i>
            <span>3+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <i className="fas fa-check-circle text-[#E67E4E]"></i>
            <span>20+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <i className="fas fa-check-circle text-[#E67E4E]"></i>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
      
      {/* 3D Model Container - Beautiful presentation of your LapTop.glb */}
      <div className="flex-1 flex justify-center items-center relative min-h-[500px] lg:min-h-[600px]">
        {/* Glowing rings behind the model */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-[#E67E4E]/5 to-[#FF9B5E]/5 animate-pulse"></div>
          <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border border-[#E67E4E]/20 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#FF9B5E]/10 animate-[spin_15s_linear_infinite_reverse]"></div>
        </div>
        
        {/* 3D Canvas with your laptop model */}
        <div className="relative w-full h-[450px] lg:h-[550px] z-10">
          <Canvas
            camera={{ position: [3, 2, 5], fov: 45 }}
            shadows
            gl={{ antialias: true, alpha: false }}
            style={{ background: 'transparent' }}
          >
            {/* Ambient and directional lighting for beautiful presentation */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight position={[-3, 2, 4]} intensity={0.5} color="#E67E4E" />
            <pointLight position={[2, 1, 3]} intensity={0.6} color="#FF9B5E" />
            <pointLight position={[-1, 2, -2]} intensity={0.4} color="#4466cc" />
            <spotLight position={[0, 3, 2]} intensity={0.5} angle={0.3} penumbra={1} />
            
            {/* Environment lighting for realistic reflections */}
            <Environment preset="city" background={false} />
            
            {/* Sparkle effects around the model */}
            <Sparkles count={100} scale={4} size={0.05} color="#E67E4E" opacity={0.4} />
            
            {/* Orbit controls with auto-rotate */}
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={1.5}
              zoomSpeed={0.8}
              minDistance={2}
              maxDistance={8}
              target={[0, 0.5, 0]}
            />
            
            {/* Your Laptop Model */}
            <LaptopModel onLoad={setModelLoaded} />
          </Canvas>
          
          {/* Loading indicator */}
          {!modelLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 border-4 border-[#E67E4E] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[#E67E4E] font-medium">Loading 3D Laptop Model...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Floating stats card */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-[#E67E4E]/30 shadow-2xl z-20">
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#E67E4E]">3+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#E67E4E]">20+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#E67E4E]">100%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
      `}</style>
    </section>
  );
}