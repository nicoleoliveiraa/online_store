import { createContext, useContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const addCategory = (category) => {
    setSelectedCategories((prev) => {
      if (!prev.includes(category)) {
        return [...prev, category];
      }
      return prev;
    });
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

   const clearCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <CategoryContext.Provider
      value={{
        selectedCategories,
        addCategory,
        removeCategory,
        clearCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}