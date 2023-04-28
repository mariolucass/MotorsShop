import { ListStyled } from "./style";
import { listMockedCars } from "../../data";
import { ProductCard } from "../productCard";
import { IAdvertsProps } from "../../interfaces";

export const Adverts = ({ isProfile }: IAdvertsProps) => {
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
