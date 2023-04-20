import Box from "@mui/material/Box";
import React from "react";
import { StyledImg } from "./style";

interface iProps {
  src: string;
}

const AdvertImage = ({ src }: iProps) => {
  return (
    <StyledImg>
      <Box
        component={"img"}
        src={src}
        sx={{
          objectFit: "contain",
          width: "60%",
          height: "100%",
          maxWidth: 692,
        }}
      />
    </StyledImg>
  );
};

export default AdvertImage;
