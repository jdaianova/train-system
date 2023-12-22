import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";
import "./SortingPanel.css";

const SortingPanel = ({ foundedTickets }) => {
  const [activPerPage, setActivPerPage] = useState(10);
  const [sortValue, setSortValue] = useState("time");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSortValue(newValue);
    dispatch(setFieldFilters(["sortOrder", newValue]));
  };

  const handleTicketsPerPage = (ticketsPerPage) => {
    setActivPerPage(ticketsPerPage);
    dispatch(setFieldFilters(["ticketsPerPage", ticketsPerPage]));
    const totalPages = Math.ceil(foundedTickets / ticketsPerPage);;
    dispatch(setFieldFilters(["totalPages", totalPages]));
  };

  return (
    <div className="SortingPanel">
      <p>найдено: {foundedTickets}</p>
      <div className="SortingPanel-right-container">
        <div className="SortingPanel__variants">
          <label htmlFor="SortingPanel__variants-select">сортировать по:</label>
          <select
            id="SortingPanel__variants-select"
            value={sortValue}
            onChange={handleChange}
          >
            <option value="time">времени</option>
            <option value="price">стоимости</option>
            <option value="duration">длительности</option>
          </select>
        </div>
        <div className="SortingPanel__variants-per-page">
          показывать по:
          {[2, 3, 10].map((ticketsPerPage) => (
            <button
              key={ticketsPerPage}
              className={ticketsPerPage === activPerPage ? "activPerPage" : ""}
              onClick={() => handleTicketsPerPage(ticketsPerPage)}
            >
              {ticketsPerPage}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingPanel;
