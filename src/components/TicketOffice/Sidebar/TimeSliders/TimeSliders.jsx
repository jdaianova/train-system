import "./TimeSliders.css";

import { useState } from "react";

import TimeSlider from "./TimeSlider";
import Arrow from "../../commonTicketsComponents/svgComponents/Arrow";

const TimeSliders = ({ timeDirection }) => {
  const [showDetails, setShowDetails] = useState(false);
  const arrowDirection = timeDirection === "start" ? "left-to-right" : "";

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="TimeSliders">
      <div className="TimeSlider__Header">
        <div className="TimeSlider__Header-left">
          <div className="TimeSlider__Header-arrow">
            <Arrow
              direction={arrowDirection}
              width={13}
              color={"rgba(62, 60, 65, 1)"}
            />
          </div>
          <p>{timeDirection === "start" ? "туда" : "обратно"}</p>
        </div>
        <button onClick={toggleDetails}>{showDetails ? "-" : "+"}</button>
      </div>
      {showDetails && (
        <div className="TimeSlider__Details">
          <div className="TimeSlider__Details__from">
            <p> Время отбытия:</p>
            <TimeSlider timeDirection={timeDirection} direction={"departure"} />
          </div>
          <div className="TimeSlider__Details__to">
            <p> Время прибытия:</p>
            <TimeSlider timeDirection={timeDirection} direction={"arrival"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSliders;
