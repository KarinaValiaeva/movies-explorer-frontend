import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList isSaved={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
