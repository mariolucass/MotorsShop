import { createContext, useContext, useState } from "react";
import { IChildren } from "../interfaces/global.interfaces";
import { IImage } from "../interfaces";

interface iContextProvider {
  uploadFiles: IImage[];
  handleUpload: (files: any) => void;
}

const UploadContext = createContext({} as iContextProvider);

export const useUploadContext = () => {
  return useContext(UploadContext);
};

export const UploadProvider = ({ children }: IChildren) => {
  const [uploadFiles, setUploadFiles] = useState<IImage[]>([]);
  const handleUpload = (files: IImage) =>
    setUploadFiles((el) => {
      el.push(files);
      return el;
    });

  return (
    <UploadContext.Provider
      value={{
        uploadFiles,
        handleUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
