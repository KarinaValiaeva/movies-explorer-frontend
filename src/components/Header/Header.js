import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

function Header(props) {
  return (
    <header className="header page__header">
      <div className="header__container">
        <NavLink exact to="/">
          <img className="header__logo" src={logo} alt="Лого" />
        </NavLink>
        {props.loggedIn ? (
          <>
            <div className="header__nav-icon" onClick={props.handleMenu}>
              <span className="header__nav-icon-item"></span>
            </div>

            <div className="header__navbar">
            <ul className="navigation__list">
            <li>
            <NavLink
              className="navigation__link"
              to="/movies"
            >
              Фильмы
            </NavLink></li>
            <li>
            <NavLink className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
            </li>
              </ul>
        <NavLink className="navigation__account" to="/profile">
          Аккаунт
          <button className="navigation__account-icon" type="button" />
        </NavLink>
            </div> 
        </>
        ) : (
          <div className="header__sign">
            <NavLink exact to="/signup" className="header__link">
              Регистрация
            </NavLink>
            <NavLink
              exact
              to="/signin"
              className="header__link header__link_login"
            >
              Войти
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
