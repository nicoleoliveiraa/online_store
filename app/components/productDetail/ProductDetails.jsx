import BlackButton from "./BlackButton";
import ImagesCarousel from "./ImagesCarousel";

export default function ProductDetails({ product }) {
  const { title, images, price, description } = product;

  return (
    <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[48px] p-[24px] md:pr-[50px]">

      <div className="flex items-center justify-center w-full lg:w-2/3 h-full lg:h-[542px]">
        <div className="w-4/5 bg-black bg-opacity-10 rounded-lg overflow-hidden">
          <ImagesCarousel images={images} />
        </div>
      </div>

      <div className="flex flex-col w-full lg:max-w-[600px] p-[24px] gap-[24px]">
        <div className="font-ubuntu text-[28px] leading-[32px] font-bold text-[#1F3044]">
          <h1>{title}</h1>
          <h2 className="text-[22px] mt-2">${price}</h2>
        </div>

        <BlackButton className="w-full h-[36px]" buttonText="Add to Cart" />

        <div className="flex flex-col w-full py-[24px] gap-[15px] border-t border-[#1F3044]">
          <h3 className="font-semibold text-[#1F3044]">Product details</h3>
          <p className="text-[#1F3044] opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
}
