import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import TicketCard from "../TicketsList/TicketCard/TicketCard";
import { useSelector } from "react-redux";
import PassengerCard from "./PassengerCard/PassengerCard";
import { useCreateOrderMutation } from "../../../redux/apiSlice";

const Confirmation = () => {
  const navigate = useNavigate();
  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const passengersList = passengersFormsData.passengersFormsData;
  const payingClient = passengersFormsData.payingClient;
  const currentRoutes = useSelector((state) => state.currentRoutes);
  const savedDeparture = currentRoutes.currentRoutes.departure;
  const savedArrival = currentRoutes.currentRoutes.arrival;
  const trains = { departure: savedDeparture, arrival: savedArrival };
  const [createOrder] = useCreateOrderMutation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSubmitOrder = async () => {
    // Подготовка данных для заказа
    const orderData = {
      user: {
        first_name: payingClient.firstName,
        last_name: payingClient.lastName,
        patronymic: payingClient.middleName,
        phone: payingClient.phone,
        email: payingClient.email,
        payment_method: payingClient.payingCash ? "cash" : "online",
      },
      departure: {
        route_direction_id: "123431",
        seats: [],
      },
    };

    try {
      // Отправка запроса на создание заказа
      const response = await createOrder(orderData).unwrap();
      //console.log("response", response);
      if (response.status) navigate("/final");
    } catch (error) {
      //console.error("Failed to create order", error);
    }

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

      <button className="submit-btn enabled-btn" onClick={handleSubmitOrder}>
        Подтвердить
      </button>
    </div>
  );
};

export default Confirmation;
