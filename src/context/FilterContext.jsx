
import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <FilterContext.Provider value={{ query, setQuery, category, setCategory, priceRange, setPriceRange }}>
      {children}
    </FilterContext.Provider>
  );
}
