import { InputHTMLAttributes } from "react";
import { ContainerStyled, LabelStyled, InputStyled } from "./style";
import { UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: any;
  width: string;
  placeholder: string;
  register: UseFormRegister<any>;
  handlerChange?: (event: any) => void;
  isFipe?: boolean;
}

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
