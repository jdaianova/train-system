import "./SeatsCard.css";
import SeatsRow from "./SeatsRow";

const SeatsCard = ({ arrival }) => {
  console.log(arrival);
  return (
    <div className="SeatsCard">
      <SeatsRow title={"Сидячий"} amount={55} price={2121} />
      <SeatsRow title={"Плацкарт"} amount={21} price={1950} />
      <SeatsRow title={"Купе"} amount={2} price={777} />
      <SeatsRow title={"Люкс"} amount={112} price={2000} />
    </div>
  );
};

export default SeatsCard;
