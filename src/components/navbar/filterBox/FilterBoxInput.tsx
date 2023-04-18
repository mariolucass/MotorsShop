import { Box, OutlinedInput, Stack } from "@mui/material";

interface iPropsInput {
  title: string;
}

const FilterBoxInput = ({ title }: iPropsInput) => {
  return (
    <Box>
      <h6 className="heading4-600">{title}</h6>

      <Stack
        direction={"row"}
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
