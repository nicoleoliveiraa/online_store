import ProductDetails from "../components/productDetail/ProductDetails";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
	
	const { id } = params;

	const productRes = await fetch(`https://dummyjson.com/products/${id}`);
	const productData = await productRes.json();

	return (productData);

}

 
export default function productId() {

	const product = useLoaderData();

	return (
		<ProductDetails product={product} />
	);
}