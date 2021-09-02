import Form from "../Form/Form";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login(props) {
  const formData = useFormWithValidation();
  const title = "Рады видеть!";
  const btnSubmit = "Войти";
  const signQuestion = "Ещё не зарегистрированы?";
  const signinLink = "Регистрация";

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(formData.values);
    formData.resetForm();
  }

  return (
    <Form
      title={title}
      btnSubmit={btnSubmit}
      signQuestion={signQuestion}
      signLink={signinLink}
      signLinkPath={"/signup"}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      isValid={formData.isValid}
    >
      <label className="form__field form__field_login">
        <p className="form__input-name">E-mail</p>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
          autoComplete="off"
          value={formData.values.email || ""}
          onChange={formData.handleChange}
        />
        <span className="form__error_visible" id="email-input-error">
          {formData.errors.email || ""}
        </span>
      </label>
      <label className="form__field form__field_login">
        <p className="form__input-name">Пароль</p>
        <input
          className="form__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          autoComplete="off"
          required
          minLength="8"
          value={formData.values.password || ""}
          onChange={formData.handleChange}
        />
        <span className="form__error_visible" id="password-input-error">
          {formData.errors.password || ""}
        </span>
      </label>
    </Form>
  );
}

export default Login;
