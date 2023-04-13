import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";
import StyledBox from "../../components/box";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../../styles/global";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import { Header } from "../../components/header";

const AdvertPage = () => {
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
      <div className="advertBody">
        <Header widthSize={widthSize} />

        <Container>
          <main className="direction">
            <div className="flecColumn division-1">
              <StyledBox Class="box-1">
                <img
                  className="advertImg"
                  src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                  alt=""
                />
              </StyledBox>
              <StyledBox Class="box-1">
                <Stack direction={"column"}>
                  <h3 className="heading6-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h3>

                  <Stack
                    direction={"row"}
                    spacing={1}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <ThemeProvider theme={globalTheme}>
                      <Box
                        sx={{
                          width: "30%",
                          height: "100%",
                          p: 1,
                          textAlign: "center",
                          backgroundColor: "brand.4",
                          color: "brand.1",
                          fontWeight: 500,
                          borderRadius: 1,
                        }}
                      >
                        2023
                      </Box>
                      <Box
                        sx={{
                          width: "30%",
                          height: "100%",
                          p: 1,
                          textAlign: "center",
                          backgroundColor: "brand.4",
                          color: "brand.1",
                          fontWeight: 500,
                          borderRadius: 1,
                        }}
                      >
                        0Km
                      </Box>
                    </ThemeProvider>
                  </Stack>

                  <h5 className="heading7-600">RS100.000</h5>

                  <button>Comprar</button>
                </Stack>
              </StyledBox>
              <StyledBox Class="box-1">
                <Stack direction={"column"} justifyContent={"flex-start"}>
                  <h3 className="heading6-600">Descrição</h3>

                  <article className="heading7-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </article>
                </Stack>
              </StyledBox>
            </div>
            <div className="flecColumn division-2">
              <StyledBox Class="box-2">
                <Stack direction={"column"} justifyContent={"space-between"}>
                  <h3 className="heading6-600">Fotos</h3>

                  <ImageList
                    cols={3}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        className="advertImg"
                        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
                        alt=""
                      />
                    </ImageListItem>
                  </ImageList>
                </Stack>
              </StyledBox>
              <StyledBox Class="box-2">
                <Stack
                  direction={"column"}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <p className="heading6-600">Filipe Costa</p>

                  <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </article>

                  <button>Ver Todos Anuncios</button>
                </Stack>
              </StyledBox>
            </div>
          </main>
        </Container>
      </div>
    </>
  );
};

export default AdvertPage;
