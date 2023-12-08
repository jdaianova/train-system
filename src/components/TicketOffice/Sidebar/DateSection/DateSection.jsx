import "./DateSection.css";

import { useDispatch, useSelector } from "react-redux";
import { setDateEnd, setDateStart } from "../../../../redux/ticketsFitersSlice";

const DateSection = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChangeDateStart = (e) => {
    e.preventDefault();
    dispatch(setDateStart(e.target.value));
  };

  const handleChangeDateEnd = (e) => {
    e.preventDefault();
    dispatch(setDateEnd(e.target.value));
  };

  return (
    <div className="DateSection">
      <label>
        Дата поездки
        <input
          type="date"
          onChange={handleChangeDateStart}
          value={filters.dateStart}
        />
      </label>

      <label>
        Дата возвращения
        <input
          type="date"
          onChange={handleChangeDateEnd}
          value={filters.dateEnd}
        />
      </label>
    </div>
  );
};

export default DateSection;
