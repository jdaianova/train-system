import DataSideBarPassengers from "./DataSideBarPassengers/DataSideBarPassengers";
import DataSideBarRoute from "./DataSideBarRoute/DataSideBarRoute";
import RubIcon from "../commonTicketsComponents/svgComponents/RubIcon";
import "./DataSidebar.css";
import { useSelector } from "react-redux";

const DataSidebar = () => {
  const currentRoutes = useSelector((state) => state.currentRoutes);
  const tickets = useSelector((state) => state.tickets);
  const savedDeparture = currentRoutes.currentRoutes.departure;
  const savedArrival = currentRoutes.currentRoutes.arrival;

  const {
    selectedPriceAdult,
    selectedlPriceChild,
    selectedNumAdult,
    selectedNumChild,
    selectedPriceComfort,
  } = useSelector((state) => state.seatsSelected);

  return (
    <div className="DataSidebar">
      <h4>Детали поездки</h4>

      {tickets.departure.currentPassengers >0 && <DataSideBarRoute direction={"departure"} route={savedDeparture} />}

      {tickets.arrival.currentPassengers >0 && <DataSideBarRoute direction={"arrival"} route={savedArrival} />}

      <DataSideBarPassengers
        selectedPriceAdult={selectedPriceAdult}
        selectedlPriceChild={selectedlPriceChild}
        selectedNumAdult={selectedNumAdult}
        selectedNumChild={selectedNumChild}
      />

      <div className="DataSidebar__total">
        <h3>итог</h3>
        <p>{selectedPriceAdult + selectedlPriceChild + selectedPriceComfort}</p>
        <RubIcon height={32} color={"rgba(229, 229, 229, 1)"} />
      </div>
    </div>
  );
};

export default DataSidebar;
