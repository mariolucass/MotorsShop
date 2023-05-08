import { Input } from "../inputs";
import { Button } from "@mui/material";
import { FieldImages } from "./fieldImages";
import { useEffect, useState } from "react";
import { AutoCompletes } from "../autoCompletes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { getModelsByBrandFipe } from "../../services/apiFipe";
import { capitalizeString, monetizeString } from "../../utils";
import { ContainerStyled, LabelStyled } from "../inputs/style";
import { useAnnouncementContext, useModalContext } from "../../context";
import { createAnnouncementSchema } from "../../schemas/announcementSchema";
import {
  iAnnouncementRequest,
  iCreateAnnouncement,
  iModelApi,
} from "../../interfaces";
import {
  ButtonDiv,
  DivFieldImages,
  DivStyled,
  FormStyled,
  InputSplitDiv,
} from "./style";

export const CreateAdvertise = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState<iModelApi[]>([]);

  const { handleClose } = useModalContext();
  const { createAnnouncement } = useAnnouncementContext();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<iCreateAnnouncement>({
    resolver: zodResolver(createAnnouncementSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  } as never);

  useEffect(() => {
    if (brand.length) {
      (async () => setModels(await getModelsByBrandFipe(brand)))();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand]);

  useEffect(() => {
    if (model.length) {
      const getYearAndFuel = async () => {
        const modelFind = models.find((elem) => elem.name === model);
        if (modelFind) {
          const fuelTypes = ["Flex", "Hibrido", "Eletrico"];
          const fuelType = fuelTypes[modelFind.fuel - 1];
          const valueMonetized = monetizeString(modelFind.value);
          setValue("manufacture_year", modelFind.year);
          setValue("fuel", fuelType);
          setValue("price_fipe", valueMonetized);
        }
      };
      getYearAndFuel();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  const listFieldImages = fields.map((field, index) => (
    <FieldImages
      key={index}
      index={index}
      errors={errors}
      register={register}
      remove={remove}
    />
  ));

  return (
    <DivStyled>
      <FormStyled
        onSubmit={handleSubmit((formData) => {
          let data: iAnnouncementRequest;
          data = {
            ...formData,
            mileage: +formData.mileage,
            brand: capitalizeString(brand),
            model: capitalizeString(model),
          };
          createAnnouncement(data);
          handleClose();
        })}
      >
        <h1>Criar anúncio </h1>
        <h3>Informações do veículo </h3>

        <AutoCompletes
          models={models}
          setBrand={setBrand}
          setModel={setModel}
        />

        <InputSplitDiv>
          <Input
            type="number"
            name={"manufacture_year"}
            register={register}
            label={"Ano"}
            placeholder={"2018"}
            width={"50"}
          />

          <Input
            name={"fuel"}
            register={register}
            label={"Combustível"}
            placeholder={"Gasolina / Etanol"}
            width={"50"}
          />
        </InputSplitDiv>

        <InputSplitDiv>
          <Input
            type="number"
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
          />
          <Input
            type="number"
            name={"price"}
            register={register}
            error={errors.price}
            label={"Preço"}
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
              onClick={() => fields.length < 6 && append({})}
            >
              Adicionar
            </Button>
          </LabelStyled>

          <DivFieldImages>{listFieldImages}</DivFieldImages>
        </ContainerStyled>

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
