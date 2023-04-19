import useMediaQuery from "@mui/material/useMediaQuery";
import React, { createContext } from "react";

interface iProps {
  children: React.ReactNode;
}

interface iContextProvider {
  matches500: boolean;
  matches700: boolean;
  matches900: boolean;
  matches1200: boolean;
}

export const MidiaContext = createContext({} as iContextProvider);

const MediaContextProvider = ({ children }: iProps) => {
  const matches500 = useMediaQuery("(min-width:500px)");
  const matches700 = useMediaQuery("(min-width:700px)");
  const matches900 = useMediaQuery("(min-width:900px)");
  const matches1200 = useMediaQuery("(min-width:1200px)");

  return (
    <MidiaContext.Provider
      value={{ matches500, matches700, matches900, matches1200 }}
    >
      {children}
    </MidiaContext.Provider>
  );
};

export default MediaContextProvider;
