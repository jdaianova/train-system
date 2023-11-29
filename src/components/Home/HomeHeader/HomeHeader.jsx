import "./HomeHeader.css";

import { nanoid } from "nanoid";
//import {Link} from "react-router-dom";

import backgroundImg from "../../../data/img/header-background.png";

import Logo from "../../Logo/Logo";
import HomeBookingForm from "../HomeBookingForm/HomeBookingForm";

export default function HomeHeader() {
  return (
    <div className="HomeHeader">
      <img
        className="HomeHeader__background"
        src={backgroundImg}
        alt="background train"
      />

      <Logo />

      <div className="HomeHeader__menu">
        <nav className="HomeHeader__menu-container">

          {["О нас", "Как это работает", "Отзывы", "Контакты"].map((element) => {
            return (
              <div key={nanoid()} className="HomeHeader__menu-element">
                {element}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="HomeHeader__main">
        <div className="HomeHeader__main-slogan">
          <h3>Вся жизнь - </h3>
          <h2>путешествие!</h2>
        </div>

        <HomeBookingForm />
      </div>
    </div>
  );
}
