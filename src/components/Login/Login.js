import Form from "../Form/Form";

function Login() {
  const title = "Рады видеть!";
  const btnSubmit = "Войти";
  const signQuestion = "Ещё не зарегистрированы?";
  const signinLink = "Регистрация";

  return (
    <Form
      title={title}
      btnSubmit={btnSubmit}
      signQuestion={signQuestion}
      signLink={signinLink}
      signLinkPath={"/signup"}
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
          autoComplete="off"
        />
        <span className="form__error" id="name-input-error">
          Что-то пошло не так...
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
        />
        <span className="form__error" id="name-input-error">
          Что-то пошло не так...
        </span>
      </label>
    </Form>
  );
}

export default Login;
