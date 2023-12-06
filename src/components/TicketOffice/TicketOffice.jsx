import "./TicketOffice.css";

// import { useDispatch, useSelector } from "react-redux";

import HeaderTicketOffice from "./HeaderTicketOffice/HeaderTicketOffice";
import SideBar from "./Sidebar/SideBar";
import TicketsList from "./TicketsList/TicketsList";
import Footer from "../commonComponents/Footer/Footer";
import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";
import ErrorPopUp from "../commonComponents/ErrorPopUp/ErrorPopUp";
import Loading from "../commonComponents/Loading/Loading";

import {
  // useGetFromCityIdQuery,
  useGetTicketsRoutesQuery,
} from "../../redux/apSlice";
// import { buildUrlCityId, buildUrlRoutes } from "../../utils/helpers";
// import { setFromCityId } from "../../redux/ticketsFitersSlice";

const url = "/routes?from_city_id=641037eb5c49ea004632ee6e&to_city_id=641037eb5c49ea004632ee6f&date_start=2023-12-12&date_end=2023-12-18";

const TicketOffice = () => {
  // const dispatch = useDispatch();
  // const filters = useSelector((state) => state.filters);

  //получения id города отправления
  // const urlFromCityId = encodeURI(`/routes/cities?name=${filters.fromCityName}`);
  // const cityFromId = useGetFromCityIdQuery({urlFromCityId});
  // if (cityFromId.status === 'fulfilled') dispatch(setFromCityId(cityFromId));

  //получения id города прибытия

  //const url = buildUrlRoutes(filters);

  const listOfTickets = useGetTicketsRoutesQuery({
    url,
  });

  //console.log('listOfTickets in TicketOffice', listOfTickets)

  return (
    <div className="TicketOffice">
      <HeaderTicketOffice />
      <OrderStatusBar />
      <div className="TicketOffice__Content">
        <SideBar />

        {listOfTickets.status === 'pending' && <Loading />}

        {((listOfTickets.status === 'fulfilled') && (typeof listOfTickets !== 'undefined')) ? (
          <TicketsList listOfTickets={listOfTickets} />
        ) : (
          <ErrorPopUp
            textErrorTop={"НИЧЕГО НЕ НАЙДЕНО."}
            textErrorBottom={"Проверьте правильность введенных данных."}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TicketOffice;
