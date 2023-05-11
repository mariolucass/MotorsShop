import { Avatar } from "@mui/material";
import { MenuHeader } from "../menuHeader";
import { usernameLimiter } from "../../utils";
import { Link } from "react-router-dom";
import { useModalContext, useUserContext } from "../../context";

interface IProps {
  isLogged?: boolean;
}

export const DesktopMenu = ({ isLogged }: IProps) => {
  const { userData } = useUserContext();
  const { toggleMenu } = useModalContext();

  return isLogged ? (
    <div className={"div__user"} onClick={toggleMenu}>
      <Avatar src={userData!.profile.url} />
      <span>{usernameLimiter(userData!.name)}</span>
      <MenuHeader />
    </div>
  ) : (
    <div className={"div__buttons"}>
      <Link to={"/login"}>Fazer Login</Link>
      <Link to={"/register"}>Registrar</Link>
    </div>
  );
};
