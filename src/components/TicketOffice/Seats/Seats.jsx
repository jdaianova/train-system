import "./Seats.css";

import { useNavigate } from "react-router-dom";

import Arrow from "../commonTicketsComponents/svgComponents/Arrow";
import SeatsSectionInfo from "./SeatsSectionInfo/SeatsSectionInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFieldSeatsFilters } from "../../../redux/seatsFiltersSlice";

const Seats = ({ setIsShowSideBar }) => {
  const selectedSeats = useSelector((state) => state.seatsSelected);
  const tickets = useSelector((state) => state.tickets);

  const totalTickets =
    Number(tickets.departure.adultPassengers) +
    Number(tickets.departure.childPassengers) +
    Number(tickets.arrival.adultPassengers) +
    Number(tickets.arrival.childPassengers);

  const isEnoughSeatsSelected =
    totalTickets > 0 &&
    selectedSeats.departure.selectedSeats.length +
      selectedSeats.arrival.selectedSeats.length >=
      totalTickets;

  const dispatch = useDispatch();
  const savedDeparture = JSON.parse(localStorage.getItem("selectedDeparture"));
  const savedArrival = JSON.parse(localStorage.getItem("selectedArrival"));

  useEffect(() => {
    dispatch(setFieldSeatsFilters(["id", savedDeparture._id, "departure"]));
    dispatch(setFieldSeatsFilters(["id", savedArrival._id, "arrival"]));
    setIsShowSideBar(true);
  }, [setIsShowSideBar, dispatch, savedArrival, savedDeparture]);

  const navigate = useNavigate();

  const handleSaveTickets = (e) => {
    const amountOfAdultPassengers = Math.max(
      Number(tickets.departure.adultPassengers),
      Number(tickets.arrival.adultPassengers)
    );

    const amountOfChildPassengers = Math.max(
      Number(tickets.departure.childPassengers),
      Number(tickets.arrival.childPassengers)
    );

    const amountOfWithoutSeatPassengers = Math.max(
      Number(tickets.departure.withoutSeats),
      Number(tickets.arrival.withoutSeats)
    );
    const amountOfPassengers = {
      amountOfAdultPassengers: amountOfAdultPassengers,
      amountOfChildPassengers: amountOfChildPassengers,
      amountOfWithoutSeatPassengers: amountOfWithoutSeatPassengers,
    };
    let ticketsArr = [];

    ["departure", "arrival"].forEach((direction) => {
      selectedSeats[direction].selectedSeats.forEach((seat) => {
        let ticket = {
          isAdult: seat.isAdult,
          direction: direction,
          coachId: seat.coachId,
          coachName: seat.coachName,
          seat: seat.seat,
          price: seat.price,
          optionComfort: {},
        };

        selectedSeats[direction].selectedComfort.forEach((option) => {
          if (option.coachId === seat.coachId) {
            ticket.optionComfort[option.optionComfort] = option.price;
          }
        });

        ticketsArr.push(ticket);
      });
    });

    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    localStorage.setItem(
      "amountOfPassengers",
      JSON.stringify(amountOfPassengers)
    );

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
          onClick={handleSaveTickets}
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
