import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

import Header from "../Header/Header";

function Profile(props) {
  const [userData, setUserData] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <section className="profile page__profile">
        <div className="profile__container">
          <form className="profile__form">
            <h2 className="profile__title">Привет, {userData.name}</h2>
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
          </form>
          <div className="profile__btn-container">
            <button className="profile__btn">Редактировать</button>
            <Link to="/signin" className="profile__btn profile__btn_logout">
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
