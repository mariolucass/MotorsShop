import Router from "../src/routes";
import { GlobalStyles } from "./styles/globalStyles";
import ContextProvider from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <ContextProvider>
      <Router />
      <GlobalStyles />
      <ToastContainer />
    </ContextProvider>
  );
};
