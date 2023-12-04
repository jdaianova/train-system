import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import TicketOffice from "../TicketOffice/TicketOffice";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tickets" element={<TicketOffice />} />
    </Routes>
  );
};

export default AppRoutes;
