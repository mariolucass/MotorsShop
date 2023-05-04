import { AdvertsMenu } from "./style";
import { Box, Button, Container } from "@mui/material";
import { useFilterContext, useMediaContext } from "../../context";
import {
  Adverts,
  Footer,
  Header,
  Menu,
  NavBar,
  TransitionAnimation,
} from "../../components";

const Home = () => {
  const { matches700 } = useMediaContext();
  const { setShowFilter, showFilter } = useFilterContext();

  return (
    <TransitionAnimation>
      <Header />

      <Menu />
      <Container className="container">
        <AdvertsMenu>
          <NavBar />
          <Adverts isHome />
        </AdvertsMenu>

        {matches700 && (
          <Box sx={{ width: "95%", m: 1, mt: 5, mb: 5 }}>
            <Button
              sx={{ width: "100%" }}
              className="buttonBrand"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filtros
            </Button>
          </Box>
        )}
      </Container>
      <Footer />
    </TransitionAnimation>
  );
};

export default Home;
