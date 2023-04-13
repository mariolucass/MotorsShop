import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";
import Adverts from "../../components/adverts";
import { NavBar } from "../../components/navbar";

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
    <section>
      <Menu />
      <main className="container--Main">
        <NavBar />

        <Adverts />
      </main>
    </section>
  );
};

export default Home;
