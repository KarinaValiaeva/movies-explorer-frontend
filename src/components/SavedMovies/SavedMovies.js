import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <main className="saved-movies">
        <SearchForm
          searchFunction={props.searchFunction}
          filter={props.filter}
          isChecked={props.isChecked}
        />
        <MoviesCardList
          dataMovies={props.movies}
          isSavedMovie={props.isSavedMovie}
          removeMovie={props.removeMovie}
          isAllMovies={false}
        />
        {props.isVisible && props.movies.length === 0 && (
          <p className="saved-movies__nofound-msg">Ничего не найдено</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
