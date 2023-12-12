import "./SeatsSectionInfo.css";

import IconTrainInCircle from "../../commonTicketsComponents/svgComponents/IconTrainInCircle";
import Clock from "../../commonTicketsComponents/svgComponents/Clock";

import NumberOfTickets from "../NumberOfTickets/NumberOfTickets";
import TypeOfWagon from "../TypeOfWagon/TypeOfWagon";
import TrainInfo from "../../commonTicketsComponents/TrainInfo/TrainInfo";
import TrainRoute from "../../TicketsList/TicketCard/TrainRoute/TrainRoute";

import { secondsToHoursMinutes } from "../../../../utils/helpers";

const SeatsSectionInfo = ({ route }) => {
  return (
    <div className="SeatsSectionInfo">
      <div className="Seats__schedule Seats__section">
        <div className="Seats__schedule__train-info">
          <div className="Seats__schedule__train-info-icon">
            <IconTrainInCircle
              className="IconTrainInCircle"
              color={"rgba(255, 168, 0, 1)"}
              size={30}
              strokeWidth={2}
            />
          </div>
          <TrainInfo
            train={"sdsfd"}
            cityFrom={"sdfdsf"}
            cityTo={"sdfs"}
            trainNumber={"?116C?"}
          />
        </div>
        <div className="Seats__schedule__destination-info">
          {route && <TrainRoute route={route} showDuration={false} />}
        </div>
        <div className="Seats__schedule__duration-info">
          <Clock />
          <p>{secondsToHoursMinutes(route.duration)}</p>
        </div>
      </div>

      <div className="Seats__number-of-tickets Seats__section">
        <h4>Количество билетов</h4>
        <NumberOfTickets />
      </div>

      <div className="Seats__wagon-type Seats__section">
        <h4>Тип вагона</h4>
        <TypeOfWagon />
      </div>

      <div className="Seats__wagon-layout Seats__section"></div>
    </div>
  );
};

export default SeatsSectionInfo;
