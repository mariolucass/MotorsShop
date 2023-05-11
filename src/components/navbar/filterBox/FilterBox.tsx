import { styled } from "@mui/material/styles";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  useRadioGroup,
  FormControlLabelProps,
} from "@mui/material";
import {
  useDataContext,
  useLoadingContext,
  useMediaContext,
} from "../../../context";

interface iStyledLabelProps extends FormControlLabelProps {
  checked: boolean;
}
interface iProps {
  title: string;
  options: Array<string>;
  to?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FilterBox = ({ title, options, to }: iProps) => {
  const { matches900 } = useMediaContext();
  const { setIsLoadingAdverts } = useLoadingContext();
  const { valueToRadioGroup, setValueToRadioGroup, resetRadio, setResetRadio } =
    useDataContext();

  const LabelPersonalized = ({ value }: any) => {
    const radioGroup = useRadioGroup();
    let checked = false;

    if (valueToRadioGroup) {
      checked = valueToRadioGroup === value;
    } else if (radioGroup) {
      checked = radioGroup.value === value;
    }

    return (
      <StyledLabel
        value={value}
        label={value}
        checked={checked}
        onChange={() => {
          setResetRadio(false);
          setIsLoadingAdverts(true);
          setValueToRadioGroup(undefined);
          to!(value);
        }}
        control={<Radio sx={{ "&:first-child": { display: "none" } }} />}
        sx={{
          listStyle: "none",
          fontWeight: 500,
          cursor: "pointer",
          width: "100%",
          color: "#868e96",
          m: 0,
          "&:hover": { transition: 0.5, color: "#4529e6" },
        }}
      />
    );
  };

  const StyledLabel = styled((props: iStyledLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      color: resetRadio ? "#868e96" : "#5126ea",
    },
  }));

  const LabelsToRender = options.map((value) => (
    <LabelPersonalized value={value} key={value} />
  ));

  return (
    <Box>
      <h6 className={matches900 ? "heading6-600" : "heading4-600"}>{title}</h6>
      <Stack
        spacing={1}
        sx={{
          m: 1,
          mb: 2,
          mt: 2,
        }}
      >
        <RadioGroup>{LabelsToRender}</RadioGroup>
      </Stack>
    </Box>
  );
};

export default FilterBox;
