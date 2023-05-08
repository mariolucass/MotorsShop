import { motion } from "framer-motion";
import styled from "styled-components";

interface IProps {
  isdash?: string;
}

export const AutoCompleteDiv = styled(motion.div)<IProps>`
  @keyframes tremer {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 7px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -7px;
    }
    100% {
      margin-left: 0;
    }
  }

  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 0.4em;
  margin-bottom: 0.4em;

  .errorInput {
    border: 2px solid var(--alert1);
    animation: tremer 0.2s;
    animation-iteration-count: 2;
  }

  label,
  input {
    width: 90%;
    border: none;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: var(--grey1);
  }

  .autoComplete {
    width: ${(props) => (props.isdash === "true" ? "50%" : "100%")};
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;

    color: var(--grey1);

    position: relative;

    height: 50px;
    padding: 0 1rem;

    padding: 0px;
    border-radius: 8px;
    border-radius: 4px;
    .css-1q60rmi-MuiAutocomplete-endAdornment {
      top: 5px;
    }
  }
`;
