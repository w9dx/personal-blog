import { axiosInstance } from "./axiosInstance";

export const articlesApi = {
  getAll: async (type) => {
    const response = await axiosInstance.get("/api/articles?type=" + type);
    const articles = response.data;
    return articles;
  },
  getByName: async (name) => {
    const response = await axiosInstance.get(`/api/articles/${name}`);
    const article = response.data;
    return article;
  },
  upvote: async (name) => {
    const response = await axiosInstance.post(`/api/articles/${name}/upvote`);
    const article = response.data;
    return article;
  },
  addComment: async (name, { postedBy, commentText }) => {
    const response = await axiosInstance.post(
      `/api/articles/${name}/comments`,
      { postedBy, commentText },
    );
    const article = response.data;
    return article;
  },
};
