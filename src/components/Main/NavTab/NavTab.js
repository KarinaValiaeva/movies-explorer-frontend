import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      {/* посмотреть предыдущие проекты, попробовать сделать списком */}
      <button className="navtab__link">О Проекте</button>
      <button className="navtab__link">Технологии</button>
      <button className="navtab__link">Студент</button>
    </nav>
  );
}

export default NavTab;
