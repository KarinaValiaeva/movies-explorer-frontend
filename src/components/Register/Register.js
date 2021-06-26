import Form from "../Form/Form";

function Register() {
  const title = "Добро пожаловать!";
  const btnSubmit = "Зарегистрироваться";
  const signQuestion = "Уже зарегистрированы?";
  const signinLink = "Войти";

  return (
    <Form
      title={title}
      btnSubmit={btnSubmit}
      signQuestion={signQuestion}
      signLink={signinLink}
      signLinkPath={"/signin"}
    >
      <label className="form__field">
        <p className="form__input-name">Имя</p>
        <input
          className="form__input"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          autoComplete="off"
          required
        />
        <span className="form__error" id="name-input-error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="form__field">
        <p className="form__input-name">E-mail</p>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <span className="form__error" id="name-input-error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="form__field">
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
        <span className="form__error form__error_visible" id="name-input-error">
          Что-то пошло не так...
        </span>
      </label>
    </Form>
  );
}

export default Register;
