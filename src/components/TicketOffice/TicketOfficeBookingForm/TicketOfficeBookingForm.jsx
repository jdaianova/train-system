import "./TicketOfficeBookingForm.css";

import InputCity from "../../Home/HomeBookingForm/InputCity/InputCity";
import InputDate from "../../Home/HomeBookingForm/InputDate/InputDate";

export default function TicketOfficeBookingForm() {
  const handleSubmit = () => {};

  return (
    <div className="TicketOfficeBookingForm">
      <form className="TicketOfficeBookingForm__Form" onSubmit={handleSubmit}>
        <div className="TicketOfficeBookingForm__Form-container">
          <label className="TicketOfficeBookingForm_Form-direction">
            Направление
            <div>
              <InputCity direction={"Откуда"} />
              <InputCity direction={"Куда"} />
            </div>
          </label>

          <label className="TicketOfficeBookingForm__Form-date">
            Дата
            <div>
              <InputDate direction={"Откуда"} />
              <InputDate direction={"Куда"} />
            </div>
          </label>
        </div>

        <div className="TicketOfficeBookingForm__Form-btn">
          <button type="submit">найти билеты</button>
        </div>
      </form>
    </div>
  );
}
