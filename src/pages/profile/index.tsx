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

const theme = createTheme({
  palette: { primary: { main: "#4529e6" }, secondary: { main: "#212529" } },
});

const Profile = () => {
  const { handleOpen } = useModalContext();
  const { userData } = useUserContext();

  return (
    <ThemeProvider theme={theme}>
      <div className="advertBody">
        <Header />

        <StyledHero>
          <section>
            <div>
              <Avatar
                sx={{ width: 80, height: 80 }}
                src="https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg "
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
                sx={{ fontWeight: 600, textTransform: "unset", fontSize: 12 }}
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
      </div>
      <ModalGeneral>
        <CreateAdvertise />
      </ModalGeneral>
    </ThemeProvider>
  );
};

export default Profile;
