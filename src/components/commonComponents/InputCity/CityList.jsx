import "./InputCity.css";

const CityList = ({ cities, onCitySelect, excludedCity }) => {
  if (!Array.isArray(cities) || cities.length === 0) {
    return null;
  }

  return (
    <div className="InputCity-search_list">
      {cities
        .filter(
          (city) => city.name.toLowerCase() !== excludedCity.toLowerCase()
        )
        .map((city) => (
          <div
            className="InputCity-search_list-element"
            key={city._id}
            onClick={() => onCitySelect(city.name)}
          >
            {city.name}
          </div>
        ))}
    </div>
  );
};

export default CityList;
