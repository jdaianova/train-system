import { useState } from "react";
import "./DataSideBarRoute.css";
import Arrow from "../../commonTicketsComponents/svgComponents/Arrow";
import {
  capitalizeLettersInCityName,
  extractNameAndNumber,
} from "../../../../utils/helpers";
import { format } from "date-fns";

const DataSideBarRoute = ({ direction, route }) => {
  const [showDetails, setShowDetails] = useState(true);

  if (!route) return null;
  const trainInfo = extractNameAndNumber(route.train.name);
  const cityFrom = capitalizeLettersInCityName(route.from.city.name);
  const cityTo = capitalizeLettersInCityName(route.to.city.name);
  const trainNumber = trainInfo.number;
  const trainDate = format(new Date(route.to.datetime * 1000), "dd.MM.yyyy");

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

        <div className="DataSideBarRoute__header-date">{trainDate}</div>

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
            <span>{trainNumber}</span>
          </div>
          <div className="DataSideBarRoute__details__train-info">
            <p>Название</p>
            <div className="DataSideBarRoute__details__train-info-cities">
              <p>{cityFrom}</p>
              <p>{cityTo}</p>
            </div>
          </div>
          <div className="DataSideBarRoute__details__route"></div>
        </div>
      )}
    </div>
  );
};

export default DataSideBarRoute;
