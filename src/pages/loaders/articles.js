import axios from "axios";

export const articleLoader = async ({ params }) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/api/articles/${params.name}`
  );
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
};
