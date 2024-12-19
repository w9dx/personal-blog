export default function ShowCaseItem({
  title,
  descriptions,
  imgSrc,
  references,
}) {
  return (
    <div className="showcase-list__item">
      <div className="showcase-list__item__text">
        <h3 className="showcase-list__item__text__title">{title}</h3>
        <p className="showcase-list__item__text__description">{descriptions}</p>
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
