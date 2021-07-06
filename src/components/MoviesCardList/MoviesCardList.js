import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  moviesCountMobile,
  moviesCountTablet,
  moviesCountDesktop,
  moviesCountMore,
  moviesCountMoreDesktop,
  windowWidthDesktop,
  windowWidthTablet,
  windowWidthMobile,
} from "../../utils/config";

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
      if (width >= windowWidthDesktop) {
        setMoviesCount(moviesCountDesktop);
        setMoreMoviesCount(moviesCountMoreDesktop);
      }
      if (width < windowWidthDesktop && width >= windowWidthTablet) {
        setMoviesCount(moviesCountTablet);
        setMoreMoviesCount(moviesCountMore);
      } else if (width >= windowWidthMobile && width < windowWidthTablet) {
        setMoviesCount(moviesCountMobile);
        setMoreMoviesCount(moviesCountMore);
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
