import { ProductCard } from "../productCard";
import { ListStyled } from "./style";
import { listMockedCars } from "../../data";

export interface iAdvertsProps {
  isProfile?: boolean;
}

const Adverts = ({ isProfile }: iAdvertsProps) => {
  if (isProfile) {
    const list = listMockedCars.map((element, index) => {
      return <ProductCard element={element} key={element.title + index} />;
    });

    return <ListStyled isProfile>{list}</ListStyled>;
  }

  const list = listMockedCars.map((element, index) => {
    return <ProductCard element={element} key={element.title + index} />;
  });

  return <ListStyled>{list}</ListStyled>;
};

export default Adverts;
