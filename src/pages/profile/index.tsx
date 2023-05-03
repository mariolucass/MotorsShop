import {
  Avatar,
  Button,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Adverts,
  CreateAdvertise,
  Footer,
  Header,
  ModalGeneral,
} from "../../components";
import { StyledHero } from "./style";
import { useModalContext, useUserContext } from "../../context";
import { LoadingComponent } from "../../components/loading";
import { motion } from "framer-motion";
import { TransitionAnimation } from "../../components/transitionAnimation";

const theme = createTheme({
  palette: { primary: { main: "#4529e6" }, secondary: { main: "#212529" } },
});

const Profile = () => {
  const { handleOpen } = useModalContext();
  const { userData } = useUserContext();

  return (
    <LoadingComponent>
      <TransitionAnimation>
        <ThemeProvider theme={theme}>
          <motion.div className="advertBody">
            <Header />

            <StyledHero>
              <section>
                <div>
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    src={userData?.profile.url}
                  />
                  <div>
                    <span>{userData?.name}</span>
                    <div>Anunciante</div>
                  </div>
                </div>
                <p>{userData?.description}</p>
                <div>
                  <Button
                    onClick={handleOpen}
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      textTransform: "unset",
                      fontSize: 12,
                    }}
                  >
                    Criar anuncio
                  </Button>
                </div>
              </section>
            </StyledHero>

            <Container>
              <Adverts isProfile />
            </Container>

            <Footer />
          </motion.div>

          <ModalGeneral>
            <CreateAdvertise />
          </ModalGeneral>
        </ThemeProvider>
      </TransitionAnimation>
    </LoadingComponent>
  );
};

export default Profile;
