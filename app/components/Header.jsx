import { useState } from "react";

export default function Header() {
  const links = ["Home", "Products", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full h-16 flex justify-between items-center 
			border-b border-black border-opacity-50 px-[24px] bg-white z-50"
    >

      <h1
        className="text-[#1F3044] font-bebas text-[1.5rem] md:text-[2rem]
				tracking-[0.06em] leading-[100%]"
      >
        THE ONLINE STORE
      </h1>

      <nav className="hidden md:flex gap-6 font-inter">
        {links.map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="header-link text-[#1F3044] font-[15px] hover:text-gray-400 transition-colors
							leading-[20px] tracking-[0px]"
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        className="md:hidden flex flex-col justify-center items-center gap-[4px] w-[32px] h-[32px]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[2px] w-6 bg-[#1F3044] transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-[#1F3044] transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-[#1F3044] transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </button>

      <div className="hidden md:flex gap-[24px]">
        <i className="ri-search-line h-[24px] w-[24px] text-[#1F3044]"></i>
        <i className="ri-user-line h-[24px] w-[24px] text-[#1F3044]"></i>
        <i className="ri-shopping-bag-3-line h-[24px] w-[24px] text-[#1F3044]"></i>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
          <nav className="flex flex-col items-center py-4 font-inter gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#1F3044] text-[16px] hover:text-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}

            <div className="flex gap-[24px] mt-4">
              <i className="ri-search-line h-[24px] w-[24px] text-[#1F3044]"></i>
              <i className="ri-user-line h-[24px] w-[24px] text-[#1F3044]"></i>
              <i className="ri-shopping-bag-3-line h-[24px] w-[24px] text-[#1F3044]"></i>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
