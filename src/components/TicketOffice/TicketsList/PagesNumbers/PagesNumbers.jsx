import { useEffect, useState } from "react";
import "./PagesNumbers.css";
import { useDispatch } from "react-redux";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";

const PagesNumbers = ({ numberOfPages }) => {
  const dispatch = useDispatch();

  const numbersArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  const [activeNumberPage, setActiveNumberPage] = useState(1);

  useEffect(() => {
    dispatch(setFieldFilters(["currentPage", activeNumberPage]));
  }, [activeNumberPage, dispatch]);

  const handleDecrease = () => {
    if (activeNumberPage > 1) {
      setActiveNumberPage(activeNumberPage - 1);
    }
  };

  const handleIncrease = () => {
    if (activeNumberPage < numberOfPages) {
      setActiveNumberPage(activeNumberPage + 1);
    }
  };

  const handleClickNumber = (number) => {
    setActiveNumberPage(number);
  };

  return (
    <div className="PagesNumbers">
      <button onClick={handleDecrease}>&#8249;</button>
      {numbersArray.map((number) => (
        <button
          className={number === activeNumberPage ? "activeNumberPage" : ""}
          key={number}
          onClick={() => handleClickNumber(number)}
        >
          {number}
        </button>
      ))}
      <button onClick={handleIncrease}>&#8250;</button>
    </div>
  );
};

export default PagesNumbers;
