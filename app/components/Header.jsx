import "../styles/Header.css";
import "../styles/fonts.css"

export default function Header(){
	const links = ["Home", "Shop", "About", "Contact", "Blog"];

	return(
		<header className="h-16 flex justify-between items-center border-b border-black px-[24px]">
			<h1 className="text-header text-[#1F3044] font-bebas">
				THE ONLINE STORE
			</h1>

			<nav className="hidden md:flex gap-6 font-inter">
        		{links.map((link) => (
         			<a
            			key={link}
            			href={`#${link.toLowerCase()}`}
            			className="header-link text-[#1F3044] hover:text-blue-500 transition-colors"
          			>
            		{link}
          			</a>
        		))}
      		</nav>

			<div className="flex gap-[24px]">
			<i class="ri-search-line h-[18px] w-[18px] text-[#1F3044]"></i>
			<i class="ri-user-line h-[18px] w-[18px] text-[#1F3044]"></i>
			<i class="ri-shopping-bag-3-line h-[18px] w-[18px] text-[#1F3044]"></i>				
			</div>
		</header>
	);
}