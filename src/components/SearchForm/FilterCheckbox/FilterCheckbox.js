import "./FilterCheckbox.css"

function FilterCheckbox() {
    return (

<div className="switcher">

    <input className="switcher__input" type="checkbox" name="watched" id="switcher" />
    <label className="switcher__label" htmlFor="switcher">
        <span className="switcher__text">Короткометражки</span>
    </label>
</div>
)
}

export default FilterCheckbox;