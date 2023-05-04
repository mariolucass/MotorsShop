import React, { createContext, useContext, useEffect, useState } from "react";
import { useFilterContext } from "./FilterContext";
import { apiUsingNow } from "../services";
import { iAnnouncement, iChildren } from "../interfaces";

interface iDataProps {
  AdvertsData: iAnnouncement[];
  setAdvertsData: React.Dispatch<React.SetStateAction<iAnnouncement[]>>;

  specificAdvertData: iAnnouncement | undefined;
  setSpecificAdvertData: React.Dispatch<
    React.SetStateAction<iAnnouncement | undefined>
  >;
}

export interface IImageRequest {
  image: string;
}

const DataContext = createContext({} as iDataProps);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataPrivider = ({ children }: iChildren) => {
  const [AdvertsData, setAdvertsData] = useState<iAnnouncement[]>([]);

  const [specificAdvertData, setSpecificAdvertData] = useState<iAnnouncement>();
  const {
    Marca,
    Ano,
    Combustivel,
    Cor,
    Modelo,
    MaxKm,
    MinKm,
    MaxPrice,
    MinPrice,
  } = useFilterContext();
  const queryArray = [
    Marca,
    Ano,
    Combustivel,
    Cor,
    Modelo,
    MaxKm,
    MinKm,
    MaxPrice,
    MinPrice,
  ];

  let countQueryArray = 0;

  for (let i = 0; i < queryArray.length; i++) {
    if (queryArray[i]) {
      countQueryArray++;
    }
  }

  const query = `announcements${countQueryArray !== 0 ? "?" : ""}`;

  const brandQuery = Marca
    ? `${query}brand=${Marca}${countQueryArray !== 0 ? "&" : ""}`
    : query;

  const modelQuery = Modelo
    ? `${brandQuery}model=${Modelo}${countQueryArray !== 0 ? "&" : ""}`
    : brandQuery;

  const manufacture_yearQuery = Ano
    ? `${modelQuery}manufacture_year=${Ano}${countQueryArray !== 0 ? "&" : ""}`
    : modelQuery;

  const fuelQuery = Combustivel
    ? `${manufacture_yearQuery}fuel=${Combustivel}${
        countQueryArray !== 0 ? "&" : ""
      }`
    : manufacture_yearQuery;

  const colorQuery = Cor
    ? `${fuelQuery}color=${Cor}${countQueryArray !== 0 ? "&" : ""}`
    : fuelQuery;

  const priceMinQuery = MinPrice
    ? `${colorQuery}priceMin=${MinPrice}${countQueryArray !== 0 ? "&" : ""}`
    : colorQuery;

  const priceMaxQuery = MaxPrice
    ? `${priceMinQuery}priceMax=${MaxPrice}${countQueryArray !== 0 ? "&" : ""}`
    : priceMinQuery;

  const mileageMinQuery = MinKm
    ? `${priceMaxQuery}mileageMin=${MinKm}${countQueryArray !== 0 ? "&" : ""}`
    : priceMaxQuery;

  const mileageMaxQuery = MaxKm
    ? `${mileageMinQuery}mileageMax=${MaxKm}${countQueryArray !== 0 ? "&" : ""}`
    : mileageMinQuery;
  useEffect(() => {
    try {
      apiUsingNow
        .get(`/${mileageMaxQuery}`)
        .then((res) => setAdvertsData(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [mileageMaxQuery]);

  return (
    <DataContext.Provider
      value={{
        AdvertsData,
        setAdvertsData,
        specificAdvertData,
        setSpecificAdvertData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
