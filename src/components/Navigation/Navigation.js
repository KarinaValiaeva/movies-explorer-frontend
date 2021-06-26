import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation(props) {
  return (
    <div
      className={`navigation ${props.isOpenMenu && "navigation_opened"}`}
      onClick={props.onClose}
    >
      <div
        className="navigation__container"
        // onClick={(e) => e.stopPropagation()}
      >
        <button
          className="navigation__button-close"
          type="button"
          onClick={props.onClose}
        />

        <ul className="navigation__list">
          <li>
            <Link className="navigation__link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link
              className="navigation__link navigation__link_checked"
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link className="navigation__link" to="/saved-movies">
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
