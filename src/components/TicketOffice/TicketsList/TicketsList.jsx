import "./TicketsList.css";
import { useGetTicketsRoutesQuery } from "../../../redux/apiTicketsRoutesSlice";
import TicketCard from "../TicketCard/TicketCard";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { buildUrlRoutes } from "../../../utils/helpers";

const TicketsList = () => {
  const filters = useSelector((state) => state.filters);


  const url = buildUrlRoutes(filters);

  //const url =
   // "/routes?from_city_id=641037eb5c49ea004632ee6e&to_city_id=641037eb5c49ea004632ee6f&date_start=2023-12-12&date_end=2023-12-18";
  const listOfTickets = useGetTicketsRoutesQuery({ url });

  if (listOfTickets.status === "pending") {
    return (
      <div className="TicketsList__pending">
        <div className="TicketsList__pending-info">
          <h4>ИДЕТ ПОИСК</h4>
        </div>
      </div>
    );
  }

     if (listOfTickets.status === "fulfilled") {  console.log(listOfTickets.currentData.items);}

  if (listOfTickets.status === "fulfilled") {
    if (typeof listOfTickets.currentData.items !== "undefined")
      return (
        <div className="TicketsList">
          {listOfTickets.currentData.items.map((ticket) => {
            return <TicketCard key={nanoid()} ticket={ticket} />;
          })}
        </div>
      );
  }
};

export default TicketsList;
