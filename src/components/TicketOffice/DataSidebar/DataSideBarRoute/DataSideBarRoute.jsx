import { useState } from "react";
import "./DataSideBarRoute.css";
import Arrow from "../../commonTicketsComponents/svgComponents/Arrow";

const DataSideBarRoute = ({ direction }) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="DataSideBarRoute">
      <div className="DataSideBarRoute__header">
        <div className="DataSideBarRoute__header-arrow">
          <Arrow
            direction={direction}
            width={13}
            color={"rgba(62, 60, 65, 1)"}
          />
        </div>

        <h6>{direction === "departure" ? "Туда" : "Обратно"}</h6>

        <div className="DataSideBarRoute__header-date">09.09.2018</div>

        <button
          className="DataSideBarRoute__header-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "-" : "+"}
        </button>
      </div>

      {showDetails && (
        <div className="DataSideBarRoute__details">
          <div className="DataSideBarRoute__details__train-info">
            <p>&#8470; Поезда</p>
            <span>{'116C'}</span>
          </div>
          <div className="DataSideBarRoute__details__train-info">
          <p>Название</p>
            <p>{'Aasdasd'}<br></br>{'1hgjghjghj'}</p>
          </div>
          <div className="DataSideBarRoute__details__route">
         
          </div>
        
        </div>
      )}
    </div>
  );
};

export default DataSideBarRoute;
