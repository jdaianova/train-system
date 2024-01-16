import "./TicketCard.css";

import { useLocation, useNavigate } from "react-router-dom";
import TrainRoute from "./TrainRoute/TrainRoute";
import TrainCard from "./TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";
import AirConditioningIcon from "../../commonTicketsComponents/svgComponents/AirConditioningIcon";
import WiFiIcon from "../../commonTicketsComponents/svgComponents/WiFiIcon";
import ExpressIcon from "../../commonTicketsComponents/svgComponents/ExpressIcon";
import { useDispatch } from "react-redux";
import { setCurrentRoutes } from "../../../../redux/currentRoutesSlice";
import { clearPassengersForms } from "../../../../redux/passengersFormsData";
import { clearAllSeatsSelection } from "../../../../redux/seatsSelectedSlice";
import { clearAllTicketData } from "../../../../redux/ticketsSlice";
import { clearSeatsFilters } from "../../../../redux/seatsFiltersSlice";

const TicketCard = ({ ticket }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChooseTicket = () => {
    dispatch(setCurrentRoutes(ticket));
    dispatch(clearPassengersForms());
    dispatch(clearAllSeatsSelection());
    dispatch(clearAllTicketData());
    dispatch(clearSeatsFilters());
    navigate("/ticketoffice/seats");
  };

  const handleChooseTrain = () => {
    navigate("/ticketoffice");
  };

  return (
    <div className="TicketCard">
      <TrainCard
        train={ticket.departure.train}
        cityFrom={ticket.departure.from.city.name}
        cityTo={ticket.departure.to.city.name}
      />

      <div className="TicketCard__routes">
        <div className="TicketCard__route">
          {ticket.departure && (
            <TrainRoute route={ticket.departure} showDuration={true} />
          )}
        </div>
        <div className="TicketCard__route">
          {ticket.arrival && (
            <TrainRoute route={ticket.arrival} showDuration={true} />
          )}
        </div>
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

        {location.pathname === "/ticketoffice" && (
          <button onClick={handleChooseTicket}>Выбрать места</button>
        )}

        {location.pathname === "/ticketoffice/confirmation" && (
          <button onClick={handleChooseTrain}>Изменить</button>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
