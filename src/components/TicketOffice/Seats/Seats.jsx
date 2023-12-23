import "./Seats.css";

import { useNavigate } from "react-router-dom";

import Arrow from "../commonTicketsComponents/svgComponents/Arrow";
import SeatsSectionInfo from "./SeatsSectionInfo/SeatsSectionInfo";
import { useEffect } from "react";

const Seats = ({ setIsShowSideBar }) => {
  const savedDeparture = JSON.parse(localStorage.getItem("selectedDeparture"));
  const savedArrival = JSON.parse(localStorage.getItem("selectedArrival"));
  //console.log(savedDeparture)

  useEffect(() => {
    setIsShowSideBar(true);
  }, [setIsShowSideBar]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ticketoffice/passengers");
  };

  return (
    <div className="Seats-container">
      <h3>ВЫБОР МЕСТ</h3>
      <div className="Seats">
        <div className="Seats__from">
          <div className="Seats__from__header Seats__section">
            <div className="Seats__from__icon-arrow">
              <Arrow
                direction={"left-to-right"}
                width={30}
                height={20}
                color={"rgba(255, 255, 255, 1)"}
              />
            </div>
            <button
              className="Seats__from__button"
              onClick={() => navigate("/ticketoffice")}
            >
              Выбрать другой поезд
            </button>
          </div>
          <SeatsSectionInfo route={savedDeparture} />
        </div>

        <div className="Seats__to">
          <div className="Seats__to__header Seats__section">
            <div className="Seats__to__icon-arrow">
              <Arrow
                direction={"left-to-right"}
                width={30}
                height={20}
                color={"rgba(255, 255, 255, 1)"}
              />
            </div>
            <button
              className="Seats__to__button"
              onClick={() => navigate("/ticketoffice")}
            >
              Выбрать другой поезд
            </button>
          </div>
          <SeatsSectionInfo route={savedArrival} />
        </div>
      </div>

      <div className="Seats-btn">
        <button onClick={handleNavigate}>Далее</button>
      </div>
    </div>
  );
};

export default Seats;
