import { useEffect, useState } from "react";
import myPicture from "../assets/ME.jpg";

import ArticleList from "./components/ArticlesList";
import { articlesApi } from "../services/articlesApi";
export default function HomePage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    articlesApi.getAll().then((articles) => setArticles(articles));
  }, []);
  return (
    <>
      <div className="flex w-full gap-4">
        <div className="profile-card w-1/3 rounded-lg bg-secondary p-4 shadow-lg">
          <img className="" src={myPicture} />
          <h2 className="text-white text-lg">Andrew Pham</h2>
          <p>
            A software developer with a passion for creating beautiful and
            functional websites having <b>3 years</b> of Experiences.
          </p>
        </div>
        <div className="flex w-2/3 gap-4">
          <div className="flex h-full w-2/3 flex-col gap-4">
            <div className="h-[300px] w-full rounded-lg bg-secondary p-4 shadow-lg"></div>
            <div className="h-[400px] w-full rounded-lg bg-secondary p-4 shadow-lg"></div>
          </div>
          <div className="w-1/3">
            <aside className="h-full w-full rounded-lg bg-secondary p-4 shadow-lg">
              <h2 className="text-white mb-4 text-2xl font-bold">Articles</h2>
              <ArticleList articles={articles} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
