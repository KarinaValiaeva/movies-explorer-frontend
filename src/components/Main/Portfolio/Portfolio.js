import "./Portfolio.css";
import photo from "../../../images/profile__photo.jpg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
   <div className="main__section-container main__section-container_portfolio">
      <h3 className="main__section-title">Студент</h3>
      <div className="portfolio__card">
        <img className="portfolio__photo" src={photo} alt="Фотография"></img>
        <article className="portfolio__about-me">
          <h2 className="portfolio__name">Карина</h2>
          <h3 className="portfolio__about">Фронтенд-разработчик, 32 года</h3>
          <p className="portfolio__description">
            Я родилась и живу в Санкт-Петербурге. Имею высшее юридическое
            образование и почти 10 лет опыта работы на государственной службе.
            Замужем и у меня двое детей. Люблю спорт и отдых на природе.
          </p>
          <p className="portfolio__description">
            Html, css и javascript я стала интересоваться ещё в школе, это было
            моё хобби очень долгое время. В 2020 году начала учиться на курсе
            “Веб-разработчик” в Яндекс.Практикум, чтобы начать заниматься тем,
            что нравится.
          </p>

          <ul className="portfolio__links">
            <li> <a className="portfolio__links-item" href="https://www.facebook.com/karina.kolpakova.7" target="_blank" rel="noreferrer">Facebook</a></li>
            <li> <a className="portfolio__links-item" href="https://github.com/KarinaValiaeva" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </article>
      </div>
      <div className="portfolio__projects">
        <h2 className="portfolio__projects-title">Портфолио</h2>
        <ul className="portfolio__projects-links">
          <li className="portfolio__projects-link-item">
            <a
              className="portfolio__projects-link"
              href="https://github.com/KarinaValiaeva/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__projects-link-name">Статичный сайт</p>
              <p className="portfolio__projects-btn">&#8599;</p>
            </a>
          </li>
          <li className="portfolio__projects-link-item">
            <a
              className="portfolio__projects-link"
              href="https://karinavaliaeva.github.io/russian-travel/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__projects-link-name">Адаптивный сайт</p>
              <p className="portfolio__projects-btn">&#8599;</p>
            </a>
          </li>
          <li className="portfolio__projects-link-item">
            <a
              className="portfolio__projects-link"
              href="https://mesto.nomoredomains.rocks"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__projects-link-name">
                Одностраничное приложение
              </p>
              <p className="portfolio__projects-btn">&#8599;</p>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
