import "./TrainCard.css";
import trainIcon from "../../../../data/img/train-icon.png";

const TrainCard = ({train, cityFrom, cityTo}) => {

  return (
    <div className="TrainCard">
      <div className="TrainCard-icon">
        <img src={trainIcon} alt="train icon" />
      </div>

      <div className="TrainCard-trainNumber">{"???"}</div>

      <div className="TrainCard__start">{'?Адлер?'} &#8594;</div>

      <div className="TrainCard__from">{cityFrom} &#8594;</div>

      <div className="TrainCard__to">{cityTo}</div>

      <div className="TrainCard__name">	&#171;{train.name}&#187;</div>
    </div>
  );
};

export default TrainCard;
