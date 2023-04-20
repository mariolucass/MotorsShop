import { Box, OutlinedInput, Stack } from "@mui/material";
import { useMediaContext } from "../../../context";

interface iPropsInput {
  title: string;
}

const FilterBoxInput = ({ title }: iPropsInput) => {
  const { matches700, matches900 } = useMediaContext();

  return (
    <Box>
      <h6 className="heading4-600">{title}</h6>

      <Stack
        direction={matches700 ? "row" : matches900 ? "column" : "row"}
        spacing={2}
        sx={{
          m: 2,
        }}
      >
        <OutlinedInput placeholder="Minimo" id="Minimo" />

        <OutlinedInput placeholder="Maximo" id="max" />
      </Stack>
    </Box>
  );
};

export default FilterBoxInput;
