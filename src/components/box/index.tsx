import React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../../styles/global";

interface iBox {
  children: React.ReactElement;
  Class?: string;
}

const StyledBox = ({ children, Class }: iBox) => {
  return (
    <>
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
    </>
  );
};

export default StyledBox;
