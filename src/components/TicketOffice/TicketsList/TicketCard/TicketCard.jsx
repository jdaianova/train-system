import "./TicketCard.css";

import { Link } from "react-router-dom";

import cupIcon from "../../../../data/img/cup-icon.png";
import expressIcon from "../../../../data/img/express-icon.png";

import TrainRoute from "./TrainRoute/TrainRoute";
import TrainCard from "./TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";

import { capitalizeLettersInCityName } from "../../../../utils/helpers";

const TicketCard = ({ ticket }) => {


  return (
    <div className="TicketCard">
      <TrainCard
        train={ticket.arrival.train}
        cityFrom={capitalizeLettersInCityName(ticket.arrival.from.city.name) }
        cityTo={capitalizeLettersInCityName(ticket.arrival.to.city.name)}
      />

      <div className="TicketCard__routes">
        {ticket.departure && <TrainRoute route={ticket.departure} />}
        {ticket.arrival && <TrainRoute route={ticket.arrival} />}
      </div>

      <div className="TicketCard__seats">
        <SeatsCard info={ticket.arrival} />

        <div className="TicketCard__seats-comfort">
          <img src={cupIcon} alt="cup icon" />
          <img src={expressIcon} alt="express icon" />
          <img src={cupIcon} alt="cup icon" />
        </div>
        <Link to={"seats"}>
          <button>Выбрать места</button>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
