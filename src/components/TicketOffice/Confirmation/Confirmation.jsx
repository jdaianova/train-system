import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import TicketCard from "../TicketsList/TicketCard/TicketCard";
import { useSelector } from "react-redux";
import PassengerCard from "./PassengerCard/PassengerCard";

const Confirmation = () => {
  const navigate = useNavigate();
  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const passengersList = passengersFormsData.passengersFormsData;
  const payingClient = passengersFormsData.payingClient;

  const savedDeparture = localStorage.getItem("selectedDeparture")
    ? JSON.parse(localStorage.getItem("selectedDeparture"))
    : {};

  const savedArrival = localStorage.getItem("selectedArrival")
    ? JSON.parse(localStorage.getItem("selectedArrival"))
    : {};

  const trains = { departure: savedDeparture, arrival: savedArrival };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="Confirmation">
      <div className="Confirmation-title">Поезд</div>
      <TicketCard ticket={trains} />

      <div className="Confirmation__passengers">
        <div className="Confirmation-title">Пассажиры</div>
        <div className="Confirmation__info">
          {passengersList && (
            <div className="Confirmation__info-passengers">
              {passengersList.map((passenger, i) => (
                <PassengerCard key={i} passenger={passenger} />
              ))}
            </div>
          )}
          <div className="Confirmation__info-btn-container">
            <button
              className="Confirmation__info-btn"
              onClick={() => handleNavigate("/ticketoffice/passengers")}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className="Confirmation__paying">
        <div className="Confirmation-title">Способ оплаты</div>
        <div className="Confirmation__info">
          {payingClient.payingCash && "Наличными"}
          {payingClient.payingOnline && "Online"}
          <div className="Confirmation__info-btn-container">
            <button
              className="Confirmation__info-btn"
              onClick={() => handleNavigate("/ticketoffice/pay")}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <button className="submit-btn enabled-btn" onClick={() => handleNavigate("/final")}>Подтвердить</button>
    </div>
  );
};

export default Confirmation;
