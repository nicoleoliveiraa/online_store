import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "@remix-run/react";

export default function SortButton() {

  	const [searchParams, setSearchParams] = useSearchParams();
  	const [isOpen, setIsOpen] = useState(false);
  	const dropdownRef = useRef(null);

  	const options = [
    	{ label: "Relevance", sortBy: null, order: null },
    	{ label: "Price: Low to High", sortBy: "price", order: "asc" },
    	{ label: "Price: High to Low", sortBy: "price", order: "desc" },
    	{ label: "Rating", sortBy: "rating", order: "desc" },
  	];

  	const currentLabel =
    	options.find(
      		(o) =>
        	o.sortBy === searchParams.get("sortBy") &&
        	o.order === searchParams.get("order")
    	)?.label || "Relevance";

  		useEffect(() => {
    		function handleClickOutside(event) {
      			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        			setIsOpen(false);
      			}
    		}
    
			document.addEventListener("mousedown", handleClickOutside);
    
			return () => document.removeEventListener("mousedown", handleClickOutside);
  
		}, []);

  
		const handleSelect = (option) => {
			setSearchParams((prev) => {
      
				const params = new URLSearchParams(prev);
      			
				if (option.sortBy && option.order) {
        			params.set("sortBy", option.sortBy);
        			params.set("order", option.order);
      			} else {
        			params.delete("sortBy");
        			params.delete("order");
      			}
      	
				return params;
    		});
    		
			setIsOpen(false);
  		};

  	return (
    	
		<div ref={dropdownRef} className="relative inline-block text-left">
      
	  		<button
        		onClick={() => setIsOpen((prev) => !prev)}
        		className="flex items-center text-inter border-[1px] md:rounded-[8px]
           			p-[8px] py-[4px] md:py-[8px] pr-[10px] md:pr-[22px] pl-[20px] md:pl-[16px] 
          			border-[#1F3044] border-opacity-40 md:border-opacity-70 gap-[4px] md:gap-[8px]"
      		>
        	
				{currentLabel}
		
				<i className={`ri-arrow-down-s-line transition-transform duration-200 ${
            		isOpen ? "rotate-180" : ""
          		}`}
        		></i>
      		</button>

      		{isOpen && (
        		<div className="absolute left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          			{options.map((option) => (
            			<button
              				key={option.label}
              				onClick={() => handleSelect(option)}
              				className={	`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                				currentLabel === option.label ? "bg-gray-100 font-semibold" : ""
              				}`}
            			>
              
			  				{option.label}
            			
						</button>
	          		))}
        		
				</div>
      		)}
    	</div>
  	);
}
