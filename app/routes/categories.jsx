import Filter from "../components/Filter";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader({ request }) {

	
}

export default function categories() {

	const { categories, products, totalProducts, currentPage, lastProduct } = useLoaderData();
	
		return(
		  <div className="px-[24px] py-[24px] flex gap-[48px]">
			
			<div className="flex flex-col w-4/5 gap-[48px]">
	
				<Filter
					lastProduct={lastProduct}
					totalProducts={totalProducts}
				/>
	
				<Products products={products} />	
				
				<Pagination
				  totalItems={totalProducts}
				  currentPage={currentPage}
				/>
	
			</div>
	
				<Categories categories={categories} />
		  	</div>
		);
}