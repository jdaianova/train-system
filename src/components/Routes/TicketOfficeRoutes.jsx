import './Routes.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../TicketOffice/SideBar/SideBar';
import TicketsList from '../TicketOffice/TicketsList/TicketsList';
import Seats from '../TicketOffice/Seats/Seats';
import DataSidebar from '../TicketOffice/DataSidebar/DataSidebar';
import Passengers from '../TicketOffice/Passengers/Passengers';
import PayPage from '../TicketOffice/PayPage/PayPage';
import Confirmation from '../TicketOffice/Confirmation/Confirmation';


const TicketOfficeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<div className='container'><Sidebar /><TicketsList /></div>} />
        <Route path="seats" element={<div className='container'><Sidebar /><Seats /></div>} />
        <Route path="passengers" element={<div className='container'><DataSidebar /><Passengers /></div>} />
        <Route path="pay" element={<div className='container'><DataSidebar /><PayPage /></div>} />
        <Route path="confirmation" element={<div className='container'><DataSidebar /><Confirmation /></div>} />
      </Routes>
    </div>
  );
};

export default TicketOfficeRoutes;
