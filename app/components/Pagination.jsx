import { Link } from "@remix-run/react";

export default function Pagination({ totalItems, currentPage }) {
	const totalPages = Math.ceil(totalItems / 9);
	
	const getVisiblePages = (currentPage, totalPages) => {
    const pages = [];
	
    if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
		pages.push(1);
		
		let start = Math.max(2, currentPage - 1);
		let end = Math.min(totalPages - 1, currentPage + 1);
		
		if (currentPage === 1) end = 3;
		if (currentPage === totalPages) start = totalPages - 2;
		
		if (start > 2) pages.push("...");
		
		for (let i = start; i <= end; i++) pages.push(i);
		
		if (end < totalPages - 1) pages.push("...");
		
		pages.push(totalPages);
    }
	
	    return pages;
	};

	return (
		<div className="flex justify-end items-center gap-2 py-4">
    		<Link
        		to={`/?page=${Math.max(currentPage - 1, 1)}`}
        		className="px-3 py-1 border-none text-inter border-gray-300 disabled:opacity-50"
    		>
        		<i className="ri-arrow-left-s-line"></i>
      		</Link>

    		{getVisiblePages(currentPage, totalPages).map((page, index) =>
        		page === "..." ? (
        		<span key={index} className="px-3 py-1">
        	    	...
        	  	</span>
        		) : (
        	  	<Link
        	    	key={index}
        	    	to={`/?page=${page}`}
        	    	className={`px-3 py-1 rounded-md text-inter ${
        	      		currentPage === page
        	        	? "bg-[#1F3044] !text-white"
        	        	: "text-[#1F3044] hover:font-bold"
        	    	}`}
        	  	>
        	    	{page}
        	  	</Link>
        		)
    		)}

      		<Link
        		to={`/?page=${Math.min(currentPage + 1, totalPages)}`}
        		className="px-3 py-1 border-none text-inter border-gray-300 disabled:opacity-50"
      		>
        		<i className="ri-arrow-right-s-line"></i>
      		</Link>
    	</div>
  	);
}
