import { GrFormClose } from "react-icons/gr";
import FilterBox from "./filterBox/FilterBox";
import FilterBoxInput from "./filterBox/FilterBoxInput";
import { Stack, Typography, Button, Box } from "@mui/material";
import {
  useMediaContext,
  useFilterContext,
  useDataContext,
} from "../../context";
import { marcasMocked } from "../../data";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getAnnouncementWithQuery,
  getFilteredAnnouncements,
} from "../../services";
import { capitalizeString } from "../../utils";

export const NavBar = () => {
  const { matches700, minMatches1500 } = useMediaContext();
  const setSearchParams = useSearchParams()[1];
  const {
    anos,
    combustiveis,
    cores,
    modelos,
    setAnos,
    setCores,
    setModelos,
    setResetRadio,
    setAdvertsData,
    setCombustiveis,
    setFilterBoxOptions,
  } = useDataContext();

  const {
    Marca,
    showFilter,
    setMarca,
    setAno,
    setCor,
    setModelo,
    setMaxKm,
    setMinKm,
    setMaxPrice,
    setMinPrice,
    setShowFilter,
    setCombustivel,
  } = useFilterContext();

  useEffect(() => {
    if (Marca) {
      setAnos([]);
      setCores([]);
      setModelos([]);
      setCombustiveis([]);
      localStorage.removeItem("@MotorsShop:filter");

      (async () => {
        const announcements = await getAnnouncementWithQuery({
          brand: capitalizeString(Marca!),
        });

        if (announcements.length) {
          setFilterBoxOptions(announcements);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Marca]);

  const emptyListToken = async () => {
    const pagination = "?page=0&";
    const announcements = await getFilteredAnnouncements(pagination);
    setAdvertsData(announcements);
    setFilterBoxOptions(announcements);
  };

  const emptyFilter = () => {
    if (modelos.length) {
      emptyListToken();
    } else {
      setMarca(undefined);
      setAno(undefined);
      setCombustivel(undefined);
      setCor(undefined);
      setModelo(undefined);
      setMaxKm(undefined);
      setMaxPrice(undefined);
      setMinKm(undefined);
      setMinPrice(undefined);
    }

    setResetRadio(true);

    const pagination = "?page=0&";
    setSearchParams(pagination);
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
      sx={minMatches1500 ? { ...size, maxWidth: 300 } : size}
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
      <FilterBox
        title="Marca"
        options={marcasMocked.map((e) => e.name)}
        to={setMarca}
      />
      <FilterBox title="Modelo" options={modelos} to={setModelo} />
      <FilterBox title="Cor" options={cores} to={setCor} />
      <FilterBox title="Ano" options={anos} to={setAno} />
      <FilterBox
        title="Combustivel"
        options={combustiveis}
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
