import styled from "styled-components";

export const ProductCardStyled = styled.div`
  width: 20%;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Inter";
  gap: 16px;
  padding: 0px;

  .product__div__img {
    width: 100%;
    height: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey7);

    img {
      width: 84%;
      height: 100%;

      object-fit: contain;
    }
  }

  .product__title {
    margin: 0;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  .product__user {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #495057;
    }
  }

  .product__description {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #495057;

    width: 85%;
    max-height: 48px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .product_infos {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .product__tags {
      display: flex;
      gap: 12px;

      span {
        width: 57px;
        height: 32px;

        background-color: #edeafd;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        color: #4529e6;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        padding: 4px 8px;
        gap: 10px;
      }
    }

    .product__price {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #212529;
    }
  }
`;
