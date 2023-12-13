import "./TicketCard.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import cupIcon from "../../../../data/img/cup-icon.png";
import expressIcon from "../../../../data/img/express-icon.png";

import TrainRoute from "./TrainRoute/TrainRoute";
import TrainCard from "./TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";
import {
  setOrderArrival,
  setOrderDeparture,
} from "../../../../redux/orderSlice";

const TicketCard = ({ ticket }) => {
  //console.log(ticket);

  const dispatch = useDispatch();
  const handleChooseTicket = () => {
    dispatch(setOrderDeparture(ticket.departure));
    dispatch(setOrderArrival(ticket.arrival));
  };

  return (
    <div className="TicketCard">
      <TrainCard
        train={ticket.departure.train}
        cityFrom={ticket.departure.from.city.name}
        cityTo={ticket.departure.to.city.name}
      />

      <div className="TicketCard__routes">
        {ticket.departure && (
          <TrainRoute route={ticket.departure} showDuration={true} />
        )}
        {ticket.arrival && (
          <TrainRoute route={ticket.arrival} showDuration={true} />
        )}
      </div>

      <div className="TicketCard__seats">
        <SeatsCard info={ticket.arrival} />

        <div className="TicketCard__seats-comfort">
          <img src={cupIcon} alt="cup icon" />
          <img src={expressIcon} alt="express icon" />
          <img src={cupIcon} alt="cup icon" />
        </div>
        <Link to={"seats"}>
          <button onClick={handleChooseTicket}>Выбрать места</button>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
