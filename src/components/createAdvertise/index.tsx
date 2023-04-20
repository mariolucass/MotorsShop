import { useForm } from "react-hook-form";
import { Input } from "../inputs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { ButtonDiv, DivStyled, FormStyled, InputSplitDiv } from "./style";
import { useEffect, useState } from "react";
import { apiFipe, apiServerSideToken } from "../../services";
import { toast } from "react-toastify";
import { useModalContext } from "../../context";

interface IRegisterAnnouncement {
  brand: string;
  model: string;
  manufacture_year: number;
  fuel: string;
  mileage: number;
  color: string;
  price: string;
  price_fipe: number;
  description: string;
}

const FormSchemaRegister = z.object({
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  manufacture_year: z.string().nonempty(),
  fuel: z.string().nonempty(),
  mileage: z.string().nonempty(),
  color: z.string().nonempty(),
  price: z.string().nonempty(),
  price_fipe: z.string().nonempty(),
  description: z.string().nonempty(),
});

export const CreateAdvertise = () => {
  const { handleClose } = useModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterAnnouncement>({
    resolver: zodResolver(FormSchemaRegister),
  });

  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState(0);
  const [price, setPrice] = useState("");
  const [valueFipe, setValueFipe] = useState("");

  useEffect(() => {
    const getValueFipe = async () => {
      if (brand && name && year && fuel) {
        try {
          const response = await apiFipe.get("/unique", {
            params: { brand: brand, name: name, year: year, fuel: fuel },
          });

          setValueFipe(
            response.data.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );

          console.log(response.data.value);
        } catch (error) {
          toast.error("Não encontrado o filtro correspondente");
        }
      }
    };

    getValueFipe();
  }, [brand, name, year, fuel]);

  const submitAnnouncement = (data: any) => {
    const convertToNumber = (price: string) => {
      const numericString = price.replace(/[^0-9]/g, "");
      const numericValue = parseFloat(numericString);
      return numericValue;
    };

    data.price_fipe = convertToNumber(valueFipe);
    data.price = convertToNumber(data.price);
    data.mileage = +data.mileage;
    data.manufacture_year = +data.manufacture_year;

    try {
      apiServerSideToken.post("/announcements", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePriceChange = (event: any) => {
    const numberValue = parseFloat(event.target.value.replace(/,/g, ""));
    if (!isNaN(numberValue)) {
      setPrice(
        numberValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
  };

  return (
    <DivStyled>
      <FormStyled onSubmit={handleSubmit(submitAnnouncement)}>
        <h1>Criar anúncio </h1>
        <h3>Informações do veículo </h3>

        <Input
          name={"brand"}
          register={register}
          error={errors.brand}
          label={"Marca"}
          placeholder={"Mercedes Benz"}
          width={"100"}
          handlerChange={(event) => setBrand(event?.target.value)}
        />

        <Input
          name={"model"}
          register={register}
          error={errors.model}
          label={"Modelo"}
          placeholder={"A 200 CGI ADVANCE SEDAN"}
          width={"100"}
          handlerChange={(event) => setName(event?.target.value)}
        />

        <InputSplitDiv>
          <Input
            name={"manufacture_year"}
            type="number"
            register={register}
            error={errors.manufacture_year}
            label={"Ano"}
            placeholder={"2018"}
            width={"50"}
            handlerChange={(event) => setYear(event?.target.value)}
          />

          <Input
            name={"fuel"}
            register={register}
            error={errors.fuel}
            label={"Combustível"}
            placeholder={"Gasolina / Etanol"}
            width={"50"}
            handlerChange={(event) => {
              if (event?.target.value === "Gasolina") {
                setFuel(1);
              } else if (event?.target.value === "Etanol") {
                setFuel(2);
              }
            }}
          />
        </InputSplitDiv>

        <InputSplitDiv>
          <Input
            name={"mileage"}
            register={register}
            error={errors.mileage}
            label={"Quilometragem"}
            placeholder={"30000"}
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
            error={errors.price_fipe}
            label={"Preco tabela FIPE"}
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
            label={"Preco"}
            value={price}
            handlerChange={(event) => setPrice(event.target.value)}
            placeholder={"R$ 50.000,00"}
            width={"50"}
          />
        </InputSplitDiv>

        <Input
          name={"description"}
          register={register}
          error={errors.description}
          label={"Descricão"}
          placeholder={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
          width={"100"}
        />

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
