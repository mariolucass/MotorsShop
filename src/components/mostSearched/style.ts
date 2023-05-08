import { motion } from "framer-motion";
import styled from "styled-components";
import { iAdvertsProps } from "../../interfaces";

export const ListStyled = styled(motion.ul)<iAdvertsProps>`
  gap: 30px;
  width: 100%;
  height: 480px;
  max-width: 1500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 700px) {
    height: 100%;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

export const ImgStyled = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardDiv = styled(motion.div)`
  width: 100%;
  max-height: 100%;
`;

export const DivSwiper = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  .swiper {
    padding: 0 3em;
  }
`;
