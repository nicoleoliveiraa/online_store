import CategoriesMobile from "./CategoriesMobile";
import SortButton from "./SortButton";

export default function Filter({lastProduct, totalProducts}) {

	return (
    	<div>
      		<div className="flex flex-col md:flex-row justify-between items-center gap-[10px]">
				
				<div className="flex gap-[100px] justify-end">
					<SortButton />
					<CategoriesMobile />
				</div>

        		<p className="text-inter">Showing {lastProduct + 1}-{lastProduct + 9 < totalProducts ? lastProduct + 9 : totalProducts} of {totalProducts}</p>
				
      		</div>
    	</div>
  	);
}
