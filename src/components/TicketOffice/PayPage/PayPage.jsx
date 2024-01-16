import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PayPage.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePayingClient } from "../../../redux/passengersFormsData";

const PayPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payingClient } = useSelector((state) => state.passengersFormsData);

  const defaultFormData = {
    lastName: "",
    firstName: "",
    middleName: "",
    phone: "",
    email: "",
    payingCash: false,
    payingOnline: false,
  };

  const [formData, setFormData] = useState({
    ...defaultFormData,
    ...payingClient,
  });

  const [formValidation, setFormValidation] = useState({
    lastNameValid: true,
    firstNameValid: true,
    middleNameValid: true,
    phoneValid: true,
    emailValid: true,
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

    setFormValidation((prev) => ({
      ...prev,
      [`${name}Valid`]: validateField(name, value),
    }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        payingOnline: name === "payingOnline" ? checked : false,
        payingCash: name === "payingCash" ? checked : false,
      };
      return updatedFormData;
    });
  };

  useEffect(() => {
    dispatch(updatePayingClient(formData));
  }, [formData, dispatch]);

  const isFormValid = () => {
    // Проверка на отсутствие цифр и спецсимволов в строке и что строка не пустая
    const isValidName = (name) =>
      /^[A-Za-zА-Яа-яЁё\s]+$/.test(name) && name.trim() !== "";

    // Проверка формата телефона и что он не пустой
    const isValidPhone = (phone) =>
      /^\+7\d{10}$/.test(phone) && phone.trim() !== "";

    // Проверка формата электронной почты и что она не пустая
    const isValidEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.trim() !== "";

    // Проверка, что хотя бы один из способов оплаты выбран
    const isPaymentSelected = formData.payingCash || formData.payingOnline;

    return (
      isValidName(formData.lastName) &&
      isValidName(formData.firstName) &&
      isValidName(formData.middleName) &&
      isValidPhone(formData.phone) &&
      isValidEmail(formData.email) &&
      isPaymentSelected
    );
  };

  const validateField = (name, value) => {
    switch (name) {
      case "lastName":
      case "firstName":
      case "middleName":
        return /^[A-Za-zА-Яа-яЁё\s]+$/.test(value) && value.trim() !== "";
      case "phone":
        return /^\+7\d{10}$/.test(value) && value.trim() !== "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.trim() !== "";
      default:
        return true;
    }
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
              className={`PassengerForm-box ${
                !formValidation.lastNameValid ? "invalid" : ""
              }`}
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Имя
            <input
              className={`PassengerForm-box ${
                !formValidation.firstNameValid ? "invalid" : ""
              }`}
              name="firstName"
              placeholder=""
              value={formData.firstName || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Отчество
            <input
              className={`PassengerForm-box ${
                !formValidation.middleNameValid ? "invalid" : ""
              }`}
              name="middleName"
              placeholder=""
              value={formData.middleName || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="PassengerForm__row document-row">
          <label>
            Контактный телефон
            <input
              className={`PassengerForm-box phone-number-box ${
                !formValidation.phoneValid ? "invalid" : ""
              }`}
              name="phone"
              placeholder="+7 ___ ___ __ __"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="PassengerForm__row document-row">
          <label>
            E-mail
            <input
              className={`PassengerForm-box email-box ${
                !formValidation.emailValid ? "invalid" : ""
              }`}
              name="email"
              placeholder="inbox@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="PayPage__form-title">Способ оплаты</div>

        <div>
          <div className="PassengerForm-online-row">
            <label
              className={`PassengerForm-pay-checkbox-title ${
                formData.payingOnline ? "active" : "inactive"
              }`}
            >
              <input
                className="PassengerForm-pay-checkbox"
                type="checkbox"
                name="payingOnline"
                checked={formData.payingOnline}
                onChange={handleCheckbox}
              />
              Онлайн
            </label>
            <div className="PassengerForm-pay-box-titles">
              <p>Банковской картой</p>
              <p>PayPal</p>
              <p>Visa QIWI Wallet</p>
            </div>
          </div>

          <div className="PassengerForm-cash-row ">
            <label
              className={`PassengerForm-pay-checkbox-title ${
                formData.payingCash ? "active" : "inactive"
              }`}
            >
              <input
                className="PassengerForm-pay-checkbox"
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
      <div className="PassengerForm__footer">
        <button
          className={`submit-btn ${
            !isFormValid() ? "disabled-btn" : "enabled-btn"
          }`}
          onClick={handleNavigate}
          disabled={!isFormValid()}
        >
          КУПИТЬ БИЛЕТЫ
        </button>
      </div>
    </div>
  );
};

export default PayPage;
