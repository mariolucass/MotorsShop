import React, { useEffect, useState } from "react";
import StyledMenu from "./style";

const Menu = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const setSize = () => {
    setWidthSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [widthSize]);

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
            widthSize < 400
              ? "heading6-600"
              : widthSize > 400 && widthSize < 700
              ? "heading5-600"
              : "heading2-600"
          }
        >
          Motors Shop
        </p>
        <p
          className={
            widthSize < 400
              ? "heading6-600"
              : widthSize > 400 && widthSize < 700
              ? "heading5-600"
              : "heading2-600"
          }
        >
          A melhor plataforma de anúncios de carros do país
        </p>
      </div>
    </StyledMenu>
  );
};

export default Menu;
