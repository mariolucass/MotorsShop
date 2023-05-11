import { ListStyled } from "./style";
import { EmptyList } from "../emptyList";
import { ProductCard } from "../productCard";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { iAdvertsProps, iAnnouncement } from "../../interfaces";
import { useAnnouncementContext, useDataContext } from "../../context";

export const Adverts = ({ isProfile, isHome }: iAdvertsProps) => {
  const navigate = useNavigate();

  const { AdvertsData } = useDataContext();
  const { setSpecificAdvertData } = useDataContext();
  const { userAdverts, announcementsProfile } = useAnnouncementContext();

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
      key={element ? element.id : ""}
      isProfile={isProfile}
      element={element}
      onClick={() => advertData(element ? element.id : "")}
    />
  ));

  return (
    <AnimatePresence>
      <ListStyled
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {!listToPick.length ? <EmptyList /> : list}
      </ListStyled>
    </AnimatePresence>
  );
};
