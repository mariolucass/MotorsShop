import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./style";
import { useUploadContext } from "../../../context";

export const Zone = () => {
  const { uploadFiles, handleUpload } = useUploadContext();
  console.log(uploadFiles);
  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste as imagens aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Imagem não suportado</UploadMessage>;
    }

    return <UploadMessage type="sucess">Solte as imagens aqui</UploadMessage>;
  };
  return (
    <Dropzone accept={{ "image/*": [] }} onDropAccepted={handleUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
};
