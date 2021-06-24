import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      
      <form className="search-form__form">
      <div className="search-form__icon" />
        <input
          className="search-form__input"
          id="link-photo-input"
          type="text"
          name="film"
          placeholder="Фильм"
          required
        />
        <button className="search-form__button-submit" type="submit">
          Найти
        </button>
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
