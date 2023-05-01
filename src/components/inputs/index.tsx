import { ContainerStyled, LabelStyled, InputStyled } from "./style";
import { iInputProps } from "../../interfaces";

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
  isFile,
}: iInputProps) => {
  console.log(error);
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
  ) : isFile ? (
    <ContainerStyled width={width}>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        type="file"
        accept="images/*"
        {...register(name)}
        placeholder={placeholder}
        className={error && "errorInput"}
        onChange={handlerChange}
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
