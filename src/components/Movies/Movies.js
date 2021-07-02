import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <main className="movies">
        <SearchForm
          searchFunction={props.searchFunction}
          filter={props.filter}
          isChecked={props.isChecked}
        />
        <MoviesCardList
          dataMovies={props.movies}
          saveMovie={props.saveMovie}
          isSavedMovie={props.isSavedMovie}
          isAllMovies={true}
        />
        {props.isVisible && props.movies.length === 0 && (
          <p className="movies__nofound-msg">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
