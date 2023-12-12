import PassengerForm from "../PassengerForm/PassengerForm";
import "./PassengerCard.css";

import { useState } from "react";

const PassengerCard = ({ index = 1 }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggleCollapsed = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="PassengerCard">
      <div className="PassengerCard__header">
        <div
          className="PassengerCard__header-icon"
          onClick={handleToggleCollapsed}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: isCollapsed ? "&mdash;" : "&plus;",
            }}
          />
        </div>

        <h5 className="PassengerCard__header-title">Пассажир {index}</h5>
      </div>
      {isCollapsed && (
        <div className="PassengerCard__main">
          <PassengerForm />
        </div>
      )}
    </div>
  );
};

export default PassengerCard;
