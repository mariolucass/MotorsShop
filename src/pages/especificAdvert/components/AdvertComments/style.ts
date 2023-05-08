import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LiStyled = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;
  border-radius: 4px;

  .user {
    display: flex;
    align-items: center;
    gap: 6px;

    h3 {
      margin-left: 10px;
      font-family: "Inter";
      font-weight: 500;
      cursor: pointer;
    }

    span {
      font-size: 12px;
      font-family: "Inter";
      color: var(--grey3);
    }
  }

  p {
    width: 90%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    max-height: 48px;
    word-break: break-all;
  }
`;

export const CommentsList = styled(motion.ul)`
  height: 490px;
  min-width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const NoComments = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
    margin-left: 12px;
  }
`;

export const DivButtons = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    width: 20%;
    /* background-color: var(--brand1); */
  }
`;
