import Box from "@mui/material/Box";
import { ano, combustivel, cores, marcas, modelos } from "../../data";
import FilterBox from "./filterBox/FilterBox";
import FilterBoxInput from "./filterBox/FilterBoxInput";
import { useMediaContext } from "../../context/MediaContext";

export const NavBar = () => {
  const { matches700 } = useMediaContext();

  return (
    <Box
      className={matches700 ? "navbar" : "ocult"}
      sx={
        matches700
          ? {
              width: "20%",
              m: 2,
            }
          : {
              width: "30%",
              m: 2,
            }
      }
    >
      <FilterBox title="Marca" options={marcas} />
      <FilterBox title="Modelo" options={modelos} />
      <FilterBox title="Cor" options={cores} />
      <FilterBox title="Ano" options={ano} />
      <FilterBox title="Combustivel" options={combustivel} />
      <FilterBoxInput title="Km" />
      <FilterBoxInput title="Preço" />
    </Box>
  );
};
