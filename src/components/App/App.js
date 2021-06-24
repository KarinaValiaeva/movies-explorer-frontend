import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClickMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <>
      <div className="page">
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={isLoggedIn} onClickMenu={handleClickMenu} />
          </Route>
          <Route path="/movies">
            <Movies loggedIn={isLoggedIn} onClickMenu={handleClickMenu} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies loggedIn={isLoggedIn} onClickMenu={handleClickMenu} />
          </Route>
          <Route exact path="/profile">
            <Profile loggedIn={isLoggedIn} onClickMenu={handleClickMenu} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Navigation isOpenMenu={isOpenMenu} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
