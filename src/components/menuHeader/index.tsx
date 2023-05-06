import { motion } from "framer-motion";
import { ListMenuStyled } from "./style";
import * as framer from "../../libs/framer";
import { useNavigate } from "react-router-dom";
import { useModalContext, useUserContext } from "../../context";

interface IProps {
  isOpen: boolean;
}

export const MenuHeader = ({ isOpen }: IProps) => {
  const { userData, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const { handleOpen, handleOpenAddress, handleOpenUpdateUser } = useModalContext();

  return (
    <>
      <motion.nav className="menu">
        <ListMenuStyled
          animate={isOpen ? framer.animateShownUl : framer.animateHiddenUl}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          <motion.li
            animate={isOpen ? framer.animateShownLi : framer.animateHiddenLi}
            onClick={() => {
              handleOpenUpdateUser();
            }}
          >
            Editar Perfil
          </motion.li>

          <motion.li
            animate={isOpen ? framer.animateShownLi : framer.animateHiddenLi}
            onClick={() => {
              handleOpenAddress();
            }}
          >
            Editar endereco
          </motion.li>

          {userData?.role === "SELLER" && (
            <motion.li
              onClick={() => navigate("/profile")}
              animate={isOpen ? framer.animateShownLi : framer.animateHiddenLi}
            >
              Meus Anúncios
            </motion.li>
          )}

          <motion.li
            onClick={logoutUser}
            animate={isOpen ? framer.animateShownLi : framer.animateHiddenLi}
          >
            Sair
          </motion.li>
        </ListMenuStyled>
      </motion.nav>
    </>
  );
};
