import "./InputCity.css";

import { useState } from "react";

import { capitalizeLettersInCityName } from "../../../utils/helpers";
import { useGetCityIdQuery } from "../../../redux/apSlice";

const InputCity = ({ direction, initialCity, setFormData }) => {
  const [cityName, setCityName] = useState(initialCity);
  const { data: searchListCities } = useGetCityIdQuery({ cityName });

  const handleChange = (cityName) => {
    const currentCity = capitalizeLettersInCityName(cityName);
    setCityName(currentCity);
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
        value={cityName}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
      {typeof searchListCities !== "undefined" &&
        searchListCities.length >= 1 && (
          <div className="InputCity-search_list">
            {searchListCities[0].name.toLowerCase() !==
              cityName.toLowerCase() &&
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
