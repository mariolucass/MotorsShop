import Router from "../src/routes";
import { GlobalStyles } from "./styles/globalStyles";
import MediaContextProvider from "./context";

export const App = () => {
  return (
    <MediaContextProvider>
      <GlobalStyles />
      <Router />
    </MediaContextProvider>
  );
};
