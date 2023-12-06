import "./TicketsList.css";

import { nanoid } from "nanoid";

import TicketCard from "../TicketCard/TicketCard";
import ErrorPopUp from "../../commonComponents/ErrorPopUp/ErrorPopUp";


const TicketsList = ({listOfTickets}) => {

  if (typeof listOfTickets.currentData.items !== "undefined") {
    if (listOfTickets.currentData.items.length >= 1)
      return (
        <div className="TicketsList">
          {listOfTickets.currentData.items.map((ticket) => {
            return <TicketCard key={nanoid()} ticket={ticket} />;
          })}
        </div>
      );
  } else {
    <ErrorPopUp />
  }
};

export default TicketsList;
