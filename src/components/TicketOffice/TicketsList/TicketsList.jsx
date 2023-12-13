import "./TicketsList.css";

import { nanoid } from "nanoid";

import TicketCard from "./TicketCard/TicketCard";

const TicketsList = ({listOfTickets}) => {

      return (
        <div className="TicketsList">
          {listOfTickets.items.map((ticket) => {
            return <TicketCard key={nanoid()} ticket={ticket} />;
          })}
        </div>
      );
  } 

export default TicketsList;
