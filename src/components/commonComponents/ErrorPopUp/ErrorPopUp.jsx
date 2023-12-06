import "./ErrorPopUp.css";

import { useState } from "react";

import infoIcon from "../../../data/img/info-icon.png";

const ErrorPopUp = ({ textErrorTop, textErrorBottom }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };
  return isVisible ? (
    <div className="ErrorPopUp">
      <div className="ErrorPopUp__icon">
        <img src={infoIcon} alt="info icon" />
      </div>
      <div className="ErrorPopUp__text">
        <h5>{textErrorTop}</h5>
        <p>{textErrorBottom}</p>
      </div>
      <div className="ErrorPopUp__btn">
        <button onClick={handleButtonClick}>Понятно</button>
      </div>
    </div>
  ) : null;
};

export default ErrorPopUp;
