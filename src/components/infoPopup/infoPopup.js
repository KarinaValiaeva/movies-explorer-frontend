import "./infoPopup.css";

function InfoPopup(props) {
  return (
    <div className={`infopopup ${props.isOpen && "infopopup_opened"}`}>
      <div className="infopopup__container">
        <button
          className="infopopup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <p className="infopopup__message">{props.message}</p>
      </div>
    </div>
  );
}

export default InfoPopup;
