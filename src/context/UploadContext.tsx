import { createContext, useContext, useState } from "react";
import { iChildren, iImage, iUpload } from "../interfaces";
import { filesize } from "filesize";
import { uniqueId } from "lodash";
import { FileWithPath } from "react-dropzone";
import { apiUsingNow } from "../services";

interface iContextProvider {
  uploadFiles: iUpload[];
  setUploadFiles: React.Dispatch<React.SetStateAction<iUpload[]>>;
  handleUpload: (files: any) => void;
  handleDelete: (id: string) => Promise<void>;
}

const UploadContext = createContext({} as iContextProvider);

export const useUploadContext = () => {
  return useContext(UploadContext);
};

export const UploadProvider = ({ children }: iChildren) => {
  const [uploadFiles, setUploadFiles] = useState<iUpload[]>([]);

  const handleUpload = (images: FileWithPath[]) => {
    let file: iUpload;
    images.forEach((image) => {
      const { name, size } = image;
      file = {
        image,
        name,
        size,
        id: uniqueId(),
        readableSize: String(filesize(size)),
        preview: URL.createObjectURL(image),
        progress: 0,
        uploaded: false,
        error: false,
        url: "",
        key: "",
      };
      setUploadFiles((el) => {
        el.push(file);
        return el;
      });
      uploadFiles.forEach(processUpload);
    });
  };

  const removeUrl = (id: string) => {
    uploadFiles.forEach((el) => {
      if (el.id === id) {
        URL.revokeObjectURL(el.preview);
      }
    });
  };

  const removeFile = (id: string) => {
    setUploadFiles((el) => {
      return el.filter((file) => file.id !== id);
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await apiUsingNow.delete(`/images/${id}`);

      removeFile(id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFile = (id: string, data: any) => {
    setUploadFiles((el) => {
      return el.map((file) => {
        return id === file.id ? { ...file, ...data } : file;
      });
    });
  };

  const processUpload = ({ image, id }: iUpload) => {
    const data = new FormData();
    if (image) {
      data.append("image", image);
    }
    apiUsingNow
      .post<iImage>("/images", data, {
        onUploadProgress: ({ loaded, total }) => {
          if (total) {
            const progress = parseInt(
              String(Math.round((loaded * 100) / total))
            );
            updateFile(id, { progress });
          }
        },
      })
      .then(({ data }) => {
        removeUrl(id);
        updateFile(id, { uploaded: true, id: data.id, url: data.url });
      })
      .catch(() => {
        updateFile(id, { error: true });
      });
  };

  return (
    <UploadContext.Provider
      value={{
        uploadFiles,
        setUploadFiles,
        handleUpload,
        handleDelete,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
