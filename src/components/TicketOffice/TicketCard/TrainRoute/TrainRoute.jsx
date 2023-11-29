import "./TrainRoute.css";
import Destination from "../Destination/Destination";

const TrainRoute = ({route, arrowImg}) => {
  return (
    <div className="TrainRoute">
      <Destination
        time={route.from.datetime}
        city={route.from.city.name}
        station={route.from.railway_station_name}
      />

      <div className="TrainRoute-arrow">
        <p>
          {12} : {12}
        </p>
        <img src={arrowImg} alt="arrow of route" />
      </div>

      <Destination
        time={route.to.datetime}
        city={route.to.city.name}
        station={route.to.railway_station_name}
      />
    </div>
  );
};

export default TrainRoute;