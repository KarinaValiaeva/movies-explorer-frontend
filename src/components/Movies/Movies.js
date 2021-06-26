import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList isSaved={false} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
