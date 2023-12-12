import "./TrainRoute.css";
import Destination from "../Destination/Destination";
import Arrow from "../../../commonTicketsComponents/svgComponents/Arrow";

const TrainRoute = ({ route, showDuration }) => {
  //console.log("route", route);
  return (
    <div className="TrainRoute">
      <Destination
        time={route.from.datetime}
        city={route.from.city.name}
        station={route.from.railway_station_name}
      />

      <div className="TrainRoute-arrow">
        {showDuration && <p>
          {`${parseInt(route.duration / 3600)} : ${Math.floor(
            (route.duration % 3600) / 60
          )}`}
        </p>}
        <Arrow
          direction={"left-to-right"}
          width={30}
          height={20}
          color={"rgba(255, 168, 0, 0.79)"}
        />
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
