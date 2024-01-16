import { useState } from "react";
import "./Passengers.css";
import { useNavigate } from "react-router-dom";
import PassengerFormsList from "./PassengerFormsList/PassengerFormsList";
import { useSelector } from "react-redux";

const Passengers = () => {

  const [isFormsFilled, setIsFormsFilled] = useState(false);
  const navigate = useNavigate();
  const { totalPassengers } = useSelector((state) => state.tickets);

  const handleNavigate = () => {
    navigate("/ticketoffice/pay");
  };

  return (
    <div className="Passengers">
      <PassengerFormsList
        numOfPassengersForms={totalPassengers}
        setIsFormsFilled={setIsFormsFilled}
      />
      <button
        className={`submit-btn ${
          isFormsFilled ? "enabled-btn" : "disabled-btn"
        }`}
        onClick={handleNavigate}
        disabled={!isFormsFilled}
      >
        Далее
      </button>
    </div>
  );
};

export default Passengers;
