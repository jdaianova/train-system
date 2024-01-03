import "./FinalPage.css";
import FinalHeader from "../FinalPage/FinalHeader/FinalHeader";
import { useSelector } from "react-redux";
import RatingStars from "./RatingStars";

const FinalPage = () => {
  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const payingClient = passengersFormsData.payingClient;

  const totalPrice = 1000;
  const userName = `${payingClient.firstName} ${payingClient.middleName}`;
  const orderNumber = "285АА";

  return (
    <>
      <FinalHeader />
      <div className="FinalPage">
        <div className="FinalPage__main">
          <h2>Благодарим Вас за заказ!</h2>
          <div className="FinalPage__main-window">
            <div className="FinalPage__main-window__title">
              <p>№Заказа {orderNumber}</p>
              <span>
                сумма <strong>{totalPrice}</strong> P
              </span>
            </div>

            <div className="FinalPage__main-window__instructions">
              window__instructions
            </div>

            <div className="FinalPage__main-window__letter">
              <h6>{userName}!</h6>
              <p>
                Ваш заказ успешно оформлен. В ближайшее время с вами свяжется
                наш оператор для подтверждения.
              </p>
              <span>
                Благодарим Вас за оказанное доверие и желаем приятного
                путешествия!
              </span>
            </div>

            <div className="FinalPage__main-window__footer">
              <RatingStars />
              <button>Вернуться на главную</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalPage;
