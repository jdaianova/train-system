import { useState } from "react";
import "./DataSideBarPassengers.css";
import PassemgerIcon from "../../commonTicketsComponents/svgComponents/PassemgerIcon";
import RubIcon from "../../commonTicketsComponents/svgComponents/RubIcon";

const DataSideBarPassengers = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="DataSideBarPassengers">
      <div className="DataSideBarPassengers__header">
        <div className="DataSideBarPassengers__header-icon">
          <PassemgerIcon />
        </div>

        <h6>Пассажиры</h6>

        <button
          className="DataSideBarPassengers__header-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "-" : "+"}
        </button>
      </div>

      {showDetails && (
        <div className="DataSideBarPassengers__details">
          <div className="DataSideBarPassengers__details__info">
            <span>Взрослых</span>
            <p>{7760}</p>
            <RubIcon height={17} color={"rgba(146, 143, 148, 1)"} />
          </div>

          <div className="DataSideBarPassengers__details__info">
            <span>Ребенок</span>
            <p>{555}</p>
            <RubIcon height={17} color={"rgba(146, 143, 148, 1)"} />
          </div>

        </div>
      )}
    </div>
  );
};

export default DataSideBarPassengers;
