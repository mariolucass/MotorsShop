import Chip from "@mui/material/Chip";

interface iProps {
  label: string | number;
}

export const StyledChip = ({ label }: iProps) => {
  return <Chip label={label} className="chip" sx={{ borderRadius: 2 }} />;
};
