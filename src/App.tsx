import Router from "../src/routes";
import { GlobalStyles } from "./styles/globalStyles";
import MediaContextProvider from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
   <MediaContextProvider>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </MediaContextProvider>
    )
}


