import { articlesApi } from "../services/articlesApi";

export const articleLoader = async ({ params }) => {
  return await articlesApi.getByName(params.name);
};

export const articlesLoader = async () => {
  return await articlesApi.getAll();
};
