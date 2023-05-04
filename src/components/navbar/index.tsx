import Box from "@mui/material/Box";
import { ano, combustivel, cores, marcas, modelos } from "../../data";
import FilterBox from "./filterBox/FilterBox";
import FilterBoxInput from "./filterBox/FilterBoxInput";
import { useMediaContext, useFilterContext } from "../../context";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import { GrFormClose } from "react-icons/gr";

export const NavBar = () => {
  const { matches700 } = useMediaContext();
  const {
    showFilter,
    setShowFilter,
    setMarca,
    setAno,
    setCombustivel,
    setCor,
    setModelo,
    setMaxKm,
    setMaxPrice,
    setMinKm,
    setMinPrice,
  } = useFilterContext();

  const emptyFilter = () => {
    setMarca(undefined);
    setAno(undefined);
    setCombustivel(undefined);
    setCor(undefined);
    setModelo(undefined);
    setMaxKm(undefined);
    setMaxPrice(undefined);
    setMinKm(undefined);
    setMinPrice(undefined);
  };

  const size = () => {
    if (matches700 && showFilter) {
      return {
        width: "100%",
        m: 0,
        position: "absolute",
        zIndex: 100,
        backgroundColor: "white",
        p: 2,
      };
    }

    if (matches700) {
      return {
        width: "20%",
        m: 2,
      };
    }

    return {
      width: "30%",
      m: 2,
    };
  };

  return (
    <Box
      className={matches700 && showFilter === false ? "ocult" : "navbar"}
      sx={size}
    >
      {showFilter ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%", mb: 2 }}
        >
          <Typography variant="h6" fontWeight={700}>
            Filtro
          </Typography>
          <Button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <GrFormClose className="close" />
          </Button>
        </Stack>
      ) : (
        false
      )}
      <FilterBox title="Marca" options={marcas} to={setMarca} />
      <FilterBox title="Modelo" options={modelos} to={setModelo} />
      <FilterBox title="Cor" options={cores} to={setCor} />
      <FilterBox title="Ano" options={ano} to={setAno} />
      <FilterBox
        title="Combustivel"
        options={combustivel}
        to={setCombustivel}
      />
      <FilterBoxInput title="Km" max={setMaxKm} min={setMinKm} />
      <FilterBoxInput title="Preço" max={setMaxPrice} min={setMinPrice} />
      <Button
        className="buttonBrand"
        variant="outlined"
        sx={{ width: "100%" }}
        onClick={emptyFilter}
      >
        Limpar Filtro
      </Button>
    </Box>
  );
};
