import "./TicketsList.css";
import { useGetTicketsRoutesQuery } from "../../../redux/apiTicketsRoutesSlice";
import TicketCard from "../TicketCard/TicketCard";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  dateChecker,
  buildUrlCityId,
  buildUrlRoutes,
} from "../../../utils/helpers";
import ErrorPopUp from "../../ErrorPopUp/ErrorPopUp";
import {
  setDateEnd,
  setDateStart,
  setFromCityId,
} from "../../../redux/ticketsFitersSlice";

const TicketsList = () => {
  const dispatch = useDispatch();

  const formParams = useSelector((state) => state.formParams);
  // проверка данных формы перед переносом в filters
  // const cityFromUrl = buildUrlCityId(formParams.fromCityNameInForm);
  // const cityFromId = useGetTicketsRoutesQuery({ cityFromUrl });
  // console.log('cityFromId', cityFromId)
  // cityFromId.status === "fulfilled" ? (
  //   dispatch(setFromCityId(cityFromId))
  // ) : (
  //   <ErrorPopUp
  //     textErrorTop={"ОШИБКА ВВОДА ДАННЫХ."}
  //     textErrorBottom={"Из города отправления нет поездов."}
  //   />
  // );

  // const cityToUrl = buildUrlCityId(formParams.toCityNameInForm);
  // const cityToId = useGetTicketsRoutesQuery({ cityToUrl });
  // cityToId.status === "fulfilled" ? (
  //   dispatch(setFromCityId(cityToId))
  // ) : (
  //   <ErrorPopUp
  //     textErrorTop={"ОШИБКА ВВОДА ДАННЫХ."}
  //     textErrorBottom={"Из города отправления нет поездов."}
  //   />
  // );

  if (dateChecker(formParams.dateStartInForm, formParams.dateEndInForm)) {
    setDateStart(formParams.dateStartInForm);
    setDateEnd(formParams.dateEndInForm);
  } else {
    <ErrorPopUp
      textErrorTop={"ОШИБКА ВВОДА ДАННЫХ."}
      textErrorBottom={"Даты введены неверно."}
    />;
  }

  const filters = useSelector((state) => state.filters);
  const url = buildUrlRoutes(filters);

  // const url =
  //   "/routes?from_city_id=641037eb5c49ea004632ee6e&to_city_id=641037eb5c49ea004632ee6f&date_start=2023-12-12&date_end=2023-12-18";

  const listOfTickets = useGetTicketsRoutesQuery({ url });

  if (listOfTickets.status === "pending") {
    return (
      <div className="TicketsList__pending">
        <div className="TicketsList__pending-info">
          <h4>ИДЕТ ПОИСК</h4>
        </div>
      </div>
    );
  }

  // if (listOfTickets.status === "fulfilled") {
  //   console.log(listOfTickets.currentData.items);
  // }

  if (
    listOfTickets.status === "fulfilled" &&
    typeof listOfTickets.currentData.items !== "undefined"
  ) {
    if (listOfTickets.currentData.items.length >= 1)
      return (
        <div className="TicketsList">
          {listOfTickets.currentData.items.map((ticket) => {
            return <TicketCard key={nanoid()} ticket={ticket} />;
          })}
        </div>
      );
  } else {
    return (
      <div className="TicketsList">
        <ErrorPopUp
          textErrorTop={"НИЧЕГО НЕ НАЙДЕНО."}
          textErrorBottom={"Проверьте правильность введенных данных."}
        />
      </div>
    );
  }
};

export default TicketsList;
