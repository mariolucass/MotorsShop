import Chip from "@mui/material/Chip";
import React from "react";

interface iProps {
  label: string | number;
}

const StyledChip = ({ label }: iProps) => {
  return <Chip label={label} className="chip" sx={{ borderRadius: 2 }} />;
};

export default StyledChip;
