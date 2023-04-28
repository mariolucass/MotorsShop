import { ListStyled } from "./style";
import { listMockedCars } from "../../data";
import { useEffect, useState } from "react";
import { apiLocalHostToken } from "../../services";
import { useNavigate } from "react-router-dom";

export interface iAdvertsProps {
  isProfile?: boolean;
}

export const Adverts = ({ isProfile }: iAdvertsProps) => {
  const [teste, setteste] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      apiLocalHostToken
        .get(`/announcements`)
        .then((res) => setteste(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const list = teste.map((element, index) => {
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
