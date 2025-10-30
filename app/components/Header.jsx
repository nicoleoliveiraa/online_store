import { useState } from "react";
import "../styles/Header.css";
import "../styles/fonts.css";

export default function Header() {
  const links = ["Home", "Shop", "About", "Contact", "Blog"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-14 md:h-16 flex justify-between items-center 
      border-b border-black border-opacity-50 px-6 bg-white z-50">
      
      <h1 className="text-header text-[#1F3044] font-bebas">
        THE ONLINE STORE
      </h1>

      <nav className="hidden flex gap-6 font-inter">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="header-link text-[#1F3044] hover:text-blue-500 transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <i className="ri-search-line text-[#1F3044] text-lg"></i>
        <i className="ri-user-line text-[#1F3044] text-lg"></i>
        <i className="ri-shopping-bag-3-line text-[#1F3044] text-lg"></i>

        {/* BOTÃO HAMBÚRGUER (visível só no mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#1F3044] text-2xl focus:outline-none"
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <nav
          className="absolute top-16 left-0 w-full bg-white border-t border-black border-opacity-20
            flex flex-col items-center py-4 gap-4 md:hidden font-inter"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#1F3044] hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
