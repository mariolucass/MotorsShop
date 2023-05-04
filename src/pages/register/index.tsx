import {
  Footer,
  Header,
  Register,
  TransitionAnimation,
} from "../../components";

export const RegisterPage = () => (
  <TransitionAnimation>
    <Header />
    <Register />
    <Footer />
  </TransitionAnimation>
);
