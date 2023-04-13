import Router from "../src/routes";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "./styles/globalStyles";

export const App = () => (
  <>
    <CssBaseline />
    <GlobalStyles />
    <Router />
  </>
);
