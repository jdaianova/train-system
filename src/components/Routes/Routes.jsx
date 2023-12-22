import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import TicketOffice from "../TicketOffice/TicketOffice";
import FinalPage from "../FinalPage/FinalPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticketoffice/*" element={<TicketOffice />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  );
};

export default AppRoutes;
