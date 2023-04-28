import { apiFipe } from "./api";

export const getModelsByBrandFipe = async (brand: string) => {
  const { data: response } = await apiFipe.get("/", {
    params: { brand: brand },
  });

  return response;
};

export const getModelsFipe = async () => {
  const { data: response } = await apiFipe.get("/");

  return response;
};
