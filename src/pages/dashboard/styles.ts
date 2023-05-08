import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MainStyled = styled(motion.main)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
  /* margin: 50px 0; */

  div {
    border-radius: 12px;
  }

  background-color: #49505745;
`;

export const DivSearch = styled(motion.div)`
  width: 35%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1em;
  gap: 1em;
  margin-top: 115px;

  background-color: var(--whitefixed);

  .filterButton {
    width: 280px;
    height: 56px;
    background-color: var(--brand1);
    color: var(--whitefixed);
    font-weight: 650;
  }

  .gVNNVS .autoComplete {
    width: 100%;
  }

  @media (max-width: 750px) {
    width: 90%;
    margin-top: 0px;
  }
`;

export const DivContainersShow = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  overflow-x: hidden;

  padding: 1em;

  @media (max-width: 750px) {
    padding: 0;
  }
`;

export const DivSlogan = styled(motion.div)`
  margin-top: 2em;
  width: 40%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: var(--whitefixed);

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;

  .logoDiv {
    width: 308px;
    height: 56px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 750px) {
    width: 90%;
    margin-top: 500px;
  }
`;

export const BelowContent = styled(motion.div)`
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2em;

  h2 {
    font-size: 28px;
  }
`;

export const DivLoadingInDash = styled(motion.div)`
  width: 100%;
  height: 350px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
