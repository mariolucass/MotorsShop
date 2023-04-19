import { AdvertsMenu } from "./style";
import Menu from "../../components/menu";
import Adverts from "../../components/adverts";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header isHome={true} />

      <Menu />
      <Container className="container">
        <AdvertsMenu>
          <NavBar />
          <Adverts />
        </AdvertsMenu>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
