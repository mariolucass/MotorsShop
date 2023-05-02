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
  if (isFipe) {
    return (
      <ContainerStyled width={width}>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled
          {...register(name)}
          placeholder={placeholder}
          className={error && "errorInput"}
          value={value !== undefined ? value : ""}
        />
      </ContainerStyled>
    );
  }
  if (isFile) {
    return (
      <ContainerStyled width={width}>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled
          type="file"
          accept="images/*"
          {...register(name)}
          placeholder={placeholder}
          className={error && "errorInput"}
        />
      </ContainerStyled>
    );
  }
  return (
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
