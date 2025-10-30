import RemixReact from "@remix-run/react";
const { useCatch, Link, useLoaderData } = RemixReact;
import ProductDetails from "../components/ProductDetails";


export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Erro {caught.status}</h1>
      <p>{caught.data || "Product not found 😢"}</p>
      <Link to="/">⬅ Back to products </Link>
    </div>
  );
}

export async function loader({ params }) {
	
	const { id } = params;

	const productRes = await fetch(`https://dummyjson.com/products/${id}`);
	const productData = await productRes.json();

	if (!productRes.ok) {
    	throw new Response("Product not found", { status: productRes.status });
 	}

	return (productData);

}

 
export default function productId() {

	const product = useLoaderData();

	// console.log(product);

	return (
		<ProductDetails product={product} />
	);
}