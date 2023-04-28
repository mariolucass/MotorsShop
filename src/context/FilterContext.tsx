import { ReactNode, createContext, useContext, useState } from "react";

interface iProps {
  children: ReactNode;
}

interface iContextProvider {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  Marca: string | undefined;
  setMarca: React.Dispatch<React.SetStateAction<string | undefined>>;
  Modelo: string | undefined;
  setModelo: React.Dispatch<React.SetStateAction<string | undefined>>;
  Cor: string | undefined;
  setCor: React.Dispatch<React.SetStateAction<string | undefined>>;
  Ano: string | undefined;
  setAno: React.Dispatch<React.SetStateAction<string | undefined>>;
  Combustivel: string | undefined;
  setCombustivel: React.Dispatch<React.SetStateAction<string | undefined>>;
  MaxKm: string | undefined;
  setMaxKm: React.Dispatch<React.SetStateAction<string | undefined>>;
  MinKm: string | undefined;
  setMinKm: React.Dispatch<React.SetStateAction<string | undefined>>;
  MaxPrice: string | undefined;
  setMaxPrice: React.Dispatch<React.SetStateAction<string | undefined>>;
  MinPrice: string | undefined;
  setMinPrice: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FilterContext = createContext({} as iContextProvider);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }: iProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [Marca, setMarca] = useState<string | undefined>();
  const [Modelo, setModelo] = useState<string | undefined>();
  const [Cor, setCor] = useState<string | undefined>();
  const [Ano, setAno] = useState<string | undefined>();
  const [Combustivel, setCombustivel] = useState<string | undefined>();
  const [MaxKm, setMaxKm] = useState<string | undefined>();
  const [MinKm, setMinKm] = useState<string | undefined>();
  const [MaxPrice, setMaxPrice] = useState<string | undefined>();
  const [MinPrice, setMinPrice] = useState<string | undefined>();

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilter,
        Marca,
        setMarca,
        Cor,
        setCor,
        Ano,
        setAno,
        Combustivel,
        setCombustivel,
        MaxKm,
        setMaxKm,
        MaxPrice,
        setMaxPrice,
        Modelo,
        setModelo,
        MinKm,
        setMinKm,
        MinPrice,
        setMinPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
