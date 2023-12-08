import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import TicketOffice from "../TicketOffice/TicketOffice";
import Seats from "../TicketOffice/Seats/Seats";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tickets/*" element={<TicketOfficeRoutes />} />
    </Routes>
  );
};

const TicketOfficeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TicketOffice />} />
      <Route path="/seats" element={<Seats />} />
    </Routes>
  );
  }

export default AppRoutes;
