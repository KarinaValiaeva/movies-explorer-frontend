import Form from "../Form/Form";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register(props) {
  const formData = useFormWithValidation();
  const title = "Добро пожаловать!";
  const btnSubmit = "Зарегистрироваться";
  const signQuestion = "Уже зарегистрированы?";
  const signinLink = "Войти";

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(formData.values);
    formData.resetForm();
  }

  return (
    <Form
      title={title}
      btnSubmit={btnSubmit}
      signQuestion={signQuestion}
      signLink={signinLink}
      signLinkPath={"/signin"}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      isValid={formData.isValid}
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
          pattern="([A-Za-zА-Яа-яЁё]+[\-\s]?){2,}"
          value={formData.values.name || ""}
          onChange={formData.handleChange}
        />
        <span className="form__error_visible" id="name-input-error">
          {formData.errors.name || ""}
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
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
          value={formData.values.email || ""}
          onChange={formData.handleChange}
        />
        <span className="form__error_visible" id="email-input-error">
          {formData.errors.email || ""}
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

export default Register;
