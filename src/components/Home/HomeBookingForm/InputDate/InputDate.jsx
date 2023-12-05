import { useState } from "react";
import "./InputDate.css";
import { useDispatch } from "react-redux";
import { setDateEndInForm, setDateStartInForm } from "../../../../redux/formParams";

const InputDate = ({ direction, initialDate }) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(initialDate);

  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    direction === "Откуда"
      ? dispatch(setDateStartInForm(e.target.value))
      : dispatch(setDateEndInForm(e.target.value));
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
