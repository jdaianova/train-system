import "./TrainCard.css";

//import { useSelector } from "react-redux";

import IconTrainInCircle from "../../../commonTicketsComponents/svgComponents/IconTrainInCircle";
import TrainInfo from "../../../commonTicketsComponents/TrainInfo/TrainInfo";

import { capitalizeLettersInCityName } from "../../../../../utils/helpers";

const TrainCard = ({ train, cityFrom, cityTo }) => {
  //const cityFromId = useSelector((state) => state.filters.fromCutyId);

  //console.log(train);

  const formattedCityFrom = capitalizeLettersInCityName(cityFrom);
  const formattedCityTo = capitalizeLettersInCityName(cityTo);

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
        trainName={train.name}
        trainNumber={"?116C?"}
      />
    </div>
  );
};

export default TrainCard;
