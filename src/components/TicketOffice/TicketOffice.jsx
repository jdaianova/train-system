import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import TicketOfficeRoutes from "../Routes/TicketOfficeRoutes";

const TicketOffice = () => {

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />
      <TicketOfficeRoutes />
    </div>
  );
};
export default TicketOffice;
