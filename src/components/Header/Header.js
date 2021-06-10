import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Лого"></img>

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
      </div>
    </header>
  );
}

export default Header;
