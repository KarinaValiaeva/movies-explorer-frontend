import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Profile.css";

import Header from "../Header/Header";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(userData);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <section className="profile page__profile">
        <div className="profile__container">
          <form className="profile__form" onSubmit={handleSubmit}>
            <h2 className="profile__title">Привет, {currentUser.name}</h2>
            <fieldset className="profile__fieldset">
              <label className="profile__form-field">
                <p className="profile__item-name">Имя</p>
                <input
                  className="profile__form-input"
                  name="name"
                  type="text"
                  required
                  minLength="2"
                  maxLength="40"
                  autoComplete="off"
                  value={userData.name}
                  onChange={handleChange}
                />
              </label>
              <label className="profile__form-field">
                <p className="profile__item-name">Почта</p>
                <input
                  className="profile__form-input"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  value={userData.email}
                  onChange={handleChange}
                />
              </label>
            </fieldset>
            <button className="profile__btn" type="submit">Редактировать</button>
          </form>
          <div className="profile__btn-container">
            <button className="profile__btn profile__btn_logout" onClick={props.onLogOut}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
