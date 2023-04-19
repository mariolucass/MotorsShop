import { Box, OutlinedInput, Stack, useMediaQuery } from "@mui/material";

interface iPropsInput {
  title: string;
}

const FilterBoxInput = ({ title }: iPropsInput) => {
  const matches700 = useMediaQuery(`(max-width:700px)`);
  const matches900 = useMediaQuery(`(max-width:900px)`);

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
