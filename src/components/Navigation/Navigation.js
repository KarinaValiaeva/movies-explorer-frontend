import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const location = useLocation();

  return (
    <div
      className={`navigation ${props.isOpenMenu && "navigation_opened"}`}
      onClick={props.onClose}
    >
      <div className="navigation__container">
        <button
          className="navigation__button-close"
          type="button"
          onClick={props.onClose}
        />

        <ul className="navigation__list">
          <li>
            <Link
              className={`navigation__link ${
                location.pathname === "/" && "navigation__link_checked"
              }`}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              className={`navigation__link ${
                location.pathname === "/movies" && "navigation__link_checked"
              }`}
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              className={`navigation__link ${
                location.pathname === "/saved-movies" &&
                "navigation__link_checked"
              }`}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link className="navigation__account" to="/profile">
          Аккаунт
          <button className="navigation__account-icon" type="button" />
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
