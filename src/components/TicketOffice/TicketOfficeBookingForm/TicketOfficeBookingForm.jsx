import "./TicketOfficeBookingForm.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InputCity from "../../commonComponents/InputCity/InputCity";
import InputDate from "../../commonComponents/InputDate/InputDate";

import {
  setDateEnd,
  setDateStart,
  setFromCityId,
  setFromCityName,
  setToCityId,
  setToCityName,
} from "../../../redux/ticketsFitersSlice";
import { BASE_URL } from "../../../utils/constants";
import { ROUTES } from "../../../utils/routes";

export default function TicketOfficeBookingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const [formData, setFormData] = useState({
    fromCityName: filters.fromCityName,
    toCityName: filters.toCityName,
    dateStart: filters.dateStart,
    dateEnd: filters.dateEnd,
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
    //e.preventDefault();
    getFromCityId(formData.fromCityName);
    getToCityId(formData.toCityName);

    dispatch(setFromCityName(formData.fromCityName));
    dispatch(setToCityName(formData.toCityName));
    dispatch(setDateStart(formData.dateStart));
    dispatch(setDateEnd(formData.dateEnd));

    navigate(ROUTES.TICKETS);
  };

  return (
    <div className="TicketOfficeBookingForm">
      <form
        className="TicketOfficeBookingForm__Form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="TicketOfficeBookingForm__Form-container">
          <label className="TicketOfficeBookingForm_Form-direction">
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

          <label className="TicketOfficeBookingForm__Form-date">
            Дата
            <div>
              <InputDate
                direction={"Откуда"}
                initialDate={formData.dateStart}
                setFormData={setFormData}
              />
              <InputDate
                direction={"Куда"}
                initialDate={formData.dateEnd}
                setFormData={setFormData}
              />
            </div>
          </label>
        </div>

        <div className="TicketOfficeBookingForm__Form-btn">
          <button type="submit">найти билеты</button>
        </div>
      </form>
    </div>
  );
}
