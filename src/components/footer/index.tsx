import { FooterStyled } from "./style";
import Logo from "../../assets/logo.png";
import Angle from "../../assets/angle-up.svg";

export const Footer = () => (
  <FooterStyled>
    <img src={Logo} alt="logo" />

    <span>© 2022 - Todos os direitos reservados.</span>

    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={Angle} alt="top-page" />
    </button>
  </FooterStyled>
);
