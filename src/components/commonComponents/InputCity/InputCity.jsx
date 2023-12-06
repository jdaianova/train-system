import "./InputCity.css";

import { useState, useEffect } from "react";
import axios from "axios";

import {
  buildUrlCityId,
  capitalizeLettersInCityName,
} from "../../../utils/helpers";
import { BASE_URL } from "../../../utils/constants";

const InputCity = ({ direction, initialCity, setFormData }) => {
  const [city, setCity] = useState(initialCity);
  const [searchListCities, setSearchListCities] = useState([]);

  async function getListCities(cityName) {
    const url = buildUrlCityId(cityName);
    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      setSearchListCities(response.data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getListCities(city);
  }, [city]);

  const handleChange = (cityName) => {
    const currentCity = capitalizeLettersInCityName(cityName);
    setCity(currentCity);

    direction === "Откуда"
      ? setFormData((prevFormData) => ({
          ...prevFormData,
          fromCityName: currentCity,
        }))
      : setFormData((prevFormData) => ({
          ...prevFormData,
          toCityName: currentCity,
        }));
  };

  return (
    <div className="InputCity">
      <input
        type="text"
        placeholder={direction}
        value={city}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
      {searchListCities.length >= 1 && (
        <div className="InputCity-search_list">
          {searchListCities[0].name.toLowerCase() !== city.toLowerCase() &&
            searchListCities.map((elem) => {
              return (
                <div
                  className="InputCity-search_list-element"
                  key={elem._id}
                  onClick={() => handleChange(elem.name)}
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
