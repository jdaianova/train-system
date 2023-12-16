import "./TicketOffice.css";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import SideBar from "./Sidebar/SideBar";
import Footer from "../commonComponents/Footer/Footer";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import Loading from "../commonComponents/Loading/Loading";
import ErrorPopUp from "../commonComponents/ErrorPopUp/ErrorPopUp";

import { useGetTicketsRoutesQuery } from "../../redux/apSlice";
import { TicketOfficeRoutes } from "../Routes/Routes";
import { useSelector } from "react-redux";
import { buildUrlRoutes } from "../../utils/helpers";

const TicketOffice = () => {
  const filters = useSelector((state) => state.filters);
  const url = buildUrlRoutes(filters);
  const {
    data: listOfTickets,
    isLoading,
    isError,
  } = useGetTicketsRoutesQuery({ url });

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />

      <div className="TicketOffice__main">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="TicketOffice__Content">
            <SideBar />

            <div>
              {isError && <ErrorPopUp />}

              {!isError &&
              listOfTickets?.items &&
              listOfTickets.items.length > 0 ? (
                <div>{TicketOfficeRoutes(listOfTickets)}</div>
              ) : (
                <div className="TicketOffice__Error">
                  <ErrorPopUp textErrorTop={'НИЧЕГО НЕ НАЙДЕНО'} textErrorBottom={'проверьте введенные данные'}/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default TicketOffice;
