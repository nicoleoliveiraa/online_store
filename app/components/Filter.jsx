import SortButton from "./SortButton";

export default function Filter({lastProduct, totalProducts}) {

	return (
    	<div>
      		<div className="flex justify-between items-center">
				
				<SortButton />

        		<p className="text-inter">Showing {lastProduct + 1}-{lastProduct + 9 < totalProducts ? lastProduct + 9 : totalProducts} of {totalProducts}</p>
				
      		</div>
    	</div>
  	);
}
