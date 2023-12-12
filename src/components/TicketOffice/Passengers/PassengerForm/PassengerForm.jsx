import "./PassengerForm.css";

import { useState } from "react";

const PassengerForm = () => {
  const [formData, setFormData] = useState({
    type: "", // детский=teen, взрослый=adult, детский без места=child
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "", // M или Ж
    birthDate: "",
    mobility: false, // ограниченная подвижность
    documentType: "",
    documentNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid = () => {
    // Проверка валидности формы
    // Здесь должна быть ваша логика валидации
    return Object.values(formData).every((val) => val);
  };

  return (
    <div
      className={`passenger-form ${
        isFormValid() ? "passenger-form--valid" : "passenger-form--invalid"
      }`}
    >
      {/* Строка выбора типа пассажира */}
      <div className="passenger-form__row">
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Выберите тип</option>
          <option value="adult">Взрослый</option>
          <option value="child">Детский</option>
        </select>
      </div>

      {/* Строка с ФИО */}
      <div className="passenger-form__row">
        <input
          name="lastName"
          placeholder="Фамилия"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          name="firstName"
          placeholder="Имя"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="middleName"
          placeholder="Отчество"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      {/* Строка с выбором пола и датой рождения */}
      <div className="passenger-form__row">
        <button
          type="button"
          className={`gender-button ${
            formData.gender === "M" ? "gender-button--selected" : ""
          }`}
          onClick={() => setFormData({ ...formData, gender: "M" })}
        >
          М
        </button>
        <button
          type="button"
          className={`gender-button ${
            formData.gender === "Ж" ? "gender-button--selected" : ""
          }`}
          onClick={() => setFormData({ ...formData, gender: "Ж" })}
        >
          Ж
        </button>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </div>

      {/* Чекбокс ограниченной подвижности */}
      <div className="passenger-form__row">
        <label>
          <input
            type="checkbox"
            name="mobility"
            checked={formData.mobility}
            onChange={handleChange}
          />
          Ограниченная подвижность
        </label>
      </div>

      <hr />

      {/* Строка с типом и номером документа */}
      <div className="passenger-form__row">
        <div className="passenger-form__row">
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
          >
            <option value="">Выберите тип документа</option>
            <option value="passport">Паспорт</option>
            <option value="birthCertificate">Свидетельство о рождении</option>
          </select>
          <input
            name="documentNumber"
            placeholder="Номер"
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </div>
        <input
          name="documentNumber"
          placeholder="Номер"
          value={formData.documentNumber}
          onChange={handleChange}
        />
      </div>

      {/* Индикатор состояния и кнопка */}
      <div className="passenger-form__footer">
        <div
          className={`status-indicator ${
            isFormValid()
              ? "status-indicator--valid"
              : "status-indicator--invalid"
          }`}
        >
          {isFormValid() ? "Готово" : "Не готово"}
        </div>
        <button>Следующий пассажир</button>
      </div>
    </div>
  );
};

export default PassengerForm;
