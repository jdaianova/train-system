import "./InputCity.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  buildUrlCityId,
  capitalizeLettersInCityName,
} from "../../../../utils/helpers";
import axios from "axios";
import { BASE_URL } from "../../../../utils/constants";
import { useEffect } from "react";
import {
  setFromCityNameInForm,
  setToCityNameInForm,
} from "../../../../redux/formParams";

const InputCity = ({ direction, initialCity }) => {
   const dispatch = useDispatch();

  const [city, setCity] = useState(initialCity);
  const [searchListCities, setSearchListCities] = useState([]);

  async function getListCities(cityName) {
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
    getListCities(city);
  }, [city]);

  const handleInput = (data) => {
    const currentCity = capitalizeLettersInCityName(data);
    setCity(currentCity);
    direction === "Откуда"
      ? dispatch(setFromCityNameInForm(currentCity))
      : dispatch(setToCityNameInForm(currentCity));
  };

  return (
    <div className="InputCity">
      <input
        type="text"
        placeholder={direction}
        value={city}
        onChange={(e) => handleInput(e.target.value)}
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
                  onClick={() => handleInput(elem.name)}
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
