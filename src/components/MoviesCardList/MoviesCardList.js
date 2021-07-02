import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const [moviesCount, setMoviesCount] = useState(0);
  const [moreMoviesCount, setMoreMoviesCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const getMoreMovies = () => {
    setMoviesCount(moviesCount + moreMoviesCount);
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (props.isAllMovies) {
      if (width >= 1280) {
        setMoviesCount(12);
        setMoreMoviesCount(3);
      }
      if (width < 1280 && width >= 768) {
        setMoviesCount(8);
        setMoreMoviesCount(2);
      } else if (width >= 320 && width < 768) {
        setMoviesCount(5);
        setMoreMoviesCount(2);
      }
    } else {
      setMoviesCount(props.dataMovies.length + 1);
    }
  }, [props.dataMovies.length, width, props.isAllMovies]);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {props.dataMovies.slice(0, moviesCount).map((item) => (
          <MoviesCard
            key={item.movieId || item._id}
            dataFilm={item}
            onSave={props.saveMovie}
            isSaved={props.isSavedMovie(item)}
            removeMovie={props.removeMovie}
            isAllMovies={props.isAllMovies}
          />
        ))}
      </div>
      {props.isAllMovies && props.dataMovies.length > moviesCount && (
        <button className="movies-card-list__more-btn" onClick={getMoreMovies}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
