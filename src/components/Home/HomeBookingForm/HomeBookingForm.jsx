import "./HomeBookingForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputCity from "../../commonComponents/InputCity/InputCity";
import InputDate from "../../commonComponents/InputDate/InputDate";

import { setFieldFilters } from "../../../redux/ticketsFitersSlice";
import { useLazyGetCityIdQuery } from "../../../redux/apSlice";

export default function HomeBookingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [trigger, { isLoading }] = useLazyGetCityIdQuery();

  const [formData, setFormData] = useState({
    fromCityName: "",
    toCityName: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Обработка запроса для fromCityName
    try {
      const firstResponse = await trigger({
        cityName: formData.fromCityName,
      }).unwrap();
      //console.log("First city response:", firstResponse[0]._id);
      dispatch(setFieldFilters(["fromCityId", firstResponse[0]._id || ""]));
    } catch (error) {
      //console.error('Error fetching fromCityId:', error);
      dispatch(setFieldFilters(["fromCityId", ""]));
    }

    // Обработка запроса для toCityName
    try {
      const secondResponse = await trigger({
        cityName: formData.toCityName,
      }).unwrap();
      //console.log("Second city response:", secondResponse[0]._id);
      dispatch(setFieldFilters(["toCityId", secondResponse[0]._id || ""]));
    } catch (error) {
      //console.error('Error fetching toCityId:', error);
      dispatch(setFieldFilters(["toCityId", ""]));
    }

    Object.entries(formData).forEach((key, value) => {
      dispatch(setFieldFilters(key, value));
    });

    if (!isLoading) navigate("/tickets");
  };

  return (
    <div className="HomeBookingForm">
      <form className="HomeBookingForm__Form" onSubmit={(e) => handleSubmit(e)}>
        <label className="HomeBookingForm_Form-direction">
          Направление
          <div>
            <InputCity
              direction={"Откуда"}
              initialCity={formData.fromCityName}
              setFormData={setFormData}
            />
            <InputCity
              direction={"Куда"}
              initialCity={formData.toCityName}
              setFormData={setFormData}
            />
          </div>
        </label>

        <label className="HomeBookingForm__Form-date">
          Дата
          <div>
            <InputDate
              direction={"Откуда"}
              initialCity={formData.dateStart}
              setFormData={setFormData}
            />
            <InputDate
              direction={"Куда"}
              initialCity={formData.dateEnd}
              setFormData={setFormData}
            />
          </div>
        </label>

        <div className="HomeBookingForm__Form-btn">
          <button type="submit">найти билеты</button>
        </div>
      </form>
    </div>
  );
}
