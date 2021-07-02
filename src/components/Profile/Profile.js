import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import "./Profile.css";

import Header from "../Header/Header";

function Profile(props) {
  const formData = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  
  useEffect(() => {
    formData.setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
    formData.isValid = false;
  }, [currentUser, formData.setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(formData.values);
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
                  value={formData.values.name || ""}
                  onChange={formData.handleChange}
                />
                <span className="profile__error" id="name-input-error">
                  {formData.errors.name || ""}
                </span>
              </label>
              <label className="profile__form-field">
                <p className="profile__item-name">Почта</p>
                <input
                  className="profile__form-input"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  value={formData.values.email || ""}
                  onChange={formData.handleChange}
                />
                <span className="profile__error" id="email-input-error">
                  {formData.errors.email || ""}
                </span>
              </label>
            </fieldset>
            <button
              className={
                formData.isValid
                  ? "profile__btn"
                  : "profile__btn profile__btn_disabled"
              }
              type="submit"
            >
              Редактировать
            </button>
          </form>
          <div className="profile__btn-container">
            <button
              className="profile__btn-logout"
              onClick={props.onLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
