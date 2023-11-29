import "./TicketsList.css";
import { useGetTicketsRoutesQuery } from "../../../redux/apiTicketsRoutesSlice";
import TicketCard from "../TicketCard/TicketCard";
import { nanoid } from "nanoid";

const TicketsList = () => {
  //список билетов для городов москва-питер туда 2023-12-12 обратно 2023-12-18
  const url = {
    fromCityId: "641037eb5c49ea004632ee6e",
    toCityId: "641037eb5c49ea004632ee6f",
    dateStart: "2023-12-12",
    dateEnd: "2023-12-18",
  };

  const data = useGetTicketsRoutesQuery({ url });
  if (data.status === "fulfilled")
    return (
      <div className="TicketsList">
        {data.currentData.items.map((item) => (
          <TicketCard key={nanoid()} ticket={item} />
        ))}
{/* 
        <TicketCard key={nanoid()} ticket={data.currentData.items[0]} /> */}

      </div>
    );
};

export default TicketsList;
