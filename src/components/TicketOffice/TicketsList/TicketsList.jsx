import "./TicketsList.css";

import { nanoid } from "nanoid";

import TicketCard from "../TicketCard/TicketCard";

const TicketsList = ({listOfTickets}) => {

  if (typeof listOfTickets.data.items !== "undefined") {
    if (listOfTickets.data.items.length >= 1)
      return (
        <div className="TicketsList">
          {listOfTickets.data.items.map((ticket) => {
            return <TicketCard key={nanoid()} ticket={ticket} />;
          })}
        </div>
      );
  } 
};

export default TicketsList;
