import { useSelector, useDispatch } from "react-redux";
import "./SeatsLayout.css";
import {
  addSelectedSeat,
  removeSelectedSeat,
} from "../../../../../redux/seatsSelectedSlice";

const SeatsLayout = ({ coach, seats, direction }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets[direction]);
  const { childPassengers, adultPassengers } = tickets;
  const { selectedSeats } = useSelector(
    (state) => state.seatsSelected[direction]
  );

  const numberOfSelectedSeats =
    Number(adultPassengers) + Number(childPassengers);

  let amountOfSeats = 0;
  switch (coach.class_type) {
    case "first":
      amountOfSeats = 18;
      break;
    case "second":
      amountOfSeats = 32;
      break;
    case "third":
      amountOfSeats = 48;
      break;
    case "fourth":
      amountOfSeats = 62;
      break;
    default:
      amountOfSeats = null;
  }

  const calculateSeatPrice = (index) => {
    if (coach.class_type === "fourth") {
      return coach.bottom_price;
    }
    if (coach.class_type === "third" && index >= 33 && index <= 48) {
      return coach.side_price;
    }
    return index % 2 === 0 ? coach.top_price : coach.bottom_price;
  };

  const getSeatStatus = (index) => {
    const seat = seats.find((s) => s.index === index);
    const isSelectedInThisCoach = selectedSeats.some(
      (seat) => seat.seat === index && seat.coachId === coach._id
    );
    return seat ? seat.available && !isSelectedInThisCoach : false;
  };

  const isSeatTempSelected = (index) => {
    return selectedSeats.some(
      (seat) => seat.seat === index && seat.coachId === coach._id
    );
  };

  const handleSelectSeat = (index) => {
    const currentPrice = calculateSeatPrice(index);
    const isNextPassengerAdult =
      selectedSeats.filter((seat) => seat.isAdult).length < adultPassengers;

    if (getSeatStatus(index) && selectedSeats.length < numberOfSelectedSeats) {
      dispatch(
        addSelectedSeat({
          coachId: coach._id,
          coachName: coach.name,
          seat: index,
          price: currentPrice,
          isAdult: isNextPassengerAdult,
          direction,
        })
      );
    }

    if (isSeatTempSelected(index)) {
      dispatch(
        removeSelectedSeat({ seat: index, coachId: coach._id, direction })
      );
    }
  };

  const currentClassName = (index) => {
    if (isSeatTempSelected(index)) return "temp-selected";
    return getSeatStatus(index) ? "available" : "unavailable";
  };

  return (
        <div className="SeatsLayout">
          <div className="SeatsLayout__coach">
            {Array.from({ length: amountOfSeats }, (_, i) => i + 1).map(
              (index) => (
                <div
                  key={index}
                  className={`SeatsLayout__coach-seat ${currentClassName(
                    index
                  )}`}
                  onClick={() => handleSelectSeat(index)}
                >
                  {index}
                </div>
              )
            )}
          </div>
        </div>
  );
};

export default SeatsLayout;
