import { capitalizeLettersInCityName } from "../../../../utils/helpers";
import AirConditioningIcon from "../../commonTicketsComponents/svgComponents/AirConditioningIcon";
import ExpressIcon from "../../commonTicketsComponents/svgComponents/ExpressIcon";
import WiFiIcon from "../../commonTicketsComponents/svgComponents/WiFiIcon";
import "./LastOrders.css";
import rubIcon from "../../../../data/img/rub-icon.png";

const LastOrderCard = ({ ticket }) => {
  return (
    <div className="LastOrderCard">
      <div className="LastOrderCard__stations">
        <div className="LastOrderCard__stations-from">
          <h6>
            {capitalizeLettersInCityName(ticket.departure.from.city.name)}
          </h6>
          <p> {ticket.departure.from.railway_station_name} вокзал</p>
        </div>
        <div className="LastOrderCard__stations-to">
          <h6>{capitalizeLettersInCityName(ticket.departure.to.city.name)}</h6>
          <p> {ticket.departure.to.railway_station_name} вокзал</p>
        </div>
      </div>

      <div className="LastOrderCard__info">
        <div className="LastOrderCard__info__comfort">
          {ticket.departure.have_air_conditioning && (
            <AirConditioningIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
          {ticket.departure.have_wifi && (
            <WiFiIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
          {ticket.departure.is_express && (
            <ExpressIcon height={20} color={"rgba(196, 196, 196, 1)"} />
          )}
        </div>

        <div className="LastOrderCard__info__price">
          <p>от</p>
          <span>{ticket.departure.min_price}</span>
          <img src={rubIcon} alt="rub" />
        </div>
      </div>
    </div>
  );
};

export default LastOrderCard;
