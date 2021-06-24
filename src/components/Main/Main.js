import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";

function Main(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} handleMenu={props.onClickMenu} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
