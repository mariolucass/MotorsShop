import { marcas } from "../../data";
import { AutoCompleteDiv } from "./style";
import { iModelApi } from "../../interfaces";
import { capitalizeString } from "../../utils";
import { iAnnouncement } from "../../interfaces";
import { Autocomplete, TextField } from "@mui/material";

export interface IPropsAutoComplete {
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
  models?: iModelApi[];
  modelsDash?: iAnnouncement[];
  values?: Array<string>;
}

export const AutoCompletes = ({
  setBrand,
  setModel,
  models,
  modelsDash,
  values,
}: IPropsAutoComplete) => {
  const brandsToSelect = modelsDash
    ? marcas.map((elem) => capitalizeString(elem.name))
    : marcas.map((elem) => capitalizeString(elem.name));

  const modelsToSelect = modelsDash
    ? modelsDash.map((elem) => capitalizeString(elem.model))
    : models!.map((elem) => capitalizeString(elem.name));

  const handleBrandChange = (event: any) => {
    setBrand(event.target.textContent.toLowerCase());
  };

  const handleModelChange = (event: any) => {
    setModel(event.target.textContent.toLowerCase());
  };

  return (
    <>
      <AutoCompleteDiv isdash={modelsDash ? "true" : "false"}>
        <label htmlFor="brandSelect"> Marca</label>

        <Autocomplete
          freeSolo
          id="brandSelect"
          className="autoComplete"
          options={brandsToSelect}
          onChange={handleBrandChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="Mercedes Benz" />
          )}
          value={values ? values[0] : ""}
        />
      </AutoCompleteDiv>

      <AutoCompleteDiv isdash={modelsDash ? "true" : "false"}>
        <label htmlFor="modelSelect"> Modelo</label>

        <Autocomplete
          freeSolo
          id="modelSelect"
          className="autoComplete"
          options={modelsToSelect}
          onChange={handleModelChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="A 200 CGI ADVANCE SEDAN" />
          )}
          value={values ? values[1] : ""}
        />
      </AutoCompleteDiv>
    </>
  );
};
