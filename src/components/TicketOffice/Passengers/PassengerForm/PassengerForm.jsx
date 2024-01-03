import "./PassengerForm.css";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassengerForm } from "../../../../redux/passengersFormsData";

const PassengerForm = ({ idPassenger }) => {
  const [firstRender, setFirstRender] = useState(true);

  const dispatch = useDispatch();
  const formDataRedux = useSelector((state) =>
    state.passengersFormsData.passengersFormsData.find(
      (form) => form.idPassenger === idPassenger
    )
  );

  const [formData, setFormData] = useState({
    idPassenger: idPassenger,
    type: "adult", // детский=child, взрослый=adult
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "", // M или Ж
    birthDate: "",
    mobility: false, // ограниченная подвижность
    documentType: "passport", // passport or birthCertificate
    documentNumber: "",
    isValid: false,
  });

  useEffect(() => {
    if (formDataRedux && firstRender) {
      setFormData(formDataRedux);
      setFirstRender(false);
    }
  }, [formDataRedux, firstRender]);

  const handleNextPassenger = (e) => {
    e.preventDefault();
    // не понимаю из дизвйна, что должно происходить
  };

  const isFormValid = useCallback(() => {
    // проверка имени, фамилии и отчества (только буквы)
    const nameRegex = /^[а-яА-Яa-zA-Z]+$/;

    const isNameValid =
      nameRegex.test(formData.firstName) && formData.firstName !== "";
    const isLastNameValid =
      nameRegex.test(formData.lastName) && formData.lastName !== "";
    const isMiddleNameValid =
      formData.middleName === "" || nameRegex.test(formData.middleName); // Отчество может быть пустым

    // Проверка выбора пола
    const isGenderSelected = formData.gender === "M" || formData.gender === "Ж";

    // Проверка даты рождения
    const isBirthDateValid = formData.birthDate !== "";

    // Проверка номера документа (простая проверка на непустоту)
    const passportNumberRegex = /^\d{12}$/;
    const birthCertificateNumberRegex = /^\d{6}$/;
    const isDocumentNumberValid =
      (passportNumberRegex.test(formData.documentNumber) &&
        formData.documentType === "passport") ||
      (birthCertificateNumberRegex.test(formData.documentNumber) &&
        formData.documentType === "birthCertificate");

    // Итоговая проверка
    const valid =
      isNameValid &&
      isLastNameValid &&
      isMiddleNameValid &&
      isGenderSelected &&
      isBirthDateValid &&
      isDocumentNumberValid;

    return valid;
  }, [formData]);

  useEffect(() => {
    const valid = isFormValid();
    dispatch(
      updatePassengerForm({ name: "isValid", value: valid, idPassenger })
    );
  }, [dispatch, idPassenger, isFormValid]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    dispatch(updatePassengerForm({ name, value, idPassenger }));
  };

  const handleGenderChange = (gender) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender,
    }));
    dispatch(
      updatePassengerForm({ name: "gender", value: gender, idPassenger })
    );
  };

  return (
    <form className="PassengerForm">
      {/* Строка выбора типа пассажира */}
      <div className="PassengerForm__row">
        <select
          className="PassengerForm-box"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="adult">Взрослый</option>
          <option value="child">Детский</option>
        </select>
      </div>

      {/* Строка с ФИО */}
      <div className="PassengerForm__row name-row">
        <label>
          Фамилия
          <input
            type="text"
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
            type="text"
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
            type="text"
            className="PassengerForm-box"
            name="middleName"
            placeholder=""
            value={formData.middleName}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Строка с выбором пола и датой рождения */}
      <div className="PassengerForm__row">
        <label>
          Пол
          <div className="gender-row">
            <button
              type="button"
              className={`PassengerForm-gender-button ${
                formData.gender === "M" ? "gender-button_selected" : ""
              }`}
              onClick={() => handleGenderChange("M")}
            >
              М
            </button>
            <button
              type="button"
              className={`PassengerForm-gender-button ${
                formData.gender === "Ж" ? "gender-button_selected" : ""
              }`}
              onClick={() => handleGenderChange("Ж")}
            >
              Ж
            </button>
          </div>
        </label>

        <label>
          Дата рождения
          <input
            className="PassengerForm-box"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Чекбокс ограниченной подвижности */}
      <div className="PassengerForm__mobility-row">
        <label>
          <input
            className="mobility-box"
            type="checkbox"
            name="mobility"
            checked={formData.mobility}
            onChange={handleChange}
          />
          ограниченная подвижность
        </label>
      </div>

      {/* Строка с типом и номером документа */}
      <div className="PassengerForm__row document-row">
        <label>
          Тип документа
          <select
            className="PassengerForm-box document-type-box"
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
          >
            <option value="passport">Паспорт</option>
            <option value="birthCertificate">Свидетельство о рождении</option>
          </select>
        </label>
        <label>
          Номер
          <input
            className="PassengerForm-box document-number-box"
            name="documentNumber"
            placeholder={formData.documentType==='passport' ? '12 цифр' : "6 цифр"}
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Индикатор состояния и кнопка */}
      <div
        className={`PassengerForm__footer ${
          isFormValid() ? "footer_valid" : "footer_invalid"
        }`}
      >
        <div> {isFormValid() ? "Готово" : ""}</div>

        <button
          className="PassengerForm-box submit-button"
          onClick={handleNextPassenger}
        >
          Следующий пассажир
        </button>
      </div>
    </form>
  );
};

export default PassengerForm;
