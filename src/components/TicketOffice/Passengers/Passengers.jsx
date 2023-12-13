
import { useEffect } from "react";
import PassengerCard from "./PassengerCard/PassengerCard";
import "./Passengers.css";

const Passengers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="Passengers">
      <PassengerCard />
    </div>
  );
};

export default Passengers;
