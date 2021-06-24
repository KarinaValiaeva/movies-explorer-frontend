import "./about-project.css";

function AboutProject() {
  return (
    <section className="about-project main__about-project" id="about-project">
        <div className="main__section-container main__section-container_about-project">
      <h2 className="main__section-title">О проекте</h2>
      <ul className="about-project__cards">
      <li className="about-project__cards-item">
        <h3 className="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </li>
      <li className="about-project__cards-item">
        <h3 className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </li>
      </ul>
   
        <ul className="about-project__time-table">
          <li className="about-project__time-table-item about-project__time-table-item_blue">1 неделя</li>
          <li className="about-project__time-table-item about-project__time-table-item_grey">4 недели</li>
          <li className="about-project__time-table-item about-project__time-table-item_white">Back-end</li>
          <li className="about-project__time-table-item about-project__time-table-item_white">Front-end</li>
        </ul>
        </div>
    </section>
  );
}

export default AboutProject;
