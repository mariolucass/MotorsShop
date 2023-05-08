import { dashboardImages } from "../../data";
import { ImgStyled, SwiperDiv } from "./style";
import { useMediaContext } from "../../context";
import { Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { animateTransitionItens } from "../../libs";

export const ImageSwiper = () => {
  const { matches500 } = useMediaContext();

  const listRender = dashboardImages.map((item) => (
    <SwiperSlide key={item.img} className="imageDiv">
      <ImgStyled src={item.img} alt={item.img} />
    </SwiperSlide>
  ));

  return (
    <SwiperDiv
      initial={{ opacity: 0, width: "0%", filter: "blur(10px)" }}
      animate={{ opacity: 1, width: "100%", filter: "blur(0px)" }}
      transition={{ ...animateTransitionItens, delay: 0.5 }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={matches500 ? 1 : 2}
        modules={[Autoplay, EffectCreative]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {listRender}
      </Swiper>
    </SwiperDiv>
  );
};
