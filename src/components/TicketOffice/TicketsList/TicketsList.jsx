import "./TicketsList.css";

import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { buildUrlRoutes } from "../../../utils/helpers";
import { useGetTicketsRoutesQuery } from "../../../redux/apiSlice";
import Loading from "../../commonComponents/Loading/Loading";
import ErrorPopUp from "../../commonComponents/ErrorPopUp/ErrorPopUp";
import SortingPanel from "../TicketsList/SortingPanel/SortingPanel";
import PagesNumbers from "../TicketsList/PagesNumbers/PagesNumbers";
import TicketCard from "../TicketsList/TicketCard/TicketCard";
import { useEffect } from "react";

const TicketsList = ({ setIsShowSideBar }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filters = useSelector((state) => state.filters);
  const { currentPage, limit } = filters;
  const url = buildUrlRoutes(filters);

  const {
    data: listOfTickets,
    isLoading,
    isError,
  } = useGetTicketsRoutesQuery({ url });

  useEffect(() => {
    if (isLoading || isError) {
      setIsShowSideBar(false);
    } else if (listOfTickets && listOfTickets?.items?.length > 0) {
      setIsShowSideBar(true);
    };
  }, [isLoading, isError, listOfTickets, setIsShowSideBar]);

  return (
    <div className="TicketsList">
      {isLoading && <Loading />}

      {!isLoading && isError && (
        <div className="TicketsList__error">
          <ErrorPopUp
            textErrorTop="ОШИБКА ЗАГРУЗКИ"
            textErrorBottom="Попробуйте снова"
          />
        </div>
      )}

      {!isLoading && !isError && listOfTickets?.items?.length === 0 && (
        <div className="TicketsList__error">
          <ErrorPopUp
            textErrorTop="НИЧЕГО НЕ НАЙДЕНО"
            textErrorBottom="Проверьте введенные данные"
          />
        </div>
      )}

      {!isLoading && !isError && listOfTickets?.items?.length > 0 && (
        <div className="TicketOffice__main">
          {listOfTickets?.items && listOfTickets?.items.length > 0 && (
            <div className="TicketsList">
              <SortingPanel foundedTickets={listOfTickets.items.length} />
              <div className="TicketsList__list">
                {listOfTickets.items
                  .slice((currentPage - 1) * limit, currentPage * limit)
                  .map((ticket) => (
                    <TicketCard key={nanoid()} ticket={ticket} />
                  ))}
              </div>
              <PagesNumbers
                numberOfPages={`${Math.ceil(
                  listOfTickets.items.length / filters.limit
                )}`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketsList;
