import { useRef, useState } from "react";
import "./NumberOfTickets.css";
import { useDispatch } from "react-redux";
import {
  setAdultPassengers,
  setChildPassengers,
  setWithOutSeats,
} from "../../../../redux/ticketsSlice";

const NumberOfTickets = ({ direction }) => {
  const inputRefAdult = useRef(null);
  const inputRefTeen = useRef(null);
  const inputRefChild = useRef(null);

  const dispatch = useDispatch();
  const [tabAdult, setTabAdult] = useState("");
  const [tabTeen, setTabTeen] = useState("");
  const [tabChild, setTabChild] = useState("");

  const [activeTab, setActiveTab] = useState(null);

  const handleInputAdult = (e) => {
    const num = e.target.value;
    if (num <= 5 && num >= 0) {
      setTabAdult(num);
      dispatch(setAdultPassengers({ value: num, direction: direction }));
    }
  };

  const handleInputTeen = (e) => {
    const num = e.target.value;
    if (num <= 4 && num >= 0) {
      setTabTeen(num);
      dispatch(setChildPassengers({ value: num, direction: direction }));
    }
  };

  const handleInputChild = (e) => {
    const num = e.target.value;
    if (num >= 0) {
      setTabChild(num);
      dispatch(setWithOutSeats({ value: num, direction: direction }));
    }
  };

  const handleTabClick = (i) => {
    setActiveTab(i);
    if (i === 1 && inputRefAdult.current) {
      inputRefAdult.current.focus();
    }
    if (i === 2 && inputRefTeen.current) {
      inputRefTeen.current.focus();
    }
    if (i === 3 && inputRefChild.current) {
      inputRefChild.current.focus();
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
            type="number"
            ref={inputRefAdult}
            className="NumberOfTickets__info-input"
            value={tabAdult}
            placeholder="0"
            onChange={handleInputAdult}
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
            type="number"
            ref={inputRefTeen}
            className="NumberOfTickets__info-input"
            value={tabTeen}
            placeholder="0"
            onChange={handleInputTeen}
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
            type="number"
            ref={inputRefChild}
            className="NumberOfTickets__info-input"
            value={tabChild}
            placeholder="0"
            onChange={handleInputChild}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberOfTickets;
