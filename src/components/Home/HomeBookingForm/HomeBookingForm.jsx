import "./HomeBookingForm.css";
import { useNavigate } from "react-router-dom";
import InputCity from "./InputCity/InputCity";
import InputDate from "./InputDate/InputDate";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

export default function HomeBookingForm() {
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    //navigate(ROUTES.TICKETS)
  };

  return (
    <div className="HomeBookingForm">
      <form className="HomeBookingForm__Form" onSubmit={(e) => handleSubmit(e)}>
        <label className="HomeBookingForm_Form-direction">
          Направление
          <div>
            <InputCity direction={"Откуда"} initialCity={""} />
            <InputCity direction={"Куда"} initialCity={""} />
          </div>
        </label>

        <label className="HomeBookingForm__Form-date">
          Дата
          <div>
            <InputDate direction={"Откуда"} initialDate={""} />
            <InputDate direction={"Куда"} initialDate={""} />
          </div>
        </label>

        <div className="HomeBookingForm__Form-btn">
          <Link to={ROUTES.TICKETS}>
          <button type="submit">найти билеты</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
