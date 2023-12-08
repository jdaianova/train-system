import React from "react";

const TrainInfo = ({ cityFrom, cityTo, trainName }) => {
  return (
    <div className="TrainInfo">
      <div className="TrainInfo-number">{"???"}</div>
      <div className="TrainInfo-start">{"?Адлер?"} &#8594;</div>
      <div className="TrainInfo-from">{cityFrom} &#8594;</div>
      <div className="TrainInfo-to">{cityTo}</div>
      <div className="TrainInfo-name"> &#171;{trainName}&#187;</div>
    </div>
  );
};

export default TrainInfo;
