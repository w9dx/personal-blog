import { useEffect, useRef, useState } from "react";
import Card from "../components/ui/Card";

function GalleryPage() {
  const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
  const utm = "?utm_source=scrimba_degree&utm_medium=referral";
  var API_KEY = "NpRvp4rxQt7jYkbu95fWvCMrZKxyQKlWcNZfzeopGfI";

  let [photos, setPhotos] = useState([]);
  let [query, setQuery] = useState("cat");
  let queryInput = useRef(null);
  const numberOfPhotos = 20;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;
    fetch(photosUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setPhotos(data);
      });
  }, [query, url]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  return (
    <Card className={"text-center"}>
      <h2>🙀</h2>
      <h1>Andy&apos;s Website</h1>
      <div className="relative mb-2 grid grid-cols-2 gap-1">
        {query
          ? photos.map((photo) => {
              return (
                <div key={photo.id} className="item">
                  <img
                    src={photo.urls.regular}
                    className="h-auto w-full border-4 border-solid"
                    alt={photo.alt_description}
                  />
                  <div className="caption">
                    <span className="credits">Photo by </span>
                    <a href={photo.user.links.html + utm}>{photo.user.name}</a>
                    <span> on </span>
                    <a href={"https://unsplash.com" + utm}>Unsplash</a>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </Card>
  );
}

export default GalleryPage;
