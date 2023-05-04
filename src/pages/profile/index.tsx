import { StyledHero } from "./style";
import { motion } from "framer-motion";
import { animateTransitionPresence } from "../../libs/framer";
import { useModalContext, useUserContext } from "../../context";
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
  TransitionAnimation,
  LoadingComponent,
} from "../../components";

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
              <motion.section
                animate={{ width: "100%", opacity: 1 }}
                initial={{ width: "35%", opacity: 0 }}
                transition={animateTransitionPresence}
              >
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
                      fontFamily: "Inter",
                    }}
                  >
                    Criar anuncio
                  </Button>
                </div>
              </motion.section>
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
