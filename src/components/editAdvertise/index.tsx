import { Input } from "../inputs";
import { marcas } from "../../data";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAnnouncementContext, useModalContext } from "../../context";
import { zodResolver } from "@hookform/resolvers/zod";
import { getModelsByBrandFipe } from "../../services/apiFipe";
import { Autocomplete, Button, TextField } from "@mui/material";
import {
  iAnnouncementRequest,
  iCreateAnnouncement,
  iModelApi,
} from "../../interfaces";
import { createAnnouncementSchema } from "../../schemas/announcementSchema";
import { capitalizeString, convertToNumber, monetizeString } from "../../utils";
import {
  AutoCompleteDiv,
  ButtonDiv,
  DivButtonsImage,
  DivFieldImages,
  DivStyled,
  FormStyled,
  InputSplitDiv,
} from "./style";
import { ContainerStyled, InputStyled, LabelStyled } from "../inputs/style";
import { deleteAnnouncement, getAnnouncementById } from "../../services";
import { toast } from "react-toastify";

interface IProps {
  id: string;
}

export const EditAdvertise = ({ id }: IProps) => {
  const { handleCloseEditAnnouncement } = useModalContext();
  const { editAnnouncement } = useAnnouncementContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<iCreateAnnouncement>({
    resolver: zodResolver(createAnnouncementSchema),
  });

  const excludeAnnouncement = async () => {
    try {
      const response = await deleteAnnouncement(id);
      console.log(response);
      handleCloseEditAnnouncement();
      toast.success("Anuncio excluido com sucesso.");
    } catch (error) {
      console.log(error);
      handleCloseEditAnnouncement();
      toast.error("A exclusão do anúncio falhou, tente novamente mais tarde.");
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  } as never);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<iModelApi[]>([]);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [valueFipe, setValueFipe] = useState("");
  console.log(id);

  useEffect(() => {
    const getFieldsValueOfAnnouncement = async () => {
      const advertiseData = await getAnnouncementById(id);

      if (advertiseData) {
        setBrand(advertiseData ? advertiseData.brand : "");
        setModel(advertiseData ? advertiseData.model : "");
        setYear(advertiseData ? advertiseData.manufacture_year : "");
        setFuel(advertiseData ? advertiseData.fuel : "");
        setValueFipe(advertiseData ? advertiseData.price_fipe : " ");
        setValue("mileage", advertiseData ? String(advertiseData.mileage) : "");
        setValue("price", advertiseData ? String(advertiseData.price) : "");
        setValue("description", advertiseData ? advertiseData.description : "");
      }
    };

    getFieldsValueOfAnnouncement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <FormStyled
        onSubmit={handleSubmit((formData) => {
          let data: iAnnouncementRequest;
          data = {
            ...formData,
            brand: capitalizeString(brand),
            model: capitalizeString(model),
            price_fipe: convertToNumber(valueFipe),
            price: convertToNumber(formData.price),
            manufacture_year: year,
            fuel,
            mileage: +formData.mileage,
          };
          editAnnouncement(id, data);
          handleCloseEditAnnouncement();
        })}
      >
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

        <LabelStyled>Imagem da capa</LabelStyled>
        <Button
          variant="contained"
          component="label"
          className="button_as_input"
        >
          Enviar
          <Input
            id="imageCover"
            name={"imageCover"}
            register={register}
            error={errors.imageCover}
            placeholder={" https://image.com"}
            width={"100"}
            isFile
          />
        </Button>

        <ContainerStyled width={"100"}>
          <LabelStyled>
            Imagens
            <Button
              size="small"
              onClick={() => {
                fields.length < 6 && append({});
              }}
            >
              Adicionar
            </Button>
          </LabelStyled>
          <DivFieldImages>
            {fields.map((field, index) => {
              return (
                <>
                  <LabelStyled>Imagem {index + 1}</LabelStyled>
                  <DivButtonsImage>
                    <Button
                      variant="contained"
                      component="label"
                      className="button_as_input image_fields"
                      sx={{ width: "75%" }}
                    >
                      Enviar
                      <InputStyled
                        id={`fileImage${index}`}
                        type="file"
                        accept="images/*"
                        {...register(`images.${index}`)}
                        placeholder="Coloque a imagem aqui"
                        className={
                          errors.images && errors.images[index] && "errorInput"
                        }
                      />
                    </Button>

                    <Button
                      size="small"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remover
                    </Button>
                  </DivButtonsImage>
                </>
              );
            })}
          </DivFieldImages>
        </ContainerStyled>

        <ButtonDiv>
          <Button className="buttonForms" onClick={excludeAnnouncement}>
            Excluir
          </Button>

          <Button className="buttonForms" type="submit">
            Editar Anúncio
          </Button>
        </ButtonDiv>
      </FormStyled>
    </DivStyled>
  );
};
