import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { articlesApi } from "../api/articlesApi";
import CommentsList from "./components/CommentsList";
import axios from "axios";

export default function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState([]);
  const { upvotes: initialUpvotes, comments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  useEffect(() => {
    setArticle(articlesApi.getByName(name));
  }, [name]);
  async function onUpvoteClick() {
    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/api/articles/${name}/upvote`
    );
    const updatedArticle = response.data;
    setUpvotes(updatedArticle.upvotes);
  }

  return (
    <>
      <h1>{article?.title}</h1>
      <button onClick={onUpvoteClick}>Upvote</button>
      <p>This article has {upvotes} upvotes!</p>
      {article?.content?.map((para) => (
        <p key={para}>{para}</p>
      ))}
      <CommentsList comments={comments} />
    </>
  );
}
