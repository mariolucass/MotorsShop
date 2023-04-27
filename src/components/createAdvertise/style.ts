import styled from "styled-components";

export const DivStyled = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 1em;

  button {
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  h1 {
    position: relative;
    top: -10px;
    left: 0px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .buttonImage {
    height: 38px;
    padding: 12px 20px;
    background: #edeafd;
    border: 1.5px solid #edeafd;
    color: #4529e6;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 15px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1em;

  button:first-child {
    padding: 12px 28px;
    background-color: var(--grey-6);
    border: 1.5px solid var(--grey6);
    color: var(--grey2);
  }

  button:last-child {
    padding: 12px 28px;
    background-color: var(--brand3);
    color: var(--brand4);
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;

export const InputSplitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AutoCompleteDiv = styled.div`
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

  .css-l3ln04-MuiAutocomplete-root
    .MuiOutlinedInput-root
    .MuiAutocomplete-endAdornment {
    display: none;
  }

  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 0.2em;
  margin-bottom: 0.2em;

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
    width: 100%;
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
  }
`;
