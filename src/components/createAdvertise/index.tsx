import { Input } from "../inputs";
import { marcas } from "../../data";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useModalContext, useUploadContext } from "../../context";
import { postAnnouncement } from "../../services";
import { zodResolver } from "@hookform/resolvers/zod";
import { getModelsByBrandFipe } from "../../services/apiFipe";
import { Autocomplete, Button, TextField } from "@mui/material";
import { iCreateAnnouncement, iModelApi } from "../../interfaces";
import { createAnnouncementSchema } from "../../schemas/announcementSchema";
import {
  capitalizeString,
  convertToNumber,
  monetizeString,
} from "../../utils/utils";
import {
  AutoCompleteDiv,
  ButtonDiv,
  DivStyled,
  FormStyled,
  InputSplitDiv,
} from "./style";
import { Upload } from "../upload";

export const CreateAdvertise = () => {
  const { handleClose } = useModalContext();
  const { uploadFiles, setUploadFiles } = useUploadContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<iCreateAnnouncement>({
    resolver: zodResolver(createAnnouncementSchema),
  });

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<iModelApi[]>([]);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [valueFipe, setValueFipe] = useState("");

  useEffect(() => {
    if (brand.length) {
      (async () => setModels(await getModelsByBrandFipe(brand)))();
    }
  }, [brand]);

  useEffect(() => {
    if (model.length) {
      const getYearAndFuel = async () => {
        const modelFind = models.find((elem) => elem.name === model);

        if (modelFind) {
          setYear(modelFind.year);
          const valueMonetized = monetizeString(modelFind.value);
          setValueFipe(valueMonetized);
          const fuelTypes = ["Flex", "Hibrido", "Eletrico"];
          const fuelType = fuelTypes[modelFind.fuel - 1];
          setFuel(fuelType);
        }
      };
      getYearAndFuel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  const submitAnnouncement = async (data: any) => {
    data.brand = capitalizeString(brand);
    data.model = capitalizeString(model);
    data.price_fipe = convertToNumber(valueFipe);
    data.price = convertToNumber(data.price);
    data.manufacture_year = year;
    data.fuel = fuel;
    data.mileage = +data.mileage;
    data.listImage = uploadFiles;

    // try {
    //   await postAnnouncement(data);

    //   toast.success(
    //     "Anúncio criado com sucesso, obrigado por usar nossa plataforma"
    //   );
    //   handleClose();
    //   setUploadFiles([]);
    // } catch (error) {
    //   toast.error(
    //     "Infelizmente não foi possivel cadastrar o anúncio, se possivel tente mais tarde."
    //   );
    // }
  };

  const brandsToSelect = marcas.map((elem) => capitalizeString(elem));
  const modelsToSelect = models.map((elem: iModelApi) =>
    capitalizeString(elem.name)
  );

  const handleBrandChange = (event: any) => {
    setBrand(event.target.textContent.toLowerCase());
  };

  const handleModelChange = (event: any) => {
    setModel(event.target.textContent.toLowerCase());
  };

  return (
    <DivStyled>
      <FormStyled onSubmit={handleSubmit(submitAnnouncement)}>
        <h1>Criar anúncio </h1>
        <h3>Informações do veículo </h3>
        <AutoCompleteDiv>
          <label htmlFor="brandSelect"> Marca</label>

          <Autocomplete
            id="brandSelect"
            className="autoComplete"
            options={brandsToSelect}
            onChange={handleBrandChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Mercedes Benz" />
            )}
          />
        </AutoCompleteDiv>
        <AutoCompleteDiv>
          <label htmlFor="modelSelect"> Modelo</label>
          <Autocomplete
            id="modelSelect"
            className="autoComplete"
            options={modelsToSelect}
            onChange={handleModelChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="A 200 CGI ADVANCE SEDAN" />
            )}
          />
        </AutoCompleteDiv>
        <InputSplitDiv>
          <Input
            name={"manufacture_year"}
            type="number"
            register={register}
            label={"Ano"}
            placeholder={"2018"}
            value={year}
            width={"50"}
            isFipe={true}
          />

          <Input
            name={"fuel"}
            register={register}
            label={"Combustível"}
            value={fuel}
            placeholder={"Gasolina / Etanol"}
            width={"50"}
            isFipe={true}
          />
        </InputSplitDiv>
        <InputSplitDiv>
          <Input
            name={"mileage"}
            register={register}
            error={errors.mileage}
            label={"Quilometragem"}
            placeholder={"30.000"}
            width={"50"}
          />

          <Input
            name={"color"}
            register={register}
            error={errors.color}
            label={"Cor"}
            placeholder={"Branco"}
            width={"50"}
          />
        </InputSplitDiv>
        <InputSplitDiv>
          <Input
            type="number"
            name={"price_fipe"}
            register={register}
            label={"Preço tabela FIPE"}
            placeholder={"R$ 40.000,00"}
            width={"50"}
            value={valueFipe}
            isFipe={true}
          />
          <Input
            type="number"
            name={"price"}
            register={register}
            error={errors.price}
            label={"Preço"}
            value={price}
            handlerChange={(event: any) => setPrice(event.target.value)}
            placeholder={"R$ 50.000,00"}
            width={"50"}
          />
        </InputSplitDiv>
        <Input
          name={"description"}
          register={register}
          error={errors.description}
          label={"Descrição"}
          placeholder={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
          width={"100"}
        />

        <Input
          name={"imagemCapa"}
          register={register}
          error={errors.imagemCapa}
          label={"Imagem da capa"}
          placeholder={" https://image.com"}
          width={"100"}
          isFile
        />

        <Upload />
        <ButtonDiv>
          <Button className="buttonForms" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="buttonForms" type="submit">
            Criar anúncio
          </Button>
        </ButtonDiv>
      </FormStyled>
    </DivStyled>
  );
};
