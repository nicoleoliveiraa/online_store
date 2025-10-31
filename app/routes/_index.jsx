// import "../styles/styles.css";
import Filter from "../components/Filter";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader({ request }) {

	const url = new URL(request.url);
	const page = parseInt(url.searchParams.get("page")) || 1;
	const limit = 9;
	const skip = (page - 1) * limit;

	const categoriesRes = await fetch("https://dummyjson.com/products/categories");
	const categories = await categoriesRes.json();  	
	
	const productsRes = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
	const productsData = await productsRes.json();  
	
	return json({
    	categories,
    	products: productsData.products,
    	totalProducts: productsData.total,
    	currentPage: page,
    	itemsPerPage: limit, 
		lastProduct: skip
	});
}

export default function Index() {

	const { categories, products, totalProducts, currentPage, lastProduct } = useLoaderData();

    return(
      <div className="px-[24px] py-[24px] flex gap-[48px]">
        
        <div className="flex flex-col w-full md:w-4/5 gap-[20px] md:gap-[48px]">

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
