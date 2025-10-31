
export default function CategoriesMobile() {

	return (
		<div className="block md:hidden">
			<button className="flex items-center text-inter border-[1px] rounded-[8px]
        		py-[4px] md:py-[8px] pr-[5px] pl-[8px] border-[#1F3044] border-opacity-70 
				gap-[4px] md:gap-[8px]">
				Categories
      			<i className={'ri-arrow-down-s-line'}></i>
			</button>
		</div>
	);
}