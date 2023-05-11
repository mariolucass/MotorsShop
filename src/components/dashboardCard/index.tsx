import { Avatar } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { animateTransitionItens } from "../../libs";
import { CardDashStyled, DivImageCards, ListCardsDashStyled } from "./style";
import { useNavigate } from "react-router-dom";

interface IProps {
  list: Array<any>;
}

export const DashboardCards = ({ list }: IProps) => {
  const navigate = useNavigate();
  const listToRender = list.slice(0, 8);

  const handleClick = (name: string) => {
    let data = {
      page: "0",
      brand: name,
    };

    localStorage.setItem("@MotorsShop:filter", JSON.stringify(data));

    navigate(`/?brand=${name}&page=0`);
  };

  const listCards = listToRender.map((elem) => (
    <CardDashStyled
      key={elem.img}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.87 }}
      onClick={() => handleClick(elem.name)}
    >
      <DivImageCards>
        <Avatar
          src={elem.img}
          alt={elem.name}
          sx={{ width: 160, height: 160 }}
        />
        <h2>{elem.name}</h2>
      </DivImageCards>
    </CardDashStyled>
  ));

  return (
    <AnimatePresence>
      <ListCardsDashStyled
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ...animateTransitionItens,
          staggerChildren: 0.9,
        }}
      >
        {listCards}
      </ListCardsDashStyled>
    </AnimatePresence>
  );
};
