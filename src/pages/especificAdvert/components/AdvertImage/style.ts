import styled from "styled-components";

export const StyledImg = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: var(--whitefixed);

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListImageEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  height: 120px;
  margin-bottom: 20px;

  span {
    text-align: center;
    width: 50%;
    color: var(--grey4);
  }
`
