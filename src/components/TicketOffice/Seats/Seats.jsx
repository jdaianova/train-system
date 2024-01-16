import "./Seats.css";

import { useNavigate } from "react-router-dom";

import Arrow from "../commonTicketsComponents/svgComponents/Arrow";
import SeatsSectionInfo from "./SeatsSectionInfo/SeatsSectionInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFieldSeatsFilters } from "../../../redux/seatsFiltersSlice";
import { clearPassengerForms } from "../../../redux/passengersFormsData";

const Seats = ({ setIsShowSideBar }) => {
  const dispatch = useDispatch();

  const selectedSeats = useSelector((state) => state.seatsSelected);

  const tickets = useSelector((state) => state.tickets);
  const { totalTickets } = tickets;

  const currentRoutes = useSelector((state) => state.currentRoutes);
  const savedDeparture = currentRoutes.currentRoutes.departure;
  const savedArrival = currentRoutes.currentRoutes.arrival;

  const isEnoughSeatsSelected =
    totalTickets > 0 &&
    selectedSeats.departure.selectedSeats.length +
      selectedSeats.arrival.selectedSeats.length >=
      totalTickets;

  useEffect(() => {
    dispatch(setFieldSeatsFilters(["id", savedDeparture._id, "departure"]));
    dispatch(setFieldSeatsFilters(["id", savedArrival._id, "arrival"]));
    setIsShowSideBar(true);
  }, [setIsShowSideBar, dispatch, savedArrival, savedDeparture]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    dispatch(clearPassengerForms());
    navigate("/ticketoffice/passengers");
  };

  return (
    <div className="Seats-container">
      <h3>ВЫБОР МЕСТ</h3>
      <div className="Seats">
        {savedDeparture && (
          <div className="Seats__from">
            <div className="Seats__from__header Seats__section">
              <div className="Seats__from__icon-arrow">
                <Arrow
                  direction={"departure"}
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
            <SeatsSectionInfo route={savedDeparture} direction={"departure"} />
          </div>
        )}

        {savedArrival && (
          <div className="Seats__to">
            <div className="Seats__to__header Seats__section">
              <div className="Seats__to__icon-arrow">
                <Arrow
                  direction={"arrival"}
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
            <SeatsSectionInfo route={savedArrival} direction={"arrival"} />
          </div>
        )}
      </div>

      <div className="Seats-btn">
        <button
          onClick={handleNavigate}
          disabled={!isEnoughSeatsSelected}
          className={`Seats-btn-button ${
            !isEnoughSeatsSelected ? "disableBtn" : ""
          }`}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

export default Seats;
