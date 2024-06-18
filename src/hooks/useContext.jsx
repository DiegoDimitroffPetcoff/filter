import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, useFilters] = useState({
    Monthly: "all",
    Yearly: "all",
  });
  return (
    <FilterContext.Provider value={{filters, useFilters}}>
      {children}
    </FilterContext.Provider>
  );
};
