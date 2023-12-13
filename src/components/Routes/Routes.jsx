import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import TicketOffice from "../TicketOffice/TicketOffice";
import TicketsList from "../TicketOffice/TicketsList/TicketsList";
import Seats from "../TicketOffice/Seats/Seats";
import Passengers from "../TicketOffice/Passengers/Passengers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/train-system/" element={<Home />} />
      <Route path="/train-system/tickets/*" element={<TicketOffice />} />
    </Routes>
  );
};

export const TicketOfficeRoutes = (listOfTickets) => {
  return (
    <Routes>
      <Route path="/" element={<TicketsList listOfTickets={listOfTickets} />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/passengers" element={<Passengers />} />
    </Routes>
  );
};

export default AppRoutes;
