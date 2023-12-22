import { useSelector } from "react-redux";
import { buildUrlRoutes } from "../../../utils/helpers";
import { useGetTicketsRoutesQuery } from "../../../redux/apSlice";
import Loading from "../../commonComponents/Loading/Loading";
import ErrorPopUp from "../../commonComponents/ErrorPopUp/ErrorPopUp";
import SortingPanel from "../TicketsList/SortingPanel/SortingPanel";
import PagesNumbers from "../TicketsList/PagesNumbers/PagesNumbers";
import TicketCard from "../TicketsList/TicketCard/TicketCard";
import { nanoid } from "nanoid";

const TicketsList = () => {
  const filters = useSelector((state) => state.filters);
  const url = buildUrlRoutes(filters);

  const {
    data: listOfTickets,
    isLoading,
    isError,
  } = useGetTicketsRoutesQuery({ url });

  return (
    <div>
      {isLoading && <Loading />}

      {isError || !listOfTickets?.items ? (
        <div className="TicketsList__error">
          <ErrorPopUp
            key={Date.now()}
            textErrorTop={isError ? "ОШИБКА ЗАГРУЗКИ" : "НИЧЕГО НЕ НАЙДЕНО"}
            textErrorBottom={
              isError ? "Попробуйте снова" : "Проверьте введенные данные"
            }
          />
        </div>
      ) : (
        <div className="TicketOffice__main">
          {listOfTickets?.items && listOfTickets?.items.length > 0 && (
            <div className="TicketsList">
              <SortingPanel foundedTickets={listOfTickets.items.length} />
              <div className="TicketsList__list">
                {listOfTickets.items.map((ticket) => (
                  <TicketCard key={nanoid()} ticket={ticket} />
                ))}
              </div>
              <PagesNumbers />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketsList;
