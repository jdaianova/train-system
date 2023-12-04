import "./TicketCard.css";

import arrowArrival from "../../../data/img/arrow-arrival.png";
import arrowDeparture from "../../../data/img/arrow-departure.png";
import cupIcon from "../../../data/img/cup-icon.png";
import expressIcon from "../../../data/img/express-icon.png";
//import cupIcon from "../../../data/img/cup-icon.png";

import TrainRoute from "../TicketCard/TrainRoute/TrainRoute";
import TrainCard from "../TicketCard/TrainCard/TrainCard";
import SeatsCard from "./SeatsCard/SeatsCard";

const TicketCard = ({ ticket }) => {
  //console.log(ticket);
  // console.log("--------------departure---------------");
  // console.log(new Date(ticket.departure.from.datetime*1000));
  // console.log(new Date(ticket.departure.to.datetime*1000));
  // console.log("--------------arrival---------------");
  // console.log(new Date(ticket.arrival.from.datetime*1000));
  // console.log(new Date(ticket.arrival.to.datetime*1000));
  //   const durationHours = Math.trunc(ticket.departure.duration / 1000 / 60);
  //   const duration = ticket.departure.duration / 1000 / 60;
  //   const durationHours = Math.trunc(ticket.departure.duration / 1000 / 60);
  //   const durationHours = 55;
  //   const durationHours = 55;
  //   const durationMinuts = 22;

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

        <button>Выбрать места</button>
      </div>
    </div>
  );
};

export default TicketCard;
