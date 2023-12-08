import "./HomeBookingForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import InputCity from "../../commonComponents/InputCity/InputCity";
import InputDate from "../../commonComponents/InputDate/InputDate";

import { ROUTES } from "../../../utils/routes";
import {
  setDateEnd,
  setDateStart,
  setFromCityId,
  setFromCityName,
  setToCityId,
  setToCityName,
} from "../../../redux/ticketsFitersSlice";
import { BASE_URL } from "../../../utils/constants";

export default function HomeBookingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fromCityName: "",
    toCityName: "",
    dateStart: "",
    dateEnd: "",
  });

  const getFromCityId = async (cityName) => {
    try {
      const cityUrl = `${BASE_URL}/routes/cities?name=${encodeURI(cityName)}`;
      const response = await axios.get(cityUrl);
      if (
        typeof response.data !== "undefined" &&
        response.data[0].name.toLowerCase() === cityName.toLowerCase()
      ) {
        dispatch(setFromCityId(response.data[0]._id));
      } else {
        dispatch(setFromCityId(""));
      }
    } catch (error) {
      //alert(error);
    }
  };

  const getToCityId = async (cityName) => {
    try {
      const cityUrl = `${BASE_URL}/routes/cities?name=${encodeURI(cityName)}`;
      const response = await axios.get(cityUrl);
      if (
        typeof response.data !== "undefined" &&
        response.data[0].name.toLowerCase() === cityName.toLowerCase()
      ) {
        dispatch(setToCityId(response.data[0]._id));
      } else {
        dispatch(setToCityId(""));
      }
    } catch (error) {
      //alert(error);
    }
  };

  const handleSubmit = (e) => {
    getFromCityId(formData.fromCityName);
    getToCityId(formData.toCityName);

    dispatch(setFromCityName(formData.fromCityName));
    dispatch(setToCityName(formData.toCityName));
    dispatch(setDateStart(formData.dateStart));
    dispatch(setDateEnd(formData.dateEnd));

    navigate(ROUTES.TICKETS);
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
