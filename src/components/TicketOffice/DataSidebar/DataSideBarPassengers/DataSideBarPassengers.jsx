import { useState } from "react";
import "./DataSideBarPassengers.css";
import PassemgerIcon from "../../commonTicketsComponents/svgComponents/PassemgerIcon";
import RubIcon from "../../commonTicketsComponents/svgComponents/RubIcon";
import { getAdultEnding, getChildEnding } from "../../../../utils/helpers";
import { useSelector } from "react-redux";

const DataSideBarPassengers = ({
  selectedPriceAdult,
  selectedlPriceChild,
  selectedNumAdult,
  selectedNumChild,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const tickets = useSelector((state) => state.tickets);
  const selectedWithoutSeats =
    Number(tickets.departure.withoutSeats) +
    Number(tickets.arrival.withoutSeats);

  return (
    <div className="DataSideBarPassengers">
      <div className="DataSideBarPassengers__header">
        <div className="DataSideBarPassengers__header-icon">
          <PassemgerIcon />
        </div>

        <h6>Билеты</h6>

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
            <span>
              {" "}
              {selectedNumAdult} {getAdultEnding(selectedNumAdult)}
            </span>
            <p>{selectedPriceAdult}</p>
            <RubIcon height={17} color={"rgba(146, 143, 148, 1)"} />
          </div>

          <div className="DataSideBarPassengers__details__info">
            <span>
              {selectedNumChild} {getChildEnding(selectedNumChild)}
            </span>
            <p>{selectedlPriceChild}</p>
            <RubIcon height={17} color={"rgba(146, 143, 148, 1)"} />
          </div>

          <div className="DataSideBarPassengers__details__info">
            <span>
              {selectedWithoutSeats} {getChildEnding(selectedWithoutSeats)} без
              места
            </span>
            <p>{0}</p>
            <RubIcon height={17} color={"rgba(146, 143, 148, 1)"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataSideBarPassengers;
