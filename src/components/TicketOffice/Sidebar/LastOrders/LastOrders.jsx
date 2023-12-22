import { useGetTicketsRoutesQuery } from "../../../../redux/apSlice";
import LastOrderCard from "./LastOrderCard";
import "./LastOrders.css";

const LastOrders = () => {
  const url = "/routes/last";
  const { data: listOfLastTickets } = useGetTicketsRoutesQuery({ url });

  return (
    <div className="LastOrders">
      <h5>последние билеты</h5>
      <div className="LastOrders__list">
        {listOfLastTickets &&
          listOfLastTickets.map((ticket, index) => (
            <LastOrderCard key={new Date().getTime() + index} ticket={ticket} />
          ))}
      </div>
    </div>
  );
};

export default LastOrders;
