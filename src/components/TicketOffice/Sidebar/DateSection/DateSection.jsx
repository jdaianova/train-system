import React from "./DateSection.css";

const DateSection = () => {
  return (
    <div className="DateSection">
      <label>
        Дата поездки
        <input type="date" />
      </label>

      <label>
        Дата возвращения
        <input type="date" />
      </label>
    </div>
  );
};

export default DateSection;
