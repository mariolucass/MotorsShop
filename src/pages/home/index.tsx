import { AdvertsMenu, MainStyled } from "./style";
import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import Adverts from "../../components/adverts";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Container } from "@mui/material";

const Home = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const setSize = () => {
    setWidthSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [widthSize]);

  return (
    <>
      <Header isHome={true} widthSize={widthSize} />

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
