import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function SearchForm(props) {
  const formData = useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();
    props.searchFunction(formData.values.film);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__icon" />
        <input
          className="search-form__input"
          id="link-photo-input"
          type="text"
          name="film"
          placeholder="Фильм"
          required
          value={formData.values.film || ""}
          onChange={formData.handleChange}
        />
        <span className="search-form__error" id="film-input-error">
          {formData.errors.film ? "Нужно ввести ключевое слово" : ""}
        </span>
        <button className="search-form__button-submit" type="submit">
          Найти
        </button>
      </form>

      <FilterCheckbox isChecked={props.isChecked} onChange={props.filter} />
    </section>
  );
}

export default SearchForm;
