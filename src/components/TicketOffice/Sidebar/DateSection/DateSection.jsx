import "./DateSection.css";

import { useDispatch, useSelector } from "react-redux";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";

const DateSection = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(setFieldFilters(field, value));
  };

  return (
    <div className="DateSection">
      <label>
        Дата поездки
        <input
          type="date"
          onChange={e => handleChange('dateStart', e.target.value)}
          value={filters.dateStart}
        />
      </label>

      <label>
        Дата возвращения
        <input
          type="date"
          onChange={e => handleChange('dateEnd', e.target.value)}
          value={filters.dateEnd}
        />
      </label>
    </div>
  );
};

export default DateSection;
