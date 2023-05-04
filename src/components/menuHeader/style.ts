import { motion } from "framer-motion";
import styled from "styled-components";

export const ListMenuStyled = styled(motion.ul)`
  position: relative;
  z-index: 99999;
  background-color: #ffffff;
  list-style: none;
  padding: 1em;
  position: absolute;
  right: 28px;
  top: 62px;
  width: 20%;
  max-width: 206px;
  gap: 1em;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-top: 8px solid var(--brand3);

  li {
    :hover {
    }
  }
`;
