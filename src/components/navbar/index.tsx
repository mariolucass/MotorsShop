import Box from "@mui/material/Box";
import { ano, combustivel, cores, marcas, modelos } from "../../data";
import FilterBox from "./filterBox/FilterBox";
import FilterBoxInput from "./filterBox/FilterBoxInput";
import useMediaQuery from "@mui/material/useMediaQuery";

export const NavBar = () => {
  const matches700 = useMediaQuery(`(max-width:700px)`);

  return (
    <Box
      className={matches700 ? "ocult" : "navbar"}
      sx={{
        width: "20%",
        m: 2,
      }}
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
