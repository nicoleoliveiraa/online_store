import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
	const [currentPage, setCurrentPage] = useState(1);

	return (
   		<StoreContext.Provider
    		value={{
				currentPage
	  		}}
	  	>
      		{children}
    	</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}