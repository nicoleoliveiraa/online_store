
export default function BlackButton({className, buttonText}) {

	return (
		
		<button className={`font-robotoMono text-white py-[8px] px-[16px] bg-[#1F3044] ${className}`}>
			{buttonText}
		</button>
	);
}