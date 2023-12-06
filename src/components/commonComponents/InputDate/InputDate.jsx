import "./InputDate.css";

import { useState } from "react";

const InputDate = ({ direction, initialDate, setFormData }) => {
const [date, setDate] = useState(initialDate || '');

const handleInput = (e) => {
    setDate(e.target.value);
    direction === "Откуда"
      ? setFormData((prevFormData) => ({
          ...prevFormData,
          dateStart: e.target.value,
        }))
      : setFormData((prevFormData) => ({
          ...prevFormData,
          dateEnd: e.target.value,
        }));
  };

  return (
    <div className="InputDate">
      <input
        type="date"
        value={date}
        onChange={handleInput}
        required
      />
    </div>
  );
};

export default InputDate;
