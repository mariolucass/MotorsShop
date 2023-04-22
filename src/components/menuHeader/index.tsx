import { useAnimate, motion, stagger } from "framer-motion";
import { useEffect, useState } from "react";
import { ListMenuStyled } from "./style";
import { useUserContext } from "../../context";
import { useNavigate } from "react-router-dom";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  //   useEffect(() => {
  //     animate("ul");

  //     animate(
  //       "li",
  //       isOpen
  //         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
  //         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
  //       {
  //         duration: 0.2,
  //         delay: isOpen ? staggerMenuItems : 0,
  //       }
  //     );
  //   }, [isOpen]);

  return scope;
}
interface IProps {
  isOpen: boolean;
}

const animateHiddenUl = {
  clipPath: "inset(10% 50% 90% 50% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

const animateShownUl = {
  clipPath: "inset(0% 0% 0% 0% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

const animateHiddenLi = {
  opacity: 0,
  scale: 0.3,
  filter: "blur(20px)",
};

const animateShownLi = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
};

export const MenuHeader = ({ isOpen }: IProps) => {
  const { userData, logoutUser } = useUserContext();
  const scope = useMenuAnimation(isOpen);
  const navigate = useNavigate();

  return (
    <>
      <nav className="menu" ref={scope}>
        <ListMenuStyled
          animate={isOpen ? animateShownUl : animateHiddenUl}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          <motion.li animate={isOpen ? animateShownLi : animateHiddenLi}>
            Editar Perfil
          </motion.li>
          <motion.li animate={isOpen ? animateShownLi : animateHiddenLi}>
            Editar endereco
          </motion.li>
          <>
            {userData?.role === "SELLER" && (
              <motion.li
                onClick={() => {
                  navigate("/profile");
                }}
                animate={isOpen ? animateShownLi : animateHiddenLi}
              >
                Meus Anúncios
              </motion.li>
            )}
          </>
          <motion.li
            onClick={logoutUser}
            animate={isOpen ? animateShownLi : animateHiddenLi}
          >
            Sair
          </motion.li>
        </ListMenuStyled>
      </nav>
    </>
  );
};
