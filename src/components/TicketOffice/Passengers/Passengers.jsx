import { useState } from "react";
import "./Passengers.css";
import { useNavigate } from "react-router-dom";
import PassengerFormsList from "./PassengerFormsList/PassengerFormsList";
//import { useSelector } from "react-redux";

const Passengers = () => {
  const [isFormsFilled, setIsFormsFilled] = useState(false);
  const navigate = useNavigate();

  // const selectedTickets = localStorage.getItem("tickets")
  //   ? JSON.parse(localStorage.getItem("tickets"))
  //   : [];

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
      <button className="Passengers-submit" onClick={handleNavigate} disabled={isFormsFilled}>
        Далее
      </button>
    </div>
  );
};

export default Passengers;
