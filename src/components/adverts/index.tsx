import { ProductCard } from "../productCard";
import { ListStyled } from "./style";
import { listMockedCars } from "../../data";

export interface iAdvertsProps {
  isProfile?: boolean;
}

const Adverts = ({ isProfile }: iAdvertsProps) => {
  const list = listMockedCars.map((element, index) => {
    return (
      <ProductCard
        isProfile={isProfile}
        element={element}
        key={element.title + index}
      />
    );
  });

  return <ListStyled isProfile={isProfile}>{list}</ListStyled>;
};

export default Adverts;
