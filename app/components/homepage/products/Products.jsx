import Product from "./Product";

export default function Products({products}) {

	return (
    	
		<div className="w-full">
    	
			<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
		
				{products.map((product) => (
        			<Product key={product.id} product={product} />
      			))}
	
			</div>
    	
		</div>
  	
	);
}
