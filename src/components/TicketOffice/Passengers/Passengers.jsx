import { useState } from "react";
import "./Passengers.css";
import { useNavigate } from "react-router-dom";
import PassengerFormsList from "./PassengerFormsList/PassengerFormsList";

const Passengers = () => {
  const [isFormsFilled, setIsFormsFilled] = useState(false);
  const navigate = useNavigate();

  const amountOfPassengers = localStorage.getItem("amountOfPassengers")
    ? JSON.parse(localStorage.getItem("amountOfPassengers"))
    : {
        amountOfAdultPassengers: 0,
        amountOfChildPassengers: 0,
        amountOfWithoutSeatPassengers: 0,
      };

  const handleNavigate = () => {
    navigate("/ticketoffice/pay");
  };

  return (
    <div className="Passengers">
      <PassengerFormsList
        numOfPassengersForms={
          amountOfPassengers.amountOfAdultPassengers +
          amountOfPassengers.amountOfChildPassengers +
          amountOfPassengers.amountOfWithoutSeatPassengers
        }
        setIsFormsFilled={setIsFormsFilled}
      />
      <button
        className={`submit-btn ${isFormsFilled ? "enabled-btn" : "disabled-btn"}`}
        onClick={handleNavigate}
        disabled={!isFormsFilled}
      >
        Далее
      </button>
    </div>
  );
};

export default Passengers;
