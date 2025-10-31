import "../styles/Header.css";
import "../styles/fonts.css"

export default function Header(){
	const links = ["Home", "Shop", "About", "Contact", "Blog"];

	return(
		<header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center 
			border-b border-black border-opacity-50 px-[24px] bg-white z-50">
			<h1 className="text-header text-[#1F3044] font-bebas">
				THE ONLINE STORE
			</h1>

			<nav className="hidden md:flex gap-6 font-inter">
        		{links.map((link) => (
         			<a
            			key={link}
            			href={`/${link.toLowerCase()}`}
            			className="header-link text-[#1F3044] hover:text-blue-500 transition-colors"
          			>
            		{link}
          			</a>
        		))}
      		</nav>
			<button
          className="text-3xl font-bold underline"
          onClick={() => alert("Botão clicado!")}
        >
          Clique aqui
        </button>

			<div className="flex gap-[24px]">
			<i className="ri-search-line h-[24px] w-[24px] text-[#1F3044]"></i>
			<i className="ri-user-line h-[24px] w-[24px] text-[#1F3044]"></i>
			<i className="ri-shopping-bag-3-line h-[24px] w-[24px] text-[#1F3044]"></i>				
			</div>
		</header>
	);
}