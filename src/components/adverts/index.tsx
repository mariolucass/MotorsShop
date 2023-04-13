import { ProductCard } from "../productCard";
import { ListStyled } from "./style";
import { listMockedCars } from "../../data";

const Adverts = () => {
  const list = listMockedCars.map((element, index) => {
    return <ProductCard element={element} key={element.title + index} />;
  });

  return <ListStyled>{list}</ListStyled>;
};

export default Adverts;
