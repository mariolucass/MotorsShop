import { FormEvent } from "react";
import { formatPhone } from "./formatPhone";

export const monetizeString = (money: number) => {
  return money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const capitalizeString = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const convertToNumber = (price: string) => {
  const numericString = price.replace(/[^0-9]/g, "");
  const numericValue = parseFloat(numericString);
  return String(numericValue);
};

export const usernameLimiter = (name: string) => {
  const username = name ? name.split(" ") : "User";
  return username.length > 1 ? username[0] + " " + username[1] : username[0];
};

export const handleCpf = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  e.currentTarget.value = value;
};

export const handlePhone = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  e.currentTarget.value = formatPhone(value);
};

export const handleBirthdate = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");
  e.currentTarget.value = value;
};

export const handleCep = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
};

export const getFuelType = (fuel: number) => {
  const fuelTypes = ["Flex", "Hibrido", "Eletrico"];
  return fuelTypes[fuel - 1];
};
