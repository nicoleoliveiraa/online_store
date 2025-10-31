import { useSearchParams } from "@remix-run/react";

export default function Pagination({ totalItems, currentPage }) {

  	const totalPages = Math.ceil(totalItems / 9);
  	const [searchParams, setSearchParams] = useSearchParams();

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

  	const updatePage = (page) => {
    	setSearchParams((prev) => {
      		
			const params = new URLSearchParams(prev);
      		
			params.set("page", page);
      		return params;
    	});
  	};

  	return (

    	<div className="flex justify-end items-center gap-2 py-4">
      
      		<button
        		onClick={() => updatePage(Math.max(currentPage - 1, 1))}
        		disabled={currentPage === 1}
        		className="px-3 py-1 border-none text-inter text-[#1F3044] disabled:opacity-40"
      		>

        		<i className="ri-arrow-left-s-line"></i>
		
			</button>
		
      		{getVisiblePages(currentPage, totalPages).map((page, index) =>
        		page === "..." ? (
        	  		<span key={index} className="px-3 py-1">
        	    		...
        	  		</span>
        		) : (
				
					<button
        	    		key={index}
        	    		onClick={() => updatePage(page)}
        	    		className={`px-3 py-1 rounded-md text-inter ${
        	    	  		currentPage === page
        	    	    	? "bg-[#1F3044] text-white"
        	    	    	: "text-[#1F3044] hover:font-bold"
        	    		}`}
        	  		>
					
						{page}
					
					</button>
        		)
      		)}

	    	<button
        		onClick={() => updatePage(Math.min(currentPage + 1, totalPages))}
        		disabled={currentPage === totalPages}
        		className="px-3 py-1 border-none text-inter text-[#1F3044] disabled:opacity-40"
      		>
			
				<i className="ri-arrow-right-s-line"></i>
		
	  		</button>
    
		</div>
  	);
}
