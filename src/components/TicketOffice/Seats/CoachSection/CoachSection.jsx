import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetSeatsQuery } from "../../../../redux/apSlice";
import "./CoachSection.css";
import CoachInfo from "./CoachInfo/CoachInfo";

const CoachSection = () => {
  const seats = useSelector((state) => state.seats);
  const { data: coaches } = useGetSeatsQuery(seats);
  const [selectedCoachId, setSelectedCoachId] = useState(null);
  const [selectedCoachNum, setSelectedCoachNum] = useState(null);

  const handleSelectCoach = (coach, index) => {
    setSelectedCoachId(coach.coach._id);
    setSelectedCoachNum(index);
  };

  return (
    <div className="CoachSection">
      <div className="CoachSection__info">
        <div className="CoachSection__info-top">
          <div className="CoachSection__info-coach-numbers">
            <p>Вагоны</p>
            {coaches &&
              coaches.map((coach, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectCoach(coach, index)}
                  style={{
                    color:
                      coach.coach._id === selectedCoachId
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(0, 0, 0, 1)",
                  }}
                >
                  {/* {coach.coach.name} */}
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </button>
              ))}
          </div>
          <p>Нумерация вагонов начинается с головы поезда</p>
        </div>
      </div>
      <div className="CoachSection__seats">
        {coaches && selectedCoachId && (
          <CoachInfo
            currentCoach={coaches.find((coach) => coach.coach._id === selectedCoachId)}
            selectedCoachNum={selectedCoachNum+1}
          />
        )}
      </div>
    </div>
  );
};

export default CoachSection;
