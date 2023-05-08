import { iInputProps } from "../../interfaces";
import { ContainerStyled, LabelStyled, InputStyled } from "./style";

export const Input = ({
  name,
  error,
  label,
  width,
  placeholder,
  register,
  handlerChange,
  isFile,
}: iInputProps) => (
  <ContainerStyled width={width}>
    <LabelStyled>{label}</LabelStyled>
    {isFile ? (
      <InputStyled
        {...register(name)}
        placeholder={placeholder}
        className={error && "errorInput"}
        type="file"
        accept="images/*"
      />
    ) : (
      <InputStyled
        {...register(name)}
        placeholder={placeholder}
        className={error && "errorInput"}
        onChange={handlerChange}
      />
    )}
  </ContainerStyled>
);
