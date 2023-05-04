import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LiStyled = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;

  gap: 1rem;

  .user {
    display: flex;
    align-items: center;
    gap: 6px;

    h3 {
      margin-left: 10px;
      font-family: "Inter";
      font-weight: 500;
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
  }
`;

export const CommentsList = styled(motion.ul)`
  height: 490px;
  overflow-y: auto;
`;
