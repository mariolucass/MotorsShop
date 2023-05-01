import { ListStyled } from "./style";
// import {} from "../../data";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../productCard";
import { useDataContext } from "../../context";

export interface iAdvertsProps {
  isProfile?: boolean;
}

export const Adverts = ({ isProfile }: iAdvertsProps) => {
  const { AdvertsData } = useDataContext();

  const navigate = useNavigate();

  const list = AdvertsData.map((element, index) => {
    return (
      <ProductCard
        isProfile={isProfile}
        element={element}
        key={/*element.title*/ +index}
        onClick={() => navigate("/advert/")}
      />
    );
  });

  return <ListStyled isProfile={isProfile}>{list}</ListStyled>;
};
