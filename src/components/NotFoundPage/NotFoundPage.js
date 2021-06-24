import { useHistory } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const history = useHistory();

  return (
    <div className="notfound-page">
      <div className="notfound-page__container">
        <h2 className="notfound-page__title">404</h2>
        <p className="notfound-page__caption">Страница не найдена</p>
      </div>
      <button onClick={history.goBack} className="notfound-page-link">
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
