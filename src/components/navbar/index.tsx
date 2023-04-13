import { useState } from "react";
import {
  Container,
  TitleNavBar,
  TitlesFilter,
  ListElements,
  Box,
  Input,
  Button,
} from "./style";
// import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  widthSize: number;
}

export const NavBar = ({ widthSize }: IProps) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <div className={widthSize < 700 ? "ocult" : ""}>
      <Container isClosed={isClosed}>
        <TitleNavBar>
          {/* <span>Filtro</span>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsClosed(!isClosed);
            }}
          /> */}
        </TitleNavBar>
        <TitlesFilter>Marca</TitlesFilter>
        <ListElements>
          <li>General Motos</li>
          <li>Fiat</li>
          <li>Ford</li>
          <li>Honda</li>
          <li>Toyota</li>
          <li>Volswagen</li>
        </ListElements>
        <TitlesFilter>Modelo</TitlesFilter>
        <ListElements>
          <li>Civic</li>
          <li>Corolla</li>
          <li>Cruze</li>
          <li>Fit</li>
          <li>Gol</li>
          <li>Ka</li>
          <li>Onix</li>
          <li>Pulse</li>
        </ListElements>
        <TitlesFilter>Cor</TitlesFilter>
        <ListElements>
          <li>Azul</li>
          <li>Branca</li>
          <li>Cinza</li>
          <li>Prata</li>
          <li>Preta</li>
          <li>Verde</li>
        </ListElements>
        <TitlesFilter>Ano</TitlesFilter>
        <ListElements>
          <li>2021</li>
          <li>2018</li>
          <li>2015</li>
          <li>2013</li>
          <li>2022</li>
          <li>2012</li>
          <li>2010</li>
        </ListElements>
        <TitlesFilter>Combustível</TitlesFilter>
        <ListElements>
          <li>Diesel</li>
          <li>Etanol</li>
          <li>Gasolina</li>
          <li>Flex</li>
        </ListElements>
        <TitlesFilter>Km</TitlesFilter>
        <ListElements>
          <li>
            <Box>
              <Input type="text" placeholder="Mínima" />
              <Input type="text" placeholder="Máxima" />
            </Box>
          </li>
        </ListElements>
        <TitlesFilter>Preço</TitlesFilter>
        <ListElements>
          <li>
            <Box>
              <Input type="text" placeholder="Mínimo" />
              <Input type="text" placeholder="Máximo" />
            </Box>
          </li>
        </ListElements>
        <Box>
          <Button
            onClick={() => {
              setIsClosed(!isClosed);
            }}
          >
            Ver anúncios
          </Button>
        </Box>
      </Container>
    </div>
  );
};
