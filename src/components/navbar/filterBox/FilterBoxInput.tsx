import { Box, OutlinedInput, Stack } from "@mui/material";
import { useMediaContext } from "../../../context";

interface iPropsInput {
  title: string;
  max: React.Dispatch<React.SetStateAction<string | undefined>>;
  min: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FilterBoxInput = ({ title, max, min }: iPropsInput) => {
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
        <OutlinedInput
          placeholder="Minimo"
          id="Minimo"
          onChange={(event) => min(event.target.value)}
        />

        <OutlinedInput
          placeholder="Maximo"
          id="max"
          onChange={(event) => max(event.target.value)}
        />
      </Stack>
    </Box>
  );
};

export default FilterBoxInput;
