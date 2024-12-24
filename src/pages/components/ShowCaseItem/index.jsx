import "./index.css";
export default function ShowCaseItem({
  title,
  descriptions,
  imgSrc,
  references,
  previewLink,
}) {
  return (
    <div className="showcase-list__item">
      <div className="showcase-list__item__text">
        <h3 className="showcase-list__item__text__title">{title}</h3>
        <p className="showcase-list__item__text__description">{descriptions}</p>
        <a
          href={previewLink}
          target="_blank"
          className="showcase-list__item__text__preview"
        >
          Preview
        </a>
      </div>
      <div className="showcase-list__item__image">
        <img src={imgSrc} alt="showcase" />
      </div>
      <div>
        <a href={references} target="_blank">
          Challenges: {references}
        </a>
      </div>
    </div>
  );
}
