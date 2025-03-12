import { useRef } from "react";
import Card from "../components/ui/Card";
import { useUnsplash } from "../hooks/useUnsplash";

function GalleryPage() {
  const utm = "?utm_source=scrimba_degree&utm_medium=referral";
  const queryInput = useRef(null);
  const { photos } = useUnsplash("cats");
  const query = "cats";

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  return (
    <Card className={"text-center"}>
      <h2>🙀</h2>
      <h1>Andy&apos;s Website</h1>
      <div className="grid grid-cols-2 gap-1">
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
                    <a
                      className="text-[#fff]"
                      href={photo.user.links.html + utm}
                    >
                      {photo.user.name}
                    </a>
                    <span className="text-[#fff]"> on </span>
                    <a
                      className="text-[#fff]"
                      href={"https://unsplash.com" + utm}
                    >
                      Unsplash
                    </a>
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
