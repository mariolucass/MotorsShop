import { Link } from "react-router-dom";
import { BurguerMenu } from "./burguerMenu";
import { DesktopMenu } from "./desktopMenu";
import Logo from "../../assets/logoColored.svg";
import { HeaderStyled, HomeButton } from "./style";
import { useMediaContext, useUserContext } from "../../context";
import { ModalUpdateAddress } from "../modal/modalUpdateAddress";
import { ModalUpdateDeleteUser } from "../modal/modalUpdateDeleteUser";

export const Header = () => {
  const { userData } = useUserContext();
  const { matches700 } = useMediaContext();

  const RenderMobile = () => {
    return userData ? <BurguerMenu isLogged /> : <BurguerMenu />;
  };

  const RenderDesktop = () => {
    return userData ? <DesktopMenu isLogged /> : <DesktopMenu />;
  };

  return (
    <>
      <HeaderStyled>
        <HomeButton whileHover={{ scale: 0.85 }} whileTap={{ scale: 0.75 }}>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </HomeButton>
        {matches700 ? <RenderMobile /> : <RenderDesktop />}
      </HeaderStyled>

      <ModalUpdateDeleteUser />
      <ModalUpdateAddress />
    </>
  );
};
