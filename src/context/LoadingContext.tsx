import { createContext, useContext, useState } from "react";
import { iChildren } from "../interfaces";

interface iLoadingProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext({} as iLoadingProps);

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: iChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
