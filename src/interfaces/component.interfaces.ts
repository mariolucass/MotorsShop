import { InputHTMLAttributes } from "react";
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

export interface IBox {
  children: React.ReactElement;
  Class?: string;
}

export interface IAdvertsProps {
  isProfile?: boolean;
}
