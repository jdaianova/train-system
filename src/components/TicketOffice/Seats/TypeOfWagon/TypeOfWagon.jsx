import "./TypeOfWagon.css";

import FourthClassIcon from "../../commonTicketsComponents/svgComponents/FourthClassIcon";
import ThirdClassIcon from "../../commonTicketsComponents/svgComponents/ThirdClassIcon";
import SecondClassIcon from "../../commonTicketsComponents/svgComponents/SecondClassIcon";
import FirstClassIcon from "../../commonTicketsComponents/svgComponents/FirstClassIcon";

const TypeOfWagon = () => {
  return (
    <div className="TypeOfWagon">
      <div className="TypeOfWagon__choosing-icon">
        <FourthClassIcon />
        <p>Сидячий</p>
      </div>
      <div className="TypeOfWagon__choosing-icon">
        <ThirdClassIcon />
        <p>Плацкарт</p>
      </div>
      <div className="TypeOfWagon__choosing-icon">
        <SecondClassIcon />
        <p>Купе</p>
      </div>
      <div className="TypeOfWagon__choosing-icon">
        <FirstClassIcon />
        <p>Люкс</p>
      </div>
    </div>
  );
};

export default TypeOfWagon;
