import React, { useState } from "react";
import { useGetCityIdQuery } from "../../../redux/apiSlice";
import { capitalizeLettersInCityName } from "../../../utils/helpers";
import "./InputCity.css";
import CityList from "./CityList";

const InputCity = ({ direction, initialCity, setFormData }) => {
  const [cityName, setCityName] = useState(initialCity);
  const [showList, setShowList] = useState(false);
  const { data: searchListCities } = useGetCityIdQuery({ cityName });

  const handleChange = (newCityName) => {
    const capitalizedCity = capitalizeLettersInCityName(newCityName);
    setCityName(capitalizedCity);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [direction === "Откуда" ? "fromCityName" : "toCityName"]: capitalizedCity,
    }));
  };

  const handleFocus = () => {
    setShowList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowList(false), 200);
  };

  return (
    <div className="InputCity">
    <input
      type="text"
      placeholder={direction}
      value={cityName}
      onChange={(e) => handleChange(e.target.value)}
      onFocus={handleFocus}
        onBlur={handleBlur}
      required
    />
   { showList && <CityList 
      cities={searchListCities} 
      onCitySelect={handleChange} 
      excludedCity={cityName} 
    />}
  </div>
  );
};

export default InputCity;
