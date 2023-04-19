import React, { useContext } from "react";
import StyledMenu from "./style";
import { MidiaContext } from "../../context";

const Menu = () => {
  const { matches500, matches700 } = useContext(MidiaContext);

  return (
    <StyledMenu>
      <section></section>
      <img
        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
        alt=""
      />
      <div>
        <p
          className={
            matches500
              ? "heading2-600"
              : matches700
              ? "heading5-600"
              : "heading6-600"
          }
        >
          Motors Shop
        </p>
        <p
          className={
            matches500
              ? "heading2-600"
              : matches700
              ? "heading5-600"
              : "heading6-600"
          }
        >
          A melhor plataforma de anúncios de carros do país
        </p>
      </div>
    </StyledMenu>
  );
};

export default Menu;
