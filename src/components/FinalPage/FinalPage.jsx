import "./FinalPage.css";
import FinalHeader from "../FinalPage/FinalHeader/FinalHeader";
import { useSelector } from "react-redux";
import RatingStars from "./RatingStars";
import { useNavigate } from "react-router-dom";
import FinalInstractions from "./FinalInstractions/FinalInstractions";

const FinalPage = () => {
  const navigate = useNavigate();
  const passengersFormsData = useSelector((state) => state.passengersFormsData);
  const payingClient = passengersFormsData.payingClient;
  const { selectedPriceAdult, selectedlPriceChild, selectedPriceComfort } =
    useSelector((state) => state.seatsSelected);

  const totalPrice =
    selectedPriceAdult + selectedlPriceChild + selectedPriceComfort;
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

              <FinalInstractions />

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
              <button onClick={() => navigate("/")}>
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalPage;
