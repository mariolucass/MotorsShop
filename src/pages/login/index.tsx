import { Header, Login, Footer, TransitionAnimation } from "../../components";

export const LoginPage = () => (
  <TransitionAnimation>
    <Header />
    <Login />
    <Footer />
  </TransitionAnimation>
);
