import "./SeatsCard.css";
import SeatsRow from "./SeatsRow";

const SeatsCard = ({ info }) => {

  return (
    <div className="SeatsCard">
      {info?.have_fourth_class && (
        <SeatsRow
          title={"Сидячий"}
          amount={info.available_seats_info.fourth}
          price={info.price_info.fourth.bottom_price}
        />
      )}
      {info?.have_third_class && (
        <SeatsRow
          title={"Плацкарт"}
          amount={info.available_seats_info.third}
          price={info.price_info.third.bottom_price}
        />
      )}
      {info?.have_second_class && (
        <SeatsRow
          title={"Купе"}
          amount={info.available_seats_info.second}
          price={info.price_info.second.bottom_price}
        />
      )}
      {info?.have_first_class && (
        <SeatsRow
          title={"Люкс"}
          amount={info.available_seats_info.first}
          price={info.price_info.first.bottom_price}
        />
      )}
    </div>
  );
};

export default SeatsCard;
