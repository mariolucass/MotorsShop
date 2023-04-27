import { createContext, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IChildren } from "../interfaces/global.interfaces";

interface iContextProvider {
  matches500: boolean;
  matches700: boolean;
  matches900: boolean;
  matches1200: boolean;
}

const MediaContext = createContext({} as iContextProvider);

export const useMediaContext = () => {
  return useContext(MediaContext);
};

export const MediaProvider = ({ children }: IChildren) => {
  const matches500 = useMediaQuery("(max-width:500px)");
  const matches700 = useMediaQuery("(max-width:700px)");
  const matches900 = useMediaQuery("(max-width:900px)");
  const matches1200 = useMediaQuery("(max-width:1200px)");

  return (
    <MediaContext.Provider
      value={{ matches500, matches700, matches900, matches1200 }}
    >
      {children}
    </MediaContext.Provider>
  );
};
