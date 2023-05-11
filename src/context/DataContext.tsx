import React, { createContext, useContext, useEffect, useState } from "react";
import { useFilterContext } from "./FilterContext";
import {
  getAnnouncementWithQuery,
  getFilteredAnnouncements,
} from "../services";
import { iAnnouncement, iChildren } from "../interfaces";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface iDataProps {
  AdvertsData: iAnnouncement[];
  setAdvertsData: React.Dispatch<React.SetStateAction<iAnnouncement[]>>;
  announcementsDash: iAnnouncement[];
  setAnnouncementsDash: React.Dispatch<React.SetStateAction<iAnnouncement[]>>;

  specificAdvertData: iAnnouncement | undefined;
  setSpecificAdvertData: React.Dispatch<
    React.SetStateAction<iAnnouncement | undefined>
  >;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  image: string | undefined;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchParams: URLSearchParams;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;

  anos: string[];
  cores: string[];
  marcas: string[];
  modelos: string[];
  combustiveis: string[];

  setAnos: React.Dispatch<React.SetStateAction<string[]>>;
  setCores: React.Dispatch<React.SetStateAction<string[]>>;
  setModelos: React.Dispatch<React.SetStateAction<string[]>>;
  setCombustiveis: React.Dispatch<React.SetStateAction<string[]>>;
  setMarcas: React.Dispatch<React.SetStateAction<string[]>>;

  valueToRadioGroup: string | undefined;
  setValueToRadioGroup: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;

  setFilterBoxOptions: (announcement: iAnnouncement[]) => void;
  resetRadio: boolean;
  setResetRadio: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IImageRequest {
  image: string;
}

const DataContext = createContext({} as iDataProps);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: iChildren) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [AdvertsData, setAdvertsData] = useState<iAnnouncement[]>([]);
  const [shouldReadToken, setShouldReadToken] = useState(false);

  const [anos, setAnos] = useState<string[]>([]);
  const [cores, setCores] = useState<string[]>([]);
  const [modelos, setModelos] = useState<string[]>([]);
  const [combustiveis, setCombustiveis] = useState<string[]>([]);
  const [marcas, setMarcas] = useState<string[]>([]);
  const [resetRadio, setResetRadio] = useState(false);

  const [valueToRadioGroup, setValueToRadioGroup] = useState<
    string | undefined
  >(undefined);

  const [announcementsDash, setAnnouncementsDash] = useState<iAnnouncement[]>(
    []
  );

  const setFilterBoxOptions = (announcements: iAnnouncement[]) => {
    const modelsName = announcements.map((elem) => {
      const [name1, name2] = elem.model.split(" ");
      return [name1, name2].join(" ");
    });

    const modelsCores = announcements.map((elem) => elem.color);
    const modelCombustiveis = announcements.map((elem) => elem.fuel);
    const modelAnos = announcements.map((elem) => elem.manufacture_year);

    const modelsSetAnos = new Set(modelAnos);
    const modelsSetNames = new Set(modelsName);
    const modelsSetCores = new Set(modelsCores);
    const modelsSetCombustiveis = new Set(modelCombustiveis);

    setAnos(Array.from(modelsSetAnos));
    setCores(Array.from(modelsSetCores));
    setModelos(Array.from(modelsSetNames));
    setCombustiveis(Array.from(modelsSetCombustiveis));
  };

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
    page,
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

  const query = `${countQueryArray !== 0 ? "?" : ""}`;

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

  const pagination =
    page !== 0
      ? `${mileageMaxQuery}page=${page - 1}${countQueryArray !== 0 ? "&" : ""}`
      : mileageMaxQuery;

  useEffect(() => {
    const filterInLocalStorage = localStorage.getItem("@MotorsShop:filter");

    if (filterInLocalStorage) {
      setShouldReadToken(true);
    } else {
      setShouldReadToken(false);
    }
  }, []);

  useEffect(() => {
    if (shouldReadToken) {
      getAdvertsWithToken();
      setShouldReadToken(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReadToken]);

  useEffect(() => {
    if (!shouldReadToken) {
      getAdvertWithoutToken();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const getAdvertsWithToken = async () => {
    const filterInLocalStorage = localStorage.getItem("@MotorsShop:filter");
    const objFilter = JSON.parse(filterInLocalStorage!);
    const announcements = await getAnnouncementWithQuery({
      brand: objFilter.brand,
    });

    if (!announcements.length) {
      toast.error(
        "Não foram encontrados anúncios com o filtro especificado, tente limpá-lo"
      );
    } else {
      setAdvertsData(announcements);
      setFilterBoxOptions(announcements);
      setValueToRadioGroup(objFilter.brand && objFilter.brand);
    }
  };

  const getAdvertWithoutToken = async () => {
    if (AdvertsData.length) {
      const announcements = await getFilteredAnnouncements(pagination);
      if (announcements.length) {
        setAdvertsData(announcements);
        setFilterBoxOptions(announcements);
      } else {
        setAdvertsData([]);
      }
    }
    if (pagination !== "?page=0&") {
      setSearchParams(pagination);
    }
  };

  return (
    <DataContext.Provider
      value={{
        AdvertsData,
        setAdvertsData,
        specificAdvertData,
        setSpecificAdvertData,
        page,
        setPage,
        open,
        setOpen,
        image,
        setImage,
        searchParams,
        count,
        setCount,
        announcementsDash,
        setAnnouncementsDash,
        anos,
        setAnos,
        cores,
        setCores,
        combustiveis,
        setCombustiveis,
        marcas,
        setMarcas,
        modelos,
        setModelos,
        valueToRadioGroup,
        setValueToRadioGroup,
        setFilterBoxOptions,
        resetRadio,
        setResetRadio,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
