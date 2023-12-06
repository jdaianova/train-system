import "./HomeHeader.css";

import backgroundImg from "../../../data/img/header-background.png";

import Logo from "../../commonComponents/Logo/Logo";
import HomeBookingForm from "../HomeBookingForm/HomeBookingForm";
import MenuHeader from "../../commonComponents/MenuHeader/MenuHeader";

export default function HomeHeader() {
  return (
    <header id="home_header" className="HomeHeader">
      <img
        className="HomeHeader__background"
        src={backgroundImg}
        alt="background train"
      />

      <Logo />
      <MenuHeader />

      <div className="HomeHeader__main">
        <div className="HomeHeader__main-slogan">
          <h3>Вся жизнь - </h3>
          <h2>путешествие!</h2>
        </div>

        <HomeBookingForm />
      </div>
    </header>
  );
}
