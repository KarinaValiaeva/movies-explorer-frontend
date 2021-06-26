import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Image from "../../images/film-img.jpg";

function MoviesCardList(props) {


  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
      <MoviesCard name="33 слова о дизайне" duration="1ч 47м" image={Image} isSaved={props.isSaved} />
      <MoviesCard name="33 слова о дизайне" duration="1ч 47м" image={Image} isSaved={props.isSaved} />
      <MoviesCard name="33 слова о дизайне" duration="1ч 47м" image={Image} isSaved={props.isSaved} />
      <MoviesCard name="33 слова о дизайне" duration="1ч 47м" image={Image} isSaved={props.isSaved} />
      <MoviesCard name="33 слова о дизайне" duration="1ч 47м" image={Image} isSaved={props.isSaved} />
      </div>

      <button className="movies-card-list__more-btn">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
