import { Avatar, Button, ThemeProvider, createTheme } from "@mui/material";
import {
  Adverts,
  CreateAdvertise,
  Footer,
  Header,
  ModalGeneral,
} from "../../components";
import { StyledHero } from "./style";
import { useModalContext } from "../../context";

const theme = createTheme({
  palette: { primary: { main: "#4529e6" }, secondary: { main: "#212529" } },
});

const Profile = () => {
  const { handleOpen } = useModalContext();

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
                <span>Samuel Leão</span>
                <div>Anunciante</div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
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

        <Adverts isProfile />

        <Footer />
      </div>
      <ModalGeneral>
        <CreateAdvertise />
      </ModalGeneral>
    </ThemeProvider>
  );
};

export default Profile;
