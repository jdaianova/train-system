import "./TicketCard.css";

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TrainRoute from "./TrainRoute/TrainRoute";
import TrainCard from "./TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";
import {
  setOrderArrival,
  setOrderDeparture,
} from "../../../../redux/orderSlice";
import AirConditioningIcon from "../../commonTicketsComponents/svgComponents/AirConditioningIcon";
import WiFiIcon from "../../commonTicketsComponents/svgComponents/WiFiIcon";
import ExpressIcon from "../../commonTicketsComponents/svgComponents/ExpressIcon";

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChooseTicket = () => {
    dispatch(setOrderDeparture(ticket.departure));
    dispatch(setOrderArrival(ticket.arrival));
    navigate('/ticketoffice/seats');
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
          {ticket.departure.have_air_conditioning && (
            <AirConditioningIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
          {ticket.departure.have_wifi && (
            <WiFiIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
          {ticket.departure.is_express && (
            <ExpressIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
        </div>


          <button onClick={handleChooseTicket}>Выбрать места</button>
 
      </div>
    </div>
  );
};

export default TicketCard;
