import { useState } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuHeader } from "../menuHeader";
import { usernameLimiter } from "../../utils";
import Logo from "../../assets/logoColored.svg";
import { HeaderStyled, HomeButton } from "./style";
import { useMediaContext, useUserContext } from "../../context";
import { ModalUpdateAddress } from "../modal/modalUpdateAddress";
import { ModalUpdateDeleteUser } from "../modal/modalUpdateDeleteUser";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { matches700 } = useMediaContext();
  const { userData } = useUserContext();

  return (
    <>
      <ModalUpdateDeleteUser />
      <ModalUpdateAddress />

      <HeaderStyled>
        <HomeButton whileHover={{ scale: 0.85 }} whileTap={{ scale: 0.75 }}>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </HomeButton>

        <>
          {userData ? (
            <div
              className={matches700 ? "ocult" : "div__user"}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <Avatar src={userData.profile.url} />
              <span>{usernameLimiter(userData.name)}</span>
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
