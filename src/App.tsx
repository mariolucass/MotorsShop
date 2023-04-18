import Router from "../src/routes";
import { GlobalStyles } from "./styles/globalStyles";
import ContextProvider from "./context";

export const App = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Router />
    </ContextProvider>
  );
};
