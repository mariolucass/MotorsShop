import { CardDiv, DivSwiper } from "./style";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { iAnnouncement } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { LastPromotionsCard } from "./mostSearchedProductCard";
import { useDataContext, useMediaContext } from "../../context";

export const LastPromotionAdverts = () => {
  const navigate = useNavigate();
  const { setSpecificAdvertData, announcementsDash } = useDataContext();
  const { matches500 } = useMediaContext();

  const advertData = (id: string) => {
    setSpecificAdvertData({} as iAnnouncement);
    navigate(`/advert/${id}`);
  };

  const list = announcementsDash.map((element) => (
    <SwiperSlide key={element.id}>
      <CardDiv>
        <LastPromotionsCard
          element={element}
          onClick={() => advertData(element.id)}
        />
      </CardDiv>
    </SwiperSlide>
  ));

  return (
    <AnimatePresence>
      <DivSwiper>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={matches500 ? 1 : 3}
          loop={true}
          navigation={true}
        >
          {list}
        </Swiper>
      </DivSwiper>
    </AnimatePresence>
  );
};
