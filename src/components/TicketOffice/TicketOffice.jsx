import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import SideBar from "./Sidebar/SideBar";
import TicketsList from "./TicketsList/TicketsList";
import Footer from "../Footer/Footer";
//import { useParams } from "react-router-dom";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";

const TicketOffice = () => {
  //const data = useParams();
  //console.log(data);

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />
      <div className="TicketOffice__Content">
        <SideBar />
        <TicketsList />
      </div>

      <Footer />
    </div>
  );
};

export default TicketOffice;
