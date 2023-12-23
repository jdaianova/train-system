import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";
import "./SortingPanel.css";

const SortingPanel = ({ foundedTickets }) => {
  const [activPerPage, setActivPerPage] = useState(10);
  const [sortValue, setSortValue] = useState("date");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSortValue(newValue);
    dispatch(setFieldFilters(["sort", newValue]));
  };

  const handlePerPageChange = (newPerPage) => {
    setActivPerPage(newPerPage);
    dispatch(setFieldFilters(["limit", newPerPage]));
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
            <option value="date">времени</option>
            <option value="price_min">стоимости</option>
            <option value="duration">длительности</option>
          </select>
        </div>
        <div className="SortingPanel__variants-per-page">
          показывать по:
          {[2, 5, 10].map((ticketsPerPage) => (
            <button
              key={ticketsPerPage}
              className={ticketsPerPage === activPerPage ? "activPerPage" : ""}
              onClick={() => handlePerPageChange(ticketsPerPage)}
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
