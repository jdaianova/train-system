import "./TrainCard.css";

//import { useSelector } from "react-redux";

import IconTrainInCircle from "../../../commonTicketsComponents/svgComponents/IconTrainInCircle";
import TrainInfo from "../../../commonTicketsComponents/TrainInfo/TrainInfo";

import { capitalizeLettersInCityName, extractNameAndNumber } from "../../../../../utils/helpers";

const TrainCard = ({ train, cityFrom, cityTo }) => {

  const formattedCityFrom = capitalizeLettersInCityName(cityFrom);
  const formattedCityTo = capitalizeLettersInCityName(cityTo);
  const formattedTrainInfo = extractNameAndNumber(train.name);

  return (
    <div className="TrainCard">
      <IconTrainInCircle
        color={"rgba(255, 255, 255, 1)"}
        size={"86"}
        strokeWidth={1}
      />
      <TrainInfo
        cityFrom={formattedCityFrom}
        cityTo={formattedCityTo}
        trainName={formattedTrainInfo.name}
        trainNumber={formattedTrainInfo.number}
      />
    </div>
  );
};

export default TrainCard;
