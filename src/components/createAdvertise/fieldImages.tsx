import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { Button } from "@mui/material";
import { DivButtonsImage } from "./style";
import { InputStyled, LabelStyled } from "../inputs/style";

interface IPropsFieldImages {
  index: number;
  register: UseFormRegister<any>;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<{
    mileage: string;
    color: string;
    price: string;
    description: string;
    imageCover: File;
    images: File[];
  }>;
}

export const FieldImages = ({
  index,
  register,
  remove,
  errors,
}: IPropsFieldImages) => {
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
            {...register(`images.${index}`)}
            id={`fileImage${index}`}
            type="file"
            accept="images/*"
            placeholder="Coloque a imagem aqui"
            className={errors.images && errors.images[index] && "errorInput"}
          />
        </Button>

        <Button size="small" onClick={() => remove(index)}>
          Remover
        </Button>
      </DivButtonsImage>
    </>
  );
};
