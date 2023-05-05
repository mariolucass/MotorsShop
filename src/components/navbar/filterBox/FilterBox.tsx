import { Box, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useMediaContext } from "../../../context";
import { useState } from "react";

interface iProps {
  title: string;
  options: Array<string>;
  to?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FilterBox = ({ title, options, to }: iProps) => {
  const [Active, setActive] = useState(false);
  const { matches900 } = useMediaContext();
  console.log(Active);
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
              control={
                <Radio
                  sx={{ "&:first-child": { display: "none" } }}
                  onClick={() => {
                    setActive(!Active);
                  }}
                />
              }
              label={
                <Box
                  sx={{
                    color: "#868e96",
                    "&:hover": { transition: 0.5, color: "#4529e6" },
                  }}
                >
                  {value}
                </Box>
              }
              onClick={() => {
                to!(value);
              }}
              key={i}
              sx={{
                listStyle: "none",
                fontWeight: 500,
                cursor: "pointer",
                width: "100%",
                m: 0,
              }}
            />
          ))}
        </RadioGroup>
      </Stack>
    </Box>
  );
};

export default FilterBox;
