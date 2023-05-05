import { ListStyled } from "./style";
import { ProductCard } from "../productCard";
import { iAdvertsProps, iAnnouncement } from "../../interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useAnnouncementContext, useDataContext } from "../../context";
import { AnimatePresence } from "framer-motion";
import { EmptyList } from "../emptyList";

export const Adverts = ({ isProfile, isHome }: iAdvertsProps) => {
  const navigate = useNavigate();

  const { AdvertsData } = useDataContext();
  const { userAdverts, announcementsProfile } = useAnnouncementContext();
  const { setSpecificAdvertData } = useDataContext();

  const advertData = (id: string) => {
    setSpecificAdvertData({} as iAnnouncement);
    navigate(`/advert/${id}`);
  };

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

  return (
    <AnimatePresence>
      <ListStyled
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {listToPick.length == 0 ? <EmptyList></EmptyList> : list}
      </ListStyled>
    </AnimatePresence>
  );
};
