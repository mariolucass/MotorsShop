import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey8);
`;

export const Box = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  padding: 44px 28px;
  gap: 4em;

  background: var(--grey10);
  border-radius: 4px;

  span {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2em;
  padding-left: 2em;

  label {
    padding-left: 0px;
  }
`;
