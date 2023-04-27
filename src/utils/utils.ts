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
