import "./SeatsSectionInfo.css";

import IconTrainInCircle from "../../commonTicketsComponents/svgComponents/IconTrainInCircle";
import Clock from "../../commonTicketsComponents/svgComponents/Clock";

import NumberOfTickets from "../NumberOfTickets/NumberOfTickets";
import TypeOfWagon from "../TypeOfWagon/TypeOfWagon";
import TrainInfo from "../../commonTicketsComponents/TrainInfo/TrainInfo";
import TrainRoute from "../../TicketsList/TicketCard/TrainRoute/TrainRoute";

import {
  capitalizeLettersInCityName,
  extractNameAndNumber,
  secondsToHoursMinutes,
} from "../../../../utils/helpers";
import CoachSection from "../CoachSection/CoachSection";

const SeatsSectionInfo = ({ route }) => {
  if (!route) return null;
  console.log(route);

  const trainInfo = extractNameAndNumber(route.train.name);
  console.log(trainInfo);

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
            trainName={trainInfo.name}
            cityFrom={capitalizeLettersInCityName(route.from.city.name)}
            cityTo={capitalizeLettersInCityName(route.to.city.name)}
            trainNumber={trainInfo.number}
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

      <CoachSection />

      <div className="Seats__wagon-layout Seats__section"></div>
    </div>
  );
};

export default SeatsSectionInfo;
