import "./TicketCard.css";

import arrowArrival from "../../../data/img/arrow-arrival.png";
import arrowDeparture from "../../../data/img/arrow-departure.png";
import cupIcon from "../../../data/img/cup-icon.png";
import expressIcon from "../../../data/img/express-icon.png";

import TrainRoute from "../TicketCard/TrainRoute/TrainRoute";
import TrainCard from "../TicketCard/TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";
import { Link } from "react-router-dom";

const TicketCard = ({ ticket }) => {
  return (
    <div className="TicketCard">
      <TrainCard
        train={ticket.arrival.train}
        cityFrom={ticket.arrival.from.city.name}
        cityTo={ticket.arrival.to.city.name}
      />

      <div className="TicketCard__routes">
        {ticket.arrival && (
          <TrainRoute route={ticket.arrival} arrowImg={arrowArrival} />
        )}

        {ticket.departure && (
          <TrainRoute route={ticket.departure} arrowImg={arrowDeparture} />
        )}
      </div>

      <div className="TicketCard__seats">
        <SeatsCard info={ticket.arrival} />

        <div className="TicketCard__seats-comfort">
          <img src={cupIcon} alt="cup icon" />
          <img src={expressIcon} alt="express icon" />
          <img src={cupIcon} alt="cup icon" />
        </div>
        <Link to={'seats'}>
          <button>Выбрать места</button>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
