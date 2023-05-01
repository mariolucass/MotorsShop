import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { Container, FileInfo, Preview } from "./style";
import { useUploadContext } from "../../../context";

export const FileList = () => {
  const { uploadFiles, handleDelete } = useUploadContext();
  return (
    <Container>
      {uploadFiles.map((el) => (
        <li key={el.id}>
          <FileInfo>
            <Preview src={el.preview} />
            <div>
              <strong>{el.name}</strong>
              <span>
                {el.readableSize}
                {el.url !== "" && (
                  <button
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                  >
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!el.uploaded && !el.error && (
              <CircularProgressbar
                styles={{ root: { width: 24 }, path: { stroke: "#4529e6" } }}
                strokeWidth={10}
                value={el.progress}
              />
            )}
            {el.url !== "" && (
              <a href={el.url} target="_blank" rel="noreferrer">
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {el.uploaded && <MdCheckCircle size={24} color="#18794e" />}
            {el.error && <MdError size={24} color="#cd2b31" />}
          </div>
        </li>
      ))}
    </Container>
  );
};
