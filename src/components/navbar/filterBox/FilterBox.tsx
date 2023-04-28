import { Box, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { StyledOptions } from "./style";
import { useFilterContext, useMediaContext } from "../../../context";

interface iProps {
  title: string;
  options: Array<string>;
  to?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FilterBox = ({ title, options, to }: iProps) => {
  const { matches900 } = useMediaContext();

  return (
    <Box>
      <h6 className={matches900 ? "heading6-600" : "heading4-600"}>{title}</h6>
      <Stack
        sx={{
          m: 1,
          mb: 2,
          mt: 2,
        }}
        spacing={1}
      >
        <RadioGroup>
          {options.map((value, i) => (
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={value}
              onClick={() => {
                to!(value);
              }}
              key={i}
            />
          ))}
        </RadioGroup>
      </Stack>
    </Box>
  );
};

export default FilterBox;
