import { Link } from "@remix-run/react";

export default function Product({ product }) {

	return(
		<div>
			<Link to={`/product/${product.id}`}>
			<img 
			src={product.thumbnail}
			alt={product.title}
			className="w-[336px] h-[336px] border border-gray-300 opacity-10 hover:opacity-100 
			transition-opacity duration-300 object-cover"
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

