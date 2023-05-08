import { motion } from "framer-motion";
import styled from "styled-components";

export const ImgStyled = styled(motion.img)`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

export const SwiperDiv = styled(motion.div)`
  width: 100%;

  position: absolute;
  top: 0%;
  z-index: -100;

  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 0px;
  padding-top: 1em;
  gap: 3em;

  & div {
    width: 100%;
    height: 825px;
    border-radius: 1em;
  }

  /* .imageDiv {
    width: 500px;
    height: 500px;
  } */
`;
