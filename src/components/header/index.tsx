import { Avatar } from "@mui/material";
import Logo from "../../assets/logoColored.svg";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";
import { MenuHeader } from "../menuHeader";
import { useState } from "react";
import { useMediaContext, useUserContext } from "../../context";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { matches700 } = useMediaContext();
  const { userData } = useUserContext();

  return (
    <HeaderStyled>
      <Link to={"/home"}>
        <img src={Logo} alt="Logo" />
      </Link>
      <>
        {userData ? (
          <div
            className={matches700 ? "ocult" : "div__user"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Avatar src="https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg " />
            <span>{userData?.name}</span>

            <MenuHeader isOpen={isOpen} />
          </div>
        ) : (
          <div className={matches700 ? "ocult" : "div__buttons"}>
            <Link to={"/login"}>Fazer Login</Link>
            <Link to={"/register"}>Registrar</Link>
          </div>
        )}
      </>
    </HeaderStyled>
  );
};
