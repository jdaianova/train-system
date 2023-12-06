import "./HomeBookingForm.css";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../../utils/routes";
import { useDispatch } from "react-redux";
import axios from "axios";

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
import { buildUrlCityId } from "../../../utils/helpers";

export default function HomeBookingForm() {
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fromCityName: "",
    toCityName: "",
    fromCityId: "",
    toCityId: "",
    dateStart: " ",
    dateEnd: " ",
  });

  async function getfromCityId() {
    const url = buildUrlCityId(formData.fromCityName);
    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      setFormData({...formData, fromCityId:response.data[0]._id});
    } catch (error) {
      setFormData({...formData, fromCityId:''});
      alert(error);
    }
  }

  async function getToCityId() {
    const url = buildUrlCityId(formData.toCityName);
    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      setFormData({...formData, toCityId:response.data[0]._id});
    } catch (error) {
      setFormData({...formData, toCityId:''});
      alert(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    await getfromCityId();
    await getToCityId();

    dispatch(setFromCityName(formData.fromCityName));
    dispatch(setToCityName(formData.toCityName));
    dispatch(setFromCityId(formData.fromCityId));
    dispatch(setToCityId(formData.toCityId));
    dispatch(setDateStart(formData.dateStart));
    dispatch(setDateEnd(formData.dateEnd));
    //navigate(ROUTES.TICKETS);
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
