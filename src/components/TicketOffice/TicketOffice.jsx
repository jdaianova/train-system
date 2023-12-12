import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import SideBar from "./Sidebar/SideBar";
import Footer from "../commonComponents/Footer/Footer";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import Loading from "../commonComponents/Loading/Loading";

import { useGetTicketsRoutesQuery } from "../../redux/apSlice";
import { TicketOfficeRoutes } from "../Routes/Routes";
import { useSelector } from "react-redux";
import { buildUrlRoutes } from "../../utils/helpers";

const TicketOffice = () => {
  const filters = useSelector((state) => state.filters);
  const url = buildUrlRoutes(filters);
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
              {TicketOfficeRoutes(listOfTickets)}
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
};
export default TicketOffice;
