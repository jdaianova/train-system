import "./FinalHeader.css";

import backgroundImg from "../../../data/img/finalBackgroundHeader.png";

import Logo from "../../commonComponents/Logo/Logo";
import MenuHeader from "../../commonComponents/MenuHeader/MenuHeader";

export default function FinalHeader() {
  return (
    <header className="FinalHeader">
      <img
        className="FinalHeader__background"
        src={backgroundImg}
        alt="background train"
      />

      <Logo />
      <MenuHeader />
    </header>
  );
}
