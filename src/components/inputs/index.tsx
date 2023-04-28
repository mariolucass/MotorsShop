import { ContainerStyled, LabelStyled, InputStyled } from "./style";
import { IInputProps } from "../../interfaces";

export const Input = ({
  name,
  error,
  label,
  width,
  value,
  placeholder,
  isFipe,
  register,
  handlerChange,
}: IInputProps) => {
  return isFipe ? (
    <ContainerStyled width={width}>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        {...register(name)}
        placeholder={placeholder}
        className={error && "errorInput"}
        value={value !== undefined ? value : ""}
      />
    </ContainerStyled>
  ) : (
    <ContainerStyled width={width}>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        {...register(name)}
        placeholder={placeholder}
        className={error && "errorInput"}
        onChange={handlerChange}
      />
    </ContainerStyled>
  );
};
