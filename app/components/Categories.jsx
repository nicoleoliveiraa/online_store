import { useState } from "react";

export default function Categories({categories}) {

  const [selected, setSelected] = useState([]);

  function handleCheckbox(slug) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  return (
    <section className="hidden md:block px-4">
      <h4 className="text-inter py-[20px]">Categories</h4>

	  <ul className="space-y-2 w-full max-w-[240px] pb-4">
        {categories.map((cat) => (
          <li key={cat.slug} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={cat.slug}
              checked={selected.includes(cat.slug)}
              onChange={() => handleCheckbox(cat.slug)}
              className="accent-[#1F3044] w-[24px] h-[24px]"
            />
            <label
              htmlFor={cat.slug}
              className="font-inter text-[15px] text-[#1F3044] leading-[20px]"
			>
              {cat.name}
            </label>
          </li>
        ))}
      </ul>
	  <hr className="border-[#1F3044] opacity-50" />
    </section>
  );
}
