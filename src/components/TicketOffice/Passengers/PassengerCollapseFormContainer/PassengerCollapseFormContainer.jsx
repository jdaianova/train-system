import PassengerForm from "../PassengerForm/PassengerForm";
import "./PassengerCollapseFormContainer.css";

import { useState } from "react";

const PassengerCollapseFormContainer = ({ indexPassenger }) => {
  const [isCollapsed, setCollapsed] = useState(true);

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

        <h5 className="PassengerCard__header-title">Пассажир {indexPassenger}</h5>
      </div>
      {isCollapsed && (
        <div className="PassengerCard__main">
          <PassengerForm />
        </div>
      )}
    </div>
  );
};

export default PassengerCollapseFormContainer;
