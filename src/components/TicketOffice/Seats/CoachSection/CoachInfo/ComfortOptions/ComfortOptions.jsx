import { useState } from "react";
import { useDispatch } from "react-redux";
import "./ComfortOptions.css";
import AirConditioningIcon from "../../../../commonTicketsComponents/svgComponents/AirConditioningIcon";
import WiFiIcon from "../../../../commonTicketsComponents/svgComponents/WiFiIcon";
import LinenIcon from "../../../../commonTicketsComponents/svgComponents/LinenIcon";
import FoodIcon from "../../../../commonTicketsComponents/svgComponents/FoodIcon";
import Tooltip from "../../../../../commonComponents/Tooltip/Tooltip";
import {
  addComfortOption,
  removeComfortOption,
} from "../../../../../../redux/seatsSelectedSlice";

const ComfortOptions = ({ coachFilters, direction }) => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({});

  const setOptionPrice = (option) => {
    if (option === "have_wifi") return coachFilters.wifi_price;
    if (option === "is_linens_included") return coachFilters.linens_price;
    return 0;
  };

  const handleSelectOption = (option) => {
    if (!coachFilters[option] && option !== "have_food") {
      const isSelected = !!selectedOptions[option];
      const optionPrice = setOptionPrice(option);

      setSelectedOptions((prevState) => ({
        ...prevState,
        [option]: !isSelected,
      }));

      const actionPayload = {
        direction,
        coachId: coachFilters._id,
        optionComfort: option,
        price: optionPrice,
      };

      if (isSelected) {
        dispatch(removeComfortOption(actionPayload));
      } else {
        dispatch(addComfortOption(actionPayload));
      }
    }
  };

  const getIconStyles = (option) => {
    const isOptionAvailable = !coachFilters[option] && option !== "have_food";
    const isSelected = selectedOptions[option];
    return {
      backgroundColor: isSelected
        ? "rgba(253, 185, 53, 1)"
        : isOptionAvailable
        ? "white"
        : "rgba(252, 220, 157, 1)",
      border:
        isSelected || !isOptionAvailable
          ? "none"
          : "1px solid rgba(41, 41, 41, 1)",
      borderRadius: "5px",
      cursor: isOptionAvailable ? "pointer" : "default",
    };
  };

  const createIconWithTooltip = (IconComponent, option, tooltipText) => (
    <div
      className="ComfortOptions-icon"
      style={getIconStyles(option)}
      onClick={() => handleSelectOption(option)}
      onMouseOver={(e) => {
        if (!coachFilters[option] && option !== "have_food") {
          e.currentTarget.style.backgroundColor = "rgba(255, 168, 0, 1)";
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor =
          getIconStyles(option).backgroundColor;
      }}
    >
      <Tooltip tooltipText={tooltipText}>
        <IconComponent
          height={20}
          color={
            !coachFilters[option] && option !== "have_food"
              ? selectedOptions[option]
                ? "rgba(244, 242, 246, 1)"
                : "black"
              : "rgba(146, 143, 148, 1)"
          }
        />
      </Tooltip>
    </div>
  );

  return (
    <div className="ComfortOptions">
      {createIconWithTooltip(
        AirConditioningIcon,
        "have_air_conditioning",
        "кондиционер"
      )}
      {createIconWithTooltip(WiFiIcon, "have_wifi", "WI-FI")}
      {createIconWithTooltip(LinenIcon, "is_linens_included", "белье")}
      {createIconWithTooltip(FoodIcon, "have_food", "питание")}
    </div>
  );
};

export default ComfortOptions;
