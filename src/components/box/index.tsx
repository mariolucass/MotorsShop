import Box from "@mui/material/Box";
import { IBox } from "../../interfaces";
import globalTheme from "../../libs/mui";
import { ThemeProvider } from "@mui/material";

export const StyledBox = ({ children, Class }: IBox) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Box
        className={`flexCenter ${Class}`}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "grey.whiteFixed",
          minHeight: "50vh",
          mt: "10px",
          mb: "10px",
          p: 3,
          borderRadius: 1,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
