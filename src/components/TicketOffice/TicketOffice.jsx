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
  const { data: listOfTickets, isLoading, isError } = useGetTicketsRoutesQuery({ url });
  console.log(url)
  console.log(listOfTickets, isLoading, isError )

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />

      <div className="TicketOffice__main">
        {isLoading && <Loading />}

        {!isLoading && isError && <p>Произошла ошибка при загрузке данных.</p>}

        {!isLoading && !isError && listOfTickets?.items && listOfTickets.items.length > 0 ? (
          <div className="TicketOffice__Content">
            <SideBar />
            {TicketOfficeRoutes(listOfTickets)}
          </div>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default TicketOffice;
