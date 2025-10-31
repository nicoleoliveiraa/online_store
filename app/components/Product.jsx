import { Link } from "@remix-run/react";

export default function Product({ product }) {

	return(
		<div className="border lg:border-none p-4">
			<Link to={`/product/${product.id}`}>
			<img 
			src={product.thumbnail}
			alt={product.title}
			className="w-1/2 h-1/2 md:w-[336px] md:h-[336px] lg:border border-gray-300 lg:opacity-10 hover:opacity-100 
			transition-opacity duration-300 object-scale-down"
			/>
			</Link>
			
			<div>
				<h3 className="text-inter">
					{product.title}
				</h3>
				<p className="text-inter">
					${product.price}
				</p>
			</div>
		</div>
	);
}

