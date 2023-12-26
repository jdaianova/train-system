import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import TicketCard from "../TicketsList/TicketCard/TicketCard";

const Confirmation = () => {
  const navigate = useNavigate();

  const savedDeparture = localStorage.getItem("selectedDeparture")
    ? JSON.parse(localStorage.getItem("selectedDeparture"))
    : {};

  const savedArrival = localStorage.getItem("selectedArrival")
    ? JSON.parse(localStorage.getItem("selectedArrival"))
    : {};

  const trains = { departure: savedDeparture, arrival: savedArrival };

  // const amountOfPassengers = localStorage.getItem("amountOfPassengers")
  //   ? JSON.parse(localStorage.getItem("amountOfPassengers"))
  //   : {
  //       amountOfAdultPassengers: 0,
  //       amountOfChildPassengers: 0,
  //       amountOfWithoutSeatPassengers: 0,
  //     };

  const handleNavigate = (path) => {
    navigate(path);
  };

  console.log();

  return (
    <div className="Confirmation">
      <div className="Confirmation-title">Поезд</div>
      <TicketCard ticket={trains} />

      <div className="Confirmation__passengers">
        <div className="Confirmation-title">Пассажиры</div>
        <button onClick={() => handleNavigate("/ticketoffice/passengers")}>
          Изменить
        </button>
      </div>

      <div className="Confirmation__paying">
        <div className="Confirmation-title">Способ оплаты</div>
        <button onClick={() => handleNavigate("/ticketoffice/pay")}>
          Изменить
        </button>
      </div>

      <button onClick={() => handleNavigate("/final")}>Подтвердить</button>
    </div>
  );
};

export default Confirmation;
