import "./TrainInfo.css";

const TrainInfo = ({ cityFrom, cityTo, trainName, trainNumber }) => {
  return (
    <div className="TrainInfo">
      <div className="TrainInfo-number">{trainNumber}</div>
      <div className="TrainInfo-cities">{cityFrom} &#8594;</div>
      <div className="TrainInfo-cities">{cityTo}</div>
      <div className="TrainInfo-cities"> &#171;{trainName}&#187;</div>
    </div>
  );
};

export default TrainInfo;
