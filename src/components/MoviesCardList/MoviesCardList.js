import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const [moviesCount, setMoviesCount] = useState(0);
  const [moreMoviesCount, setMoreMoviesCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const moviesCountMobile = 5;
  const moviesCountTablet = 8;
  const moviesCountDesktop = 12;
  const moviesCountMore = 2;
  const moviesCountMoreDesktop = 3;
  const windowWidthDesktop = 1280;
  const windowWidthTablet = 768;
  const windowWidthMobile = 320;

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
