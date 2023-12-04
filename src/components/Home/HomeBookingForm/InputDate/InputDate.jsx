import { useState } from "react";
import "./InputDate.css";
import { useSelector, useDispatch } from "react-redux";
import { setDateStart, setDateEnd } from "../../../../redux/ticketsFitersSlice";

const InputDate = ({ direction }) => {
  const dispatch = useDispatch();

  const initialDate = useSelector((state) =>
    direction === "Откуда" ? state.filters.dateStart : state.filters.dateEnd
  );
  const [date, setDate] = useState(initialDate);

  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    direction === "Откуда"
      ? dispatch(setDateStart(e.target.value))
      : dispatch(setDateEnd(e.target.value));
  };

  return (
    <div className="InputDate">
      <input
        type="date"
        value={date}
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
  );
};

export default InputDate;
