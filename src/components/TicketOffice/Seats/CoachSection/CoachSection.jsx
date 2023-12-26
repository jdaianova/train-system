import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetSeatsQuery } from "../../../../redux/apSlice";
import "./CoachSection.css";
import CoachInfo from "./CoachInfo/CoachInfo";

const CoachSection = ({ direction, typeOfWagon }) => {
  const seatsFilters = useSelector((state) => state.seatsFilters);
  const { data: coaches } = useGetSeatsQuery(seatsFilters[direction]);
  const [selectedCoachId, setSelectedCoachId] = useState(null);
  //const [selectedCoachName, setSelectedCoachName] = useState(null);

  useEffect(() => {
    if (coaches && typeOfWagon) {
      const filteredCoaches = coaches.filter(
        (coach) => coach.coach.class_type === typeOfWagon
      );
      if (filteredCoaches.length > 0) {
        setSelectedCoachId(filteredCoaches[0].coach._id);
        //setSelectedCoachName(filteredCoaches[0].coach.name);
      }
    }
  }, [coaches, typeOfWagon]);

  const handleSelectCoach = (coach) => {
    setSelectedCoachId(coach.coach._id);
    //setSelectedCoachName(coach.coach.name);
  };

  const filteredCoaches = coaches?.filter(
    (coach) => coach.coach.class_type === typeOfWagon
  );

  return (
    <>
      {filteredCoaches?.length > 0 && (
        <div className="CoachSection">
          <div className="CoachSection__info">
            <div className="CoachSection__info-top">
              <div className="CoachSection__info-coach-numbers">
                <p>Вагоны</p>
                {filteredCoaches.map((coach, index) => (
                  <button
                    key={coach.coach._id}
                    onClick={() => handleSelectCoach(coach)}
                    style={{
                      color:
                        coach.coach._id === selectedCoachId
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {coach.coach.name}
                  </button>
                ))}
              </div>
              <p>Нумерация вагонов начинается с головы поезда</p>
            </div>
          </div>
          <div className="CoachSection__seats">
            {coaches && selectedCoachId && (
              <CoachInfo
                currentCoach={coaches.find(
                  (coach) => coach.coach._id === selectedCoachId
                )}
                direction={direction}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CoachSection;
