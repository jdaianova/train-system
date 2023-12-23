import "./SeatsLayout.css";

const SeatsLayout = ({ seats, typeOfCoach }) => {
  let amountOfseats = 0;
  switch(typeOfCoach) {
    case "first": amountOfseats=18; break;
    case "second": amountOfseats=32; break;
    case "third": amountOfseats=48; break;
    case "fourth": amountOfseats=62; break;
    default: amountOfseats=null;
  }

  const getSeatStatus = (index) => {
    const seat = seats.find((s) => s.index === index);
    return seat ? seat.available : false;
  };

  const handleSelectSeat = (index) => {
    if (getSeatStatus(index)) {
      console.log(`Выбрано место №${index}`);
      // Здесь может быть дополнительная логика обработки выбора места
    }
  };

  return (
    <div className="SeatsLayout">
      <div className="SeatsLayout__coach">
        {Array.from({ length: amountOfseats }, (_, i) => i + 1).map((index) => (
          <div
            key={index}
            className={`SeatsLayout__coach-seat ${
              getSeatStatus(index) ? "available" : "unavailable"
            }`}
            onClick={() => handleSelectSeat(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatsLayout;
