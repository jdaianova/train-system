import "./TicketOfficeBookingForm.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputCity from "../../commonComponents/InputCity/InputCity";
import InputDate from "../../commonComponents/InputDate/InputDate";

import { setFieldFilters } from "../../../redux/ticketsFitersSlice";
import { useLazyGetCityIdQuery } from "../../../redux/apSlice";

export default function TicketOfficeBookingForm() {
  const [trigger] = useLazyGetCityIdQuery();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [formData, setFormData] = useState({
    fromCityName: filters.fromCityName,
    toCityName: filters.toCityName,
    dateStart: filters.dateStart,
    dateEnd: filters.dateEnd,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const firstResponse = await trigger({
        cityName: formData.fromCityName,
      }).unwrap();
      dispatch(setFieldFilters(["fromCityId", firstResponse[0]._id || ""]));
    } catch (error) {
      dispatch(setFieldFilters(["fromCityId", ""]));
    }

    try {
      const secondResponse = await trigger({
        cityName: formData.toCityName,
      }).unwrap();
      dispatch(setFieldFilters(["toCityId", secondResponse[0]._id || ""]));
    } catch (error) {
      dispatch(setFieldFilters(["toCityId", ""]));
    }

    Object.entries(formData).forEach((key, value) => {
      dispatch(setFieldFilters(key, value));
    });
  };

  return (
    <div className="TicketOfficeBookingForm">
      <form className="TicketOfficeBookingForm__Form" onSubmit={handleSubmit}>
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
