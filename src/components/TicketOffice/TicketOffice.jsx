import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import SideBar from "./Sidebar/SideBar";
import TicketsList from "./TicketsList/TicketsList";
import Footer from "../commonComponents/Footer/Footer";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import Loading from "../commonComponents/Loading/Loading";

import { useGetTicketsRoutesQuery } from "../../redux/apSlice";
//import { useSelector } from "react-redux";
//import { buildUrlRoutes } from "../../utils/helpers";

const url =
  "/routes?from_city_id=641037eb5c49ea004632ee6e&to_city_id=641037eb5c49ea004632ee6f&date_start=2023-12-12&date_end=2023-12-18";

const TicketOffice = () => {
  //const filters = useSelector((state) => state.filters);
  //const url = buildUrlRoutes(filters);
  const listOfTickets = useGetTicketsRoutesQuery({ url });

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />

      <div className="TicketOffice__main">
        {listOfTickets.status === "pending" && <Loading />}

        {listOfTickets.status === "fulfilled" &&
          typeof listOfTickets !== "undefined" && (
            <div className="TicketOffice__Content">
              <SideBar />
              <TicketsList listOfTickets={listOfTickets} />
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
};
export default TicketOffice;
