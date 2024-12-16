import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { articlesApi } from "../services/articlesApi";
import CommentsList from "./components/CommentsList";
import AddCommentForm from "./components/AddCommentForm";

export default function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState([]);
  const { upvotes: initialUpvotes, comments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  useEffect(() => {
    const loadArticle = async () => {
      const article = await articlesApi.getByName(name);
      setArticle(article);
    };
    loadArticle();
  }, [name]);
  async function onUpvoteClick() {
    const updatedArticle = await articlesApi.upvote(name);
    setUpvotes(updatedArticle.upvotes);
  }
  const onAddComment = async ({ postedBy, commentText }) => {
    const updatedComments = await articlesApi.addComment({
      postedBy,
      commentText,
    });
    setUpvotes(updatedComments);
  };
  return (
    <>
      <h1>{article?.title}</h1>
      <button onClick={onUpvoteClick}>Upvote</button>
      <p>This article has {upvotes} upvotes!</p>
      {article?.content?.map((para) => (
        <p key={para}>{para}</p>
      ))}
      <AddCommentForm onAddComment={onAddComment} />
      <CommentsList comments={comments} />
    </>
  );
}
