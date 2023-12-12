import { useState } from "react";
import "./NumberOfTickets.css";
//import { useDispatch } from "react-redux";

const NumberOfTickets = () => {
  //const dispatch = useDispatch();
  const [tabAdult, setTabAdult] = useState(0);
  const [tabTeen, setTabTeen] = useState(0);
  const [tabChild, setTabChild] = useState(0);

  const [activeTab, setActiveTab] = useState(null);

  const handleInputAdult = (num) => {
    if (num <= 5 && num >= 0) {
      setTabAdult(num);

    }
  };

  const handleInputTeen = (num) => {
    if (num <= 4 && num >= 0) {
      setTabTeen(num);

    }
  };

  const handleInputChild = (num) => {
    if (num >= 0) {
      setTabChild(num);

    }
  };

  const handleTabClick = (i) => {
    if (activeTab === i) {
      return null;
    } else {
      setActiveTab(i);
    }
  };

  return (
    <div className="NumberOfTickets">
      <div
        key={1}
        className={`NumberOfTickets__adult NumberOfTickets__section ${
          activeTab === 1 ? "NumberOfTickets__section_active" : ""
        } ${tabAdult > 0 ? "NumberOfTickets__section_positive" : ""}`}
        onClick={(e) => handleTabClick(1)}
      >
        <div className="NumberOfTickets__info">
          <p className="NumberOfTickets__info-text">Взрослых — </p>
          <input
            className="NumberOfTickets__info-input"
            name="tabAdult"
            value={tabAdult}
            placeholder="0"
            onChange={(e) => handleInputAdult(e.target.value)}
          />
        </div>
        <p className="NumberOfTickets__info-content">
          Можно добавить еще {5 - tabAdult} пассажиров
        </p>
      </div>
      <div
        key={2}
        onClick={(e) => handleTabClick(2)}
        className={`NumberOfTickets__adult NumberOfTickets__section ${
          activeTab === 2 ? "NumberOfTickets__section_active" : ""
        } ${tabTeen > 0 ? "NumberOfTickets__section_positive" : ""}`}
      >
        <div className="NumberOfTickets__info">
          <p className="NumberOfTickets__info-text">Детских — </p>
          <input
            className="NumberOfTickets__info-input"
            name="tabTeen"
            value={tabTeen}
            placeholder="0"
            onChange={(e) => handleInputTeen(e.target.value)}
          />
        </div>
        <p className="NumberOfTickets__info-content">
          Можно добавить еще {4 - tabTeen} детей до 10 лет.Свое место в вагоне,
          как у взрослых, но дешевле в среднем на 50-65%
        </p>
      </div>
      <div
        key={3}
        onClick={(e) => handleTabClick(3)}
        className={`NumberOfTickets__adult NumberOfTickets__section ${
          activeTab === 3 ? "NumberOfTickets__section_active" : ""
        } ${tabChild > 0 ? "NumberOfTickets__section_positive" : ""}`}
      >
        <div className="NumberOfTickets__info">
          <p className="NumberOfTickets__info-text">Детских «без места» — </p>
          <input
            className="NumberOfTickets__info-input"
            name="tabChild"
            value={tabChild}
            placeholder="0"
            onChange={(e) => handleInputChild(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberOfTickets;
