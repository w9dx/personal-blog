import { useRef, useState } from "react";
import { useUnsplash } from "../hooks/useUnsplash";

function GalleryPage() {
  const utm = "?utm_source=scrimba_degree&utm_medium=referral";
  const queryInput = useRef(null);
  const [query, setQuery] = useState("cats");

  const { photos } = useUnsplash(query);

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  return (
    <div className="box">
      <h2 className="text-center text-5xl">🙀</h2>
      <h1 className="text-center">You should relax</h1>
      <div className="py-2">
        <input
          type="text"
          ref={queryInput}
          className="rounded-lg bg-secondary p-2"
        />{" "}
        <button onClick={searchPhotos}>Search</button>
      </div>
      <div className="gallery-grid">
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
    </div>
  );
}

export default GalleryPage;
