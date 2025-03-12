import { useEffect, useState } from "react";

const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";

export const useUnsplash = (queryInput) => {
  let [photos, setPhotos] = useState([]);

  const numberOfPhotos = 20;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = queryInput ? `${url}&query=${queryInput}` : url;
    fetch(photosUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setPhotos(data);
      });
  }, [queryInput, url]);

  return { photos };
};
