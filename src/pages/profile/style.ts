import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  margin: 40px 0;

  & > section {
    width: 100%;
    max-width: 900px;
    background-color: var(--grey10);
    padding: 20px 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > div {
        display: flex;
        gap: 10px;
        align-items: center;
        span {
          font-size: 16px;
          font-weight: 600;
          color: var(--grey1);
        }
        div {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 92px;
          height: 25px;
          background-color: var(--brand4);
          font-weight: 500;
          font-size: 14px;
          color: var(--brand1);
          border-radius: 4px;
        }
      }
    }
    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);
    }
    & > div:last-child {
      width: 160px;
      height: 48px;
    }
  }
`;
