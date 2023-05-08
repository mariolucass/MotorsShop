import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const ListCardsDashStyled = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 1600px;
  overflow-x: auto;
  gap: 32px;
  padding: 3em;

  li {
    max-height: 350px;
  }
`;

export const CardDashStyled = styled(motion.li)`
  width: 200px;
  height: 200px;

  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  h2 {
    font-size: 22px;
    color: var(--whitefixed);
    padding: 13px 8px;
    border-radius: 8px 0px 8px 8px;
  }
`;

export const DivImageCards = styled(motion.div)`
  width: 80%;
  height: 80%;
`;
