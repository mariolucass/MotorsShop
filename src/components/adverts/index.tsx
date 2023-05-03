import { ListStyled } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../productCard";
import { useAnnouncementContext, useDataContext } from "../../context";

export interface iAdvertsProps {
  isProfile?: boolean;
  isHome?: boolean;
}

export const Adverts = ({ isProfile, isHome }: iAdvertsProps) => {
  const { AdvertsData, setAdvertId } = useDataContext();
  const { userAdverts, announcementsProfile } = useAnnouncementContext();

  const advertData = (id: string) => {
    setAdvertId(id);
    navigate(`/advert/`);
    localStorage.setItem("@MotorsShop:advert", id);
  };

  const navigate = useNavigate();

  const { userId } = useParams();

  const listToPick = isHome
    ? AdvertsData
    : userId
    ? userAdverts
    : announcementsProfile;

  const list = listToPick.map((element) => (
    <ProductCard
      key={element.id}
      isProfile={isProfile}
      element={element}
      onClick={() => advertData(element.id)}
    />
  ));

  return <ListStyled isProfile={isProfile}>{list}</ListStyled>;
};
