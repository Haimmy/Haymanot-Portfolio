
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />

      {/* What I Do Section - Beautiful Interactive Boxes */}
      <section className="py-32 px-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E67E4E]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#E67E4E] mb-4">
            MY EXPERTISE
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-[#E67E4E] to-[#FF9B5E] bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into stunning digital experiences across three core disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1 - 3D Modeling */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-500 hover:border-[#E67E4E]/60 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-[#E67E4E]/10 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E67E4E]/0 via-[#E67E4E]/5 to-[#FF9B5E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 text-[#E67E4E] group-hover:scale-110 transition-transform duration-300 inline-block">
                <i className="fas fa-cube"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E67E4E] transition-colors duration-300">
                3D Modeling
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Creating realistic and stylized models using Blender. From organic sculpting to hard-surface modeling.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#E67E4E] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Discover More</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>

          {/* Card 2 - Frontend Development */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-500 hover:border-[#E67E4E]/60 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-[#E67E4E]/10 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E67E4E]/0 via-[#E67E4E]/5 to-[#FF9B5E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 text-[#E67E4E] group-hover:scale-110 transition-transform duration-300 inline-block">
                <i className="fab fa-react"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E67E4E] transition-colors duration-300">
                Frontend Development
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Interactive websites using React, GSAP and Three.js. Building immersive web experiences.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#E67E4E] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Discover More</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>

          {/* Card 3 - Video Editing */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-500 hover:border-[#E67E4E]/60 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-[#E67E4E]/10 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E67E4E]/0 via-[#E67E4E]/5 to-[#FF9B5E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-5 text-[#E67E4E] group-hover:scale-110 transition-transform duration-300 inline-block">
                <i className="fas fa-video"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E67E4E] transition-colors duration-300">
                Video Editing
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Cinematic edits and tutorials for YouTube content. Color grading and motion graphics.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#E67E4E] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Discover More</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}