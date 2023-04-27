import { ReactNode, createContext, useContext, useState } from "react";

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterContext = createContext({} as iContextProvider);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }: iProps) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterContext.Provider value={{ showFilter, setShowFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
