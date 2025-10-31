import { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";

export default function Categories({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const current = searchParams.get("category");
    setSelected(current || "");
  }, [searchParams]);

  function handleCheckbox(slug) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (selected === slug) {
        params.delete("category");
        setSelected("");
      } else {
        params.set("category", slug);
        setSelected(slug);
      }

      params.set("page", "1");

      return params;
    });
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
              checked={selected === cat.slug}
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
