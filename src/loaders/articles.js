import { articlesApi } from "../services/articlesApi";

export const articleLoader = async ({ params }) => {
  return await articlesApi.getByName(params.name);
};

export const articlesLoader = async ({ type }) => {
  return await articlesApi.getAll(type);
};
