import React from "./InputCity.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buildUrlCityId } from "../../../../utils/helpers";
import axios from "axios";
import { BASE_URL } from "../../../../utils/constants";
import { useEffect } from "react";
import {
  setFromCityId,
  setFromCityName,
  setToCityId,
  setToCityName,
} from "../../../../redux/ticketsFitersSlice";

const InputCity = ({ direction }) => {
  const dispatch = useDispatch();
  const initialCity = useSelector((state) =>
    direction === "Откуда"
      ? state.filters.fromCityName
      : state.filters.toCityName
  );
  const [city, setCity] = useState(initialCity);
  const [searchListCities, setSearchListCities] = useState([]);

  const handleSelectCity = (elem) => {
    setCity(elem.name);
    setSearchListCities([]);
    direction === "Откуда"
      ? dispatch(setFromCityId(elem._id))
      : dispatch(setToCityId(elem._id));
  };

  async function getCityId(cityName) {
    const url = buildUrlCityId(cityName);
    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      //console.log(response.data);
      setSearchListCities(response.data);
    } catch (error) {
      //console.error(error);
    }
  }

  useEffect(() => {
    getCityId(city);
    direction === "Откуда"
      ? dispatch(setFromCityName(city))
      : dispatch(setToCityName(city));
  }, [city, dispatch, direction]);

  const handleInput = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div className="InputCity">
      <input
        type="text"
        placeholder={direction}
        value={city}
        onChange={(e) => handleInput(e)}
        required
      />
      {searchListCities.length >= 1 && (
        <div className="InputCity-search_list">
          {searchListCities[0].name !== city &&
            searchListCities.map((elem) => {
              return (
                <div
                  className="InputCity-search_list-element"
                  key={elem._id}
                  onClick={() => handleSelectCity(elem)}
                >
                  {elem.name}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default InputCity;
