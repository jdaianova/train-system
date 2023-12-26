import "./CoachInfo.css";
import SeatsLayout from "../SeatsLayout/SeatsLayout";
import ComfortOptions from "./ComfortOptions/ComfortOptions";

const CoachInfo = ({ currentCoach, direction }) => {
  const { coach, seats } = currentCoach;
  if (!coach) return null;

  return (
    <div className="CoachInfo">
      <div className="CoachInfo__details">
        <div className="CoachInfo__details__coach-number ">
          <p>{currentCoach.coach.name}</p>
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
            <ComfortOptions coachFilters={coach} direction={direction}/>
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
        <SeatsLayout coach={coach} seats={seats} direction={direction} />
      </div>
    </div>
  );
};

export default CoachInfo;
