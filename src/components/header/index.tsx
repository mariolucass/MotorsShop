import { useState } from "react";
import { Avatar } from "@mui/material";
import { HeaderStyled } from "./style";
import { Link } from "react-router-dom";
import { MenuHeader } from "../menuHeader";
import Logo from "../../assets/logoColored.svg";
import { useMediaContext, useUserContext } from "../../context";
import { ModalUpdateDeleteUser } from "../modal/modalUpdateDeleteUser";
import { ModalUpdateAddress } from "../modal/modalUpdateAddress";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { matches700 } = useMediaContext();
  const { userData } = useUserContext();

  const username = userData ? userData!.name.split(" ") : "User";
  const headerUsername =
    username.length > 1 ? username[0] + " " + username[1] : username[0];

  return (
    <>
      <ModalUpdateDeleteUser />
      <ModalUpdateAddress />
      <HeaderStyled>
        <Link to={"/home"}>
          <img src={Logo} alt="Logo" />
        </Link>
        <>
          {userData ? (
            <div
              className={matches700 ? "ocult" : "div__user"}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <Avatar src={"https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"} />
              <span>{headerUsername}</span>
              <MenuHeader isOpen={isOpenMenu} />
            </div>
          ) : (
            <div className={matches700 ? "ocult" : "div__buttons"}>
              <Link to={"/login"}>Fazer Login</Link>
              <Link to={"/register"}>Registrar</Link>
            </div>
          )}
        </>
      </HeaderStyled>
    </>
  );
};
