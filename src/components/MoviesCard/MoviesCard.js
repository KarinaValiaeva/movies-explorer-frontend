import "./MoviesCard.css";

const Card = (props) => {
  const film = props.dataFilm;

  const filmSavedButtonClassName = `card__btn-save ${
    props.isSaved ? "card__btn-save_active" : ""
  }`;
  const filmRemovedButtonClassName = "card__btn-remove";

  function handleRemove() {
    props.removeMovie(film);
  }

  function handleSave() {
    props.onSave(film);
  }

  const duration = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  };

  return (
    <figure className="card__item">
      <figcaption className="card__caption">
        <h2 className="card__title">{film.nameRU}</h2>
        <div className="card__btn">
          <button
            className={
              props.isAllMovies
                ? filmSavedButtonClassName
                : filmRemovedButtonClassName
            }
            type="button"
            onClick={props.isAllMovies ? handleSave : handleRemove}
          ></button>
        </div>
        <h2 className="card__duration">{duration(film.duration)}</h2>
      </figcaption>
      <a
        className="card__trailer-link"
        href={film.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" src={film.image} alt={film.nameRU} />
      </a>
    </figure>
  );
};

export default Card;
