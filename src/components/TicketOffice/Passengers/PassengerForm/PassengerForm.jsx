import "./PassengerForm.css";

import { useState } from "react";

const PassengerForm = () => {
  const [formData, setFormData] = useState({
    type: "", // детский=child, взрослый=adult
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "", // M или Ж
    birthDate: "",
    mobility: false, // ограниченная подвижность
    documentType: "",
    documentNumber: "",
  });

  const handleNextPassenger = () => {
    console.log(formData)
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid = () => {
    // логика валидации
    return Object.values(formData).every((val) => val);
  };

  return (
    <div className="PassengerForm">
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
              onClick={() => setFormData({ ...formData, gender: "M" })}
            >
              М
            </button>
            <button
              type="button"
              className={`PassengerForm-gender-button ${
                formData.gender === "Ж" ? "gender-button_selected" : ""
              }`}
              onClick={() => setFormData({ ...formData, gender: "Ж" })}
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
            placeholder="12 символов"
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
        <div> {isFormValid() ? "Готово" : " "}</div>

        <button className="PassengerForm-box submit-button" onClick={handleNextPassenger}>
          Следующий пассажир
        </button>
      </div>
    </div>
  );
};

export default PassengerForm;
