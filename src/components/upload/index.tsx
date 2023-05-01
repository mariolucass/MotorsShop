import { FileList } from "./fileList";
import { Container, Content } from "./style";
import { Zone } from "./zone";

export const Upload = () => {
  return (
    <Container>
      <Content>
        <Zone />
        <FileList />
      </Content>
    </Container>
  );
};
