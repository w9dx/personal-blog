import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articlesApi } from "../api/articlesApi";

export default function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(articlesApi.getByName(name));
  }, [name]);

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content?.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </>
  );
}
