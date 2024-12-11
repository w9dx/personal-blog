import { articlesApi } from "../api/articlesApi";
import ArticleList from "./components/ArticlesList";
export default function ArticleListPage() {
  return (
    <>
      <h1>Article</h1>
      <ArticleList articles={articlesApi.getAll()} />
    </>
  );
}
