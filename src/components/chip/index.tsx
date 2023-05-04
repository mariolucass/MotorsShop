import Chip from "@mui/material/Chip";
import { iChip } from "../../interfaces";

export const StyledChip = ({ label }: iChip) => (
  <Chip
    label={label}
    className="chip"
    sx={{ borderRadius: 2, width: "100%" }}
  />
);
