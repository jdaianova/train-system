import "./HomeBookingForm.css";
import { useNavigate } from "react-router-dom";
import InputCity from "./InputCity/InputCity";
import InputDate from "./InputDate/InputDate";
import { ROUTES } from "../../../utils/routes";

export default function HomeBookingForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(ROUTES.TICKETS);
  };

  return (
    <div className="HomeBookingForm">
      <form className="HomeBookingForm__Form" onSubmit={(e) => handleSubmit(e)}>
        <label className="HomeBookingForm_Form-direction">
          Направление
          <div>
            <InputCity direction={"Откуда"} />
            <InputCity direction={"Куда"} />
          </div>
        </label>

        <label className="HomeBookingForm__Form-date">
          Дата
          <div>
            <InputDate direction={"Откуда"} />
            <InputDate direction={"Куда"} />
          </div>
        </label>

        <div className="HomeBookingForm__Form-btn">
          <button type="submit">найти билеты</button>
        </div>
      </form>
    </div>
  );
}
