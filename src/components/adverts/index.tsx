import { ListStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../productCard";
import { useDataContext } from "../../context";

export interface iAdvertsProps {
  isProfile?: boolean;
}

export const Adverts = ({ isProfile }: iAdvertsProps) => {
  const { AdvertsData, setAdvertId } = useDataContext();

  const advertData = (id: string) => {
    setAdvertId(id);
    navigate("/advert/");
    localStorage.setItem("@MotorsShop:advert", id);
  };

  const navigate = useNavigate();

  const list = AdvertsData.map((element, index) => {
    return (
      <ProductCard
        isProfile={isProfile}
        element={element}
        key={/*element.title*/ +index}
        onClick={() => advertData(element.id)}
      />
    );
  });

  return <ListStyled isProfile={isProfile}>{list}</ListStyled>;
};
