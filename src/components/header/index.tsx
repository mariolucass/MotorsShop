import { Avatar } from "@mui/material";
import Logo from "../../assets/logoColored.svg";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";
import { MenuHeader } from "../menuHeader";
import { useState } from "react";
interface IProps {
  isHome?: boolean;
  widthSize: number;
}

export const Header = ({ isHome, widthSize }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const RenderProfileView = () => (
    <HeaderStyled>
      <Link to={"/home"}>
        <img src={Logo} alt="Logo" />
      </Link>

      <div
        className={widthSize < 700 ? "ocult" : "div__user"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Avatar src="https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg " />
        <span>Samuel Leão</span>

        <MenuHeader isOpen={isOpen} />
      </div>
    </HeaderStyled>
  );

  const RenderHomeView = () => (
    <HeaderStyled>
      <Link to={"/home"}>
        <img src={Logo} alt="Logo" />
      </Link>

      <div className={widthSize < 700 ? "ocult" : "div__buttons"}>
        <Link to={"/login"}>Fazer Login</Link>
        <Link to={"/register"}>Registrar</Link>
      </div>
    </HeaderStyled>
  );

  return isHome ? <RenderHomeView /> : <RenderProfileView />;
};
