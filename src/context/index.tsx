import React, { createContext } from "react";

export interface iProps {
  children: React.ReactNode;
}

export const myContext = createContext({});

const ContextProvider = ({ children }: iProps) => {
  return <myContext.Provider value={{}}>{children}</myContext.Provider>;
};

export default ContextProvider;
