import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo main__promo">
      <div className="promo__container">
        <h2 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h2>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
