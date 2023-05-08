import { Container, Box } from "./style";
import imgEmpty from "../../assets/imgEmpty.svg";

export const EmptyList = () => {
  return (
    <Container>
      <Box>
        <h2>Parece que não há nenhum anúncio por aqui ainda...</h2>
        <span>Relaxe que logo haverá novos produtos!</span>
        <img src={imgEmpty} alt="Empty List" />
      </Box>
    </Container>
  );
};
