import BlackButton from "./BlackButton";
import ImagesCarousel from "./ImagesCarousel";

export default function ProductDetails({ product }) {
  const title = product.title;
  const images = product.images;
  const price = product.price;
  const description = product.description;
  const image = product.thumbnail;

  return (
    <div className="flex gap-[48px] p-[24px]">

      <ImagesCarousel images={images} />

      <div className="flex flex-col w-[400px] p-[24px] gap-[24px]">
        <div className="font-ubuntu text-[28px] leading-[32px] font-bold">
          <h1>{title}</h1>
          <h2>${price}</h2>
        </div>

        {/* <button
          type="button"
          onClick={() => alert("clicou!")}
          className="p-4 bg-blue-200"
        >
          Teste
        </button> */}

        <BlackButton className="w-full h-[36px]" buttonText="Add to Cart" />

        <div className="flex flex-col w-full py-[24px] gap-[24px] border-t border-[#1F3044]">
          <h3>Product details</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
