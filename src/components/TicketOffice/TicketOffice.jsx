import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import TicketOfficeRoutes from "../Routes/TicketOfficeRoutes";
import { useEffect } from "react";

const TicketOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />
      <TicketOfficeRoutes />
    </div>
  );
};

export default TicketOffice;
