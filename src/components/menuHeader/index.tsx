import { motion } from "framer-motion";
import { ListMenuStyled } from "./style";
import * as framer from "../../libs/framer";
import { useNavigate } from "react-router-dom";
import { useModalContext, useUserContext } from "../../context";

export const MenuHeader = () => {
  const navigate = useNavigate();
  const { userData, logoutUser } = useUserContext();
  const { handleOpenAddress, handleOpenUpdateUser, openMenu } =
    useModalContext();

  const animateIfMenuIsOpen = openMenu
    ? framer.animateShownUl
    : framer.animateHiddenUl;

  return (
    <motion.nav className="menu">
      <ListMenuStyled
        animate={animateIfMenuIsOpen}
        style={{
          pointerEvents: openMenu ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <motion.li
          animate={animateIfMenuIsOpen}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </motion.li>

        <motion.li animate={animateIfMenuIsOpen} onClick={handleOpenUpdateUser}>
          Editar Perfil
        </motion.li>

        <motion.li animate={animateIfMenuIsOpen} onClick={handleOpenAddress}>
          Editar Endereço
        </motion.li>

        {userData?.role === "SELLER" && (
          <motion.li
            animate={animateIfMenuIsOpen}
            onClick={() => navigate("/profile")}
          >
            Meus Anúncios
          </motion.li>
        )}

        <motion.li animate={animateIfMenuIsOpen} onClick={logoutUser}>
          Sair
        </motion.li>
      </ListMenuStyled>
    </motion.nav>
  );
};
