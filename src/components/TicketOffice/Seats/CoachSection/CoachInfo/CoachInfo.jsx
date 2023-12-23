import "./CoachInfo.css";
import AirConditioningIcon from "../../../commonTicketsComponents/svgComponents/AirConditioningIcon";
import WiFiIcon from "../../../commonTicketsComponents/svgComponents/WiFiIcon";
import LinenIcon from "../../../commonTicketsComponents/svgComponents/LinenIcon";
import FoodIcon from "../../../commonTicketsComponents/svgComponents/FoodIcon";
import Tooltip from "../../../../commonComponents/Tooltip/Tooltip";
import SeatsLayout from "../SeatsLayout/SeatsLayout";

const CoachInfo = ({ currentCoach, selectedCoachNum }) => {
  const { coach, seats } = currentCoach;
  if (!coach) return null;
  console.log(coach, seats);
  //console.log(coach.top_price)

  return (
    <div className="CoachInfo">
      <div className="CoachInfo__details">
        <div className="CoachInfo__details__coach-number ">
          <p>
            {selectedCoachNum < 10 ? `0${selectedCoachNum} ` : selectedCoachNum}
          </p>
          <span>вагон</span>
        </div>

        <div className="CoachInfo__details__seats-info ">
          <div className="CoachInfo__details__seats-info__title ">
            <p>
              Места <strong>{coach.available_seats}</strong>
            </p>
            <p>Стоимость</p>
            <p>Обслуживание ФПК</p>
          </div>

          <div className="CoachInfo__details__seats-info__inforow ">
            <div className="CoachInfo__details__seats-info__inforow-text">
              Верхние{" "}
              <strong>
                {seats.filter((item) => item.index % 2 === 0).length || 0}
              </strong>
            </div>
            <div className="CoachInfo__details__seats-info__inforow-text">
              <strong>{coach.top_price} </strong>P
            </div>

            <div className="CoachInfo__details__comfort">
              <div
                className="CoachInfo__details__comfort-icon"
                style={{
                  backgroundColor: coach.have_air_conditioning
                    ? "rgba(255, 168, 0, 1)"
                    : "white",
                  border: coach.have_air_conditioning
                    ? "none"
                    : "1px solid rgba(41, 41, 41, 1)",
                  borderRadius: "5px",
                }}
              >
                <Tooltip tooltipText="кондиционер">
                  <AirConditioningIcon
                    height={20}
                    color={coach.have_air_conditioning ? "white" : "black"}
                  />
                </Tooltip>
              </div>

              <div
                className="CoachInfo__details__comfort-icon"
                style={{
                  backgroundColor: coach.have_wifi
                    ? "rgba(255, 168, 0, 1)"
                    : "white",
                  border: coach.have_wifi
                    ? "none"
                    : "1px solid rgba(41, 41, 41, 1)",
                  borderRadius: "5px",
                }}
              >
                <Tooltip tooltipText="WI-FI">
                  <WiFiIcon
                    height={20}
                    color={coach.have_wifi ? "white" : "black"}
                  />
                </Tooltip>
              </div>

              <div
                className="CoachInfo__details__comfort-icon"
                style={{
                  backgroundColor: coach.is_linens_included
                    ? "rgba(255, 168, 0, 1)"
                    : "white",
                  border: coach.is_linens_included
                    ? "none"
                    : "1px solid rgba(41, 41, 41, 1)",
                  borderRadius: "5px",
                }}
              >
                <Tooltip tooltipText="белье">
                  <LinenIcon
                    height={20}
                    color={coach.is_linens_included ? "white" : "black"}
                  />
                </Tooltip>
              </div>

              <div
                className="CoachInfo__details__comfort-icon"
                style={{
                  backgroundColor: false ? "rgba(255, 168, 0, 1)" : "white",
                  border: false ? "none" : "1px solid rgba(41, 41, 41, 1)",
                  borderRadius: "5px",
                }}
              >
                <Tooltip tooltipText="питание">
                <FoodIcon height={20} color={false ? "white" : "black"} />
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="CoachInfo__details__seats-info__inforow ">
            <div className="CoachInfo__details__seats-info__inforow-text">
              Нижние{" "}
              <strong>
                {coach.available_seats -
                  seats.filter((item) => item.index % 2 === 0).length || 0}
              </strong>
            </div>
            <div className="CoachInfo__details__seats-info__inforow-text">
              <strong>{coach.bottom_price} </strong>P
            </div>
          </div>
        </div>
      </div>

      <div className="CoachInfo__seats">
         <SeatsLayout seats={seats} typeOfCoach={coach.class_type}/>
      </div>
    </div>
  );
};

export default CoachInfo;
