import "./TicketOfficeBookingForm.css";

import InputCity from "../../Home/HomeBookingForm/InputCity/InputCity";
import InputDate from "../../Home/HomeBookingForm/InputDate/InputDate";
import { useSelector } from "react-redux";

export default function TicketOfficeBookingForm() {
  const formParams = useSelector((state) => state.formParams);

  const handleSubmit = () => {};

  return (
    <div className="TicketOfficeBookingForm">
      <form className="TicketOfficeBookingForm__Form" onSubmit={handleSubmit}>
        <div className="TicketOfficeBookingForm__Form-container">
          <label className="TicketOfficeBookingForm_Form-direction">
            Направление
            <div>
              <InputCity
                direction={"Откуда"}
                initialCity={formParams.fromCityNameInForm}
              />
              <InputCity
                direction={"Куда"}
                initialCity={formParams.toCityNameInForm}
              />
            </div>
          </label>

          <label className="TicketOfficeBookingForm__Form-date">
            Дата
            <div>
              <InputDate
                direction={"Откуда"}
                initialDate={formParams.dateStartInForm}
              />
              <InputDate
                direction={"Куда"}
                initialDate={formParams.dateEndInForm}
              />
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
