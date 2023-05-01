import { useUploadContext } from "../../context";
import { FileList } from "./fileList";
import { Container, Content } from "./style";
import { Zone } from "./zone";

export const Upload = () => {
  const { uploadFiles } = useUploadContext();

  return (
    <Container>
      <Content>
        <Zone />
        {!!uploadFiles.length && <FileList />}
      </Content>
    </Container>
  );
};
