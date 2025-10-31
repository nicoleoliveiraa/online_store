import BlackButton from "./BlackButton";
import ImagesCarousel from "./ImagesCarousel";

export default function ProductDetails({ product }) {
  const title = product.title;
  const images = product.images;
  const price = product.price;
  const description = product.description;
  const image = product.thumbnail;

  return (
    <div className="flex flex-col md:flex-row gap-[20px] min-h-screen md:gap-[48px] p-[24px] md:pr-[50px]">

      <ImagesCarousel images={images} />

      <div className="flex flex-col w-full md:w-[400px] p-[24px] gap-[24px]">
        <div className="font-ubuntu text-[28px] leading-[32px] font-bold">
          <h1>{title}</h1>
          <h2>${price}</h2>
        </div>

        <BlackButton className="w-full h-[36px]" buttonText="Add to Cart" />

        <div className="flex flex-col w-full py-[24px] gap-[15px] border-t border-[#1F3044]">
          <h3>Product details</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
