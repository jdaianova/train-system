import "./Seats.css";

import TrainCard from "../TicketCard/TrainCard/TrainCard";
import IconTrainInCircle from "../commonTicketsComponents/IconTrainInCircle";
import Arrow from "../commonTicketsComponents/Arrow";

const Seats = () => {
  return (
    <div className="Seats-container">
      <h3>ВЫБОР МЕСТ</h3>
      <div className="Seats">
        <div className="Seats__header Seats__section">
          <div className="Seats__header__icon-arrow">
            <Arrow
              direction={"left-to-right"}
              width={30}
              height={20}
              color={"rgba(255, 255, 255, 1)"}
            />
          </div>
          <button className="Seats__header__button">
            Выбрать другой поезд
          </button>
        </div>

        <div className="Seats__schedule Seats__section">
          <div className="Seats__schedule__train-info">
            <IconTrainInCircle
              color={"rgba(255, 168, 0, 1)"}
              size={30}
              strokeWidth={2}
            />
            <TrainCard train={"sdsfd"} cityFrom={"sdfdsf"} cityTo={"sdfs"} />
          </div>
          <div className="Seats__schedule__destination-info">sdfs</div>
          <div className="Seats__schedule__duration-info">sdfs</div>
        </div>

        <div className="Seats__number-of-tickets Seats__section"></div>

        <div className="Seats__wagon-type Seats__section"></div>

        <div className="Seats__wagon-layout Seats__section"></div>
      </div>
    </div>
  );
};

export default Seats;
