import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { Container, FileInfo, Preview } from "./style";

export const FileList = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://res.cloudinary.com/dyxxzrct5/image/upload/v1682866995/ago9e5onxze6ydmwawdf.jpg" />
          <div>
            <strong>profile.png</strong>
            <span>
              64 kb <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </FileInfo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircularProgressbar
            styles={{ root: { width: 24 }, path: { stroke: "#4529e6" } }}
            strokeWidth={10}
            value={60}
          />
          <a href="#" target="_blank">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <MdCheckCircle size={24} color="#18794e" />
          <MdError size={24} color="#cd2b31" />
        </div>
      </li>
    </Container>
  );
};
