import articles from "./article-content";
import ArticleList from "./components/ArticlesList";
export default function ArticleListPage() {
  return (
    <>
      <h1>Article</h1>
      <ArticleList articles={articles} />
    </>
  );
}
