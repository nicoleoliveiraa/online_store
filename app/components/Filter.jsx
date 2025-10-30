import SortButton from "./SortButton";

export default function Filter({lastProduct, totalProducts}) {

	// const [isOpen, setIsOpen] = useState(false);

	return (
    	<div>
      		<div className="flex justify-between items-center">

        		{/* <button className="flex items-center text-inter border-[1px] rounded-[8px] 
					py-[8px] pr-[12px] pl-[16px] border-[#1F3044] border-opacity-70 gap-[8px]">
          			Sort by
          			<i class="ri-arrow-down-s-line"></i>
        		</button> */}
				<SortButton />

        		<p className="text-inter">Showing {lastProduct + 1}-{lastProduct + 9 < totalProducts ? lastProduct + 9 : totalProducts} of {totalProducts}</p>
				
      		</div>
    	</div>
  	);
}
