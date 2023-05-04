import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: any;
  width: string;
  placeholder: string;
  register: UseFormRegister<any>;
  handlerChange?: (event: any) => void;
  isFipe?: boolean;
  isFile?: boolean;
}

export interface iBox {
  children: React.ReactElement;
  Class?: string;
}

export interface iAdvertsProps {
  isProfile?: boolean;
  isHome?: boolean;
}

export interface iChip {
  label: string | number;
}
