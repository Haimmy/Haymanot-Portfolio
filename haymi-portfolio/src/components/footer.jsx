export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-950 border-t border-gray-800 mt-20">
      {/* Glow effect at the top of footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E67E4E]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-[#E67E4E] bg-clip-text text-transparent">
              Haymi.Girma
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting immersive digital experiences through 3D art, video editing, and web development.
              Let's create something extraordinary together.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 hover:translate-y-[-3px]">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 hover:translate-y-[-3px]">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 hover:translate-y-[-3px]">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 hover:translate-y-[-3px]">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 hover:translate-y-[-3px]">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E67E4E] rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {["Home", "About Me", "My Work", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 flex items-center gap-2 group">
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E67E4E] rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {["3D Modeling", "Frontend Dev", "Video Editing", "UI/UX Design"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-[#E67E4E] transition-all duration-300 flex items-center gap-2 group">
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#E67E4E] rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm">
              Get the latest updates on my projects and creative journey.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-gray-900/50 rounded-full border border-gray-700 focus-within:border-[#E67E4E] transition-all duration-300">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-transparent px-4 py-2 text-white text-sm outline-none rounded-full"
                />
                <button className="bg-[#E67E4E] hover:bg-[#FF9B5E] text-black px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 mr-1">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <i className="fas fa-envelope"></i>
                <span>haymigirma26@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <i className="fas fa-phone"></i>
                <span>+251 987 221 138</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {currentYear} Haymi Girma. All rights reserved. | Crafted with 
            <i className="fas fa-heart text-[#E67E4E] mx-1 animate-pulse"></i> 
            for creative excellence
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#E67E4E] transition-colors duration-300 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#E67E4E] transition-colors duration-300 text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-[#E67E4E] transition-colors duration-300 text-xs">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#E67E4E] hover:bg-[#FF9B5E] text-black w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#FF9B5E] z-50 flex items-center justify-center group"
      >
        <i className="fas fa-arrow-up group-hover:translate-y-[-2px] transition-transform duration-300"></i>
      </button>
    </footer>
  );
}