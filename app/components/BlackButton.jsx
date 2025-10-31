
export default function BlackButton({className, buttonText}) {

	return (
		
		<button className={`flex items-center justify-center font-robotoMono text-white p-[20px] bg-[#1F3044] ${className}`}>
			{buttonText}
		</button>
	);
}