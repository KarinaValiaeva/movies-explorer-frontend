import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
        <div className="main__section-container main__section-container_techs">
      <h3 className="main__section-title">Технологии</h3>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в 
    дипломном проекте.
      </p>
      <ul className="techs__cards">
        <li className="techs__cards-item">HTML</li>
        <li className="techs__cards-item">CSS</li>
        <li className="techs__cards-item">JS</li>
        <li className="techs__cards-item">React</li>
        <li className="techs__cards-item">Git</li>
        <li className="techs__cards-item">Express.js</li>
        <li className="techs__cards-item">mongoDB</li>
      </ul>
      </div>
    </section>
  );
}

export default Techs;
