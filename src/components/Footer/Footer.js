import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__caption">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li>
              <a
                className="footer__links-item"
                href="https://praktikum.yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__links-item"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="footer__links-item"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
