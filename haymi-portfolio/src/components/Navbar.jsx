// Navbar.jsx - Updated with Home, Projects, About, Contact
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "fas fa-home" },
    { name: "Projects", href: "/projects", icon: "fas fa-code" },
    { name: "About", href: "/about", icon: "fas fa-user" },
    { name: "Contact", href: "/contact", icon: "fas fa-envelope" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 px-6 lg:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-white to-[#E67E4E] bg-clip-text text-transparent hover:to-[#FF9B5E] transition-all duration-300">
          Haymi.Girma
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-2 text-white font-medium transition-all duration-300 hover:text-[#E67E4E] hover:translate-y-[-2px] group"
              >
                <i className={`${link.icon} text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-[-2px]`}></i>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 py-4 border-t border-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-2 text-white font-medium transition-all duration-300 hover:text-[#E67E4E]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={link.icon}></i>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}