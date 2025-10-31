import { useState } from "react";

export default function SortButton() {
  const [sortBy, setSortBy] = useState("Relevance"); 
//   const [isOpen, setIsOpen] = useState(false);
	let isOpen = false;

  const options = ["Relevance", "Price: Low to High", "Price: High to Low", "Rating"];

return (
  <div className="relative inline-block text-left">
    <button
      onClick={() => alert("oi")}
      className="flex items-center text-inter border-[1px] rounded-[8px]
        py-[4px] md:py-[8px] pr-[10px] md:pr-[22px] pl-[20px] md:pl-[16px] 
        border-[#1F3044] border-opacity-70 gap-[4px] md:gap-[8px]"
    >
      Sort by
      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}></i>
    </button>

     {isOpen && (
      <div className="absolute left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              setSortBy(option);
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
	 )}
  </div>
);
}
