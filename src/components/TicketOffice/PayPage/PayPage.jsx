import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PayPage.css";

const PayPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "", // детский=child, взрослый=adult
    lastName: "",
    firstName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
    payingOnline: "",
    payingCash: "",
  });

  const handleNavigate = () => {
    navigate("/ticketoffice/confirmation");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    setFormData((prevFormData) => {
      if (name === "payingOnline") {
        return {
          ...prevFormData,
          payingOnline: checked,
          payingCash: !checked,
        };
      } else {
        return {
          ...prevFormData,
          payingOnline: !checked,
          payingCash: checked,
        };
      }
    });
  };

  const isFormValid = () => {
    // логика валидации
    return Object.values(formData).every((val) => val);
  };

  return (
    <div className="PayPage">
      <div className="PayPage__form">
        <div className="PayPage__form-title">Персональные данные</div>

        {/* Строка с ФИО */}
        <div className="PassengerForm__row name-row">
          <label>
            Фамилия
            <input
              className="PassengerForm-box"
              name="lastName"
              placeholder=""
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Имя
            <input
              className="PassengerForm-box"
              name="firstName"
              placeholder=""
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Отчество
            <input
              className="PassengerForm-box"
              name="middleName"
              placeholder=""
              value={formData.middleName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="PassengerForm__row document-row">
          <label>
            Контактный телефон
            <input
              className="PassengerForm-box document-number-box"
              name="documentNumber"
              placeholder="+7 ___ ___ __ __"
              value={formData.documentNumber}
              onChange={handleCheckbox}
            />
          </label>
        </div>

        <div className="PassengerForm__row document-row">
          <label>
            E-mail
            <input
              className="PassengerForm-box document-number-box"
              name="documentNumber"
              placeholder="inbox@gmail.com"
              value={formData.documentNumber}
              onChange={handleCheckbox}
            />
          </label>
        </div>

        <div className="PayPage__form-title">Персональные данные</div>

        <div>
          <div>
            <label>
              <input
                type="checkbox"
                name="payingOnline"
                checked={formData.payingOnline}
                onChange={handleCheckbox}
              />
              Онлайн
            </label>
            <div>
              <p>Банковской картой</p>
              <p>PayPal</p>
              <p>Visa QIWI Wallet</p>
            </div>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="payingCash"
                checked={formData.payingCash}
                onChange={handleCheckbox}
              />
              Наличными
            </label>
          </div>
        </div>
      </div>

      {/* Индикатор состояния и кнопка */}
      <div
        className={`PassengerForm__footer ${
          isFormValid() ? "footer_valid" : "footer_invalid"
        }`}
      >
        <div> {isFormValid() ? "Готово" : " "}</div>

        <button onClick={handleNavigate}>КУПИТЬ БИЛЕТЫ</button>
      </div>
    </div>
  );
};

export default PayPage;
