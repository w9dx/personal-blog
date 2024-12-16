import { useLoaderData } from "react-router-dom";
import ArticleList from "./components/ArticlesList";
export default function ArticleListPage() {
  const articles = useLoaderData();
  return (
    <>
      <h1>Article</h1>
      <ArticleList articles={articles} />
    </>
  );
}
