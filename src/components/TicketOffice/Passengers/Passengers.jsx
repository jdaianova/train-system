
import { useEffect } from "react";
import PassengerCard from "./PassengerCard/PassengerCard";
import "./Passengers.css";
import { useNavigate } from 'react-router-dom';

const Passengers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ticketoffice/pay');
  };



  return (
    <div className="Passengers">
      <PassengerCard />
      <button onClick={handleNavigate}>Go to Payment</button>
    </div>
  );
};

export default Passengers;
