import { createContext, useContext } from "react";
import { iChildren, iImage } from "../interfaces";
import { useUserContext } from "./UserContext";

interface iContextProvider {
  handleUpload: (files: any) => void;
}

const UploadContext = createContext({} as iContextProvider);

export const useUploadContext = () => {
  return useContext(UploadContext);
};

export const UploadProvider = ({ children }: iChildren) => {
  const { setUploadFiles } = useUserContext();
  const handleUpload = (files: iImage) =>
    setUploadFiles((el) => {
      el.push(files);
      return el;
    });

  return (
    <UploadContext.Provider
      value={{
        handleUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
