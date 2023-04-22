import Router from "../src/routes";
import Providers from "./context";
import { GlobalStyles } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <Providers>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </Providers>
  );
};
