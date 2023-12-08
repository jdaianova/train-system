import "./TrainCard.css";
import IconTrainInCircle from "../../commonTicketsComponents/IconTrainInCircle";
import TrainInfo from "../../commonTicketsComponents/TrainInfo/TrainInfo";

const TrainCard = ({ train, cityFrom, cityTo }) => {
  return (
    <div className="TrainCard">
      <IconTrainInCircle
        color={"rgba(255, 255, 255, 1)"}
        size={"86"}
        strokeWidth={1}
      />
      <TrainInfo cityFrom={cityFrom} cityTo={cityTo} trainName={train.name} />
    </div>
  );
};

export default TrainCard;
