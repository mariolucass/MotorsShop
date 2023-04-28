import { FooterStyled } from "./style";
import Logo from "../../assets/logo.png";
import Angle from "../../assets/angle-up.svg";

export const Footer = () => {
  return (
    <FooterStyled>
      <img src={Logo} alt="logo" />

      <span>© 2022 - Todos os direitos reservados.</span>

      <button>
        <img src={Angle} alt="top-page" />
      </button>
    </FooterStyled>
  );
};
