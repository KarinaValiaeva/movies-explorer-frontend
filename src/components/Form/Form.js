import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

import "./Form.css";

function Form(props) {
  return (
    <section className="sign">
      <div className="sign__header">
        <NavLink exact to="/">
          <img className="sign__logo" src={logo} alt="Лого" />
        </NavLink>
        <h2 className="sign__title">{props.title}</h2>
      </div>
      <form className="form" onSubmit={props.onSubmit}>
        {props.children}

        <button
          className={
            props.isValid
              ? "form__button-submit"
              : "form__button-submit form__button-submit_disabled"
          }
          type="submit"
        >
          {props.btnSubmit}
        </button>
      </form>

      <p className="sign__signin-question">
        {props.signQuestion} &nbsp;
        <NavLink to={props.signLinkPath} className="sign__signin-link">
          {props.signLink}
        </NavLink>
      </p>
    </section>
  );
}

export default Form;
