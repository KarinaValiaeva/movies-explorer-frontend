import { useState } from "react";
import "./MoviesCard.css";

const Card = (props) => {
    // const { card } = props;
    // const currentUser = useContext(CurrentUserContext);
    
    // const isOwn = card.owner._id === currentUser._id;
    // const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // const cardDeleteButtonClassName = `card__btn-remove ${
    //   isOwn ? "card__btn-remove_active" : ""
    // }`;
    // const cardLikeButtonClassName = `card__like-button ${
    //   isLiked ? "card__like-button_active" : ""
    // }`;
  
    // function handleClick() {
    //   props.onCardClick(props.card);
    // }
    const [isSaved, setIsSaved] = useState(false);
    const filmSavedButtonClassName = `card__btn-save ${
        isSaved ? "card__btn-save_active" : ""
      }`;
      const filmRemovedButtonClassName = "card__btn-remove";

    function handleSave() {
        if(!isSaved) {
        setIsSaved(true)}
        else {
            setIsSaved(false)
        }
    }
    return (
      <figure className="card__item">
          <figcaption className="card__caption">
          <h2 className="card__title">{props.name}</h2>
          <div className="card__btn">
            
            <button
              className={(!props.isSaved) ? filmSavedButtonClassName : filmRemovedButtonClassName}
              type="button"
              onClick={handleSave}
            ></button> 
            </div>
            <h2 className="card__duration">{props.duration}</h2>
          
        </figcaption>
       
        <img
          className="card__image"
          src={props.image}
          alt={props.name}
        />
        
      </figure>
    );
  };
  
  export default Card;