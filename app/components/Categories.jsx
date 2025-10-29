import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState } from "react";

export async function loader() {
	const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json();
  return { categories };
}

export default function Categories() {
	const { categories } = useLoaderData();
	console.log(categories);
	return(
		<p>...</p>
	);
}