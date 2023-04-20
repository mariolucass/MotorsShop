import Router from "../src/routes";
import { MediaProvider, ModalProvider } from "./context";
import { GlobalStyles } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <MediaProvider>
      <ModalProvider>
        <GlobalStyles />
        <Router />
        <ToastContainer />
      </ModalProvider>
    </MediaProvider>
  );
};
