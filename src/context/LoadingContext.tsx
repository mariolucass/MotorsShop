import { createContext, useContext, useState } from "react";
import { iChildren } from "../interfaces";

interface iLoadingProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingAdverts: boolean;
  setIsLoadingAdverts: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext({} as iLoadingProps);

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: iChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAdverts, setIsLoadingAdverts] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, isLoadingAdverts, setIsLoadingAdverts }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
