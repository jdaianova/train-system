import { useDispatch, useSelector } from "react-redux";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";

import ToggleSwitch from "./ToggleSwitch";
import FirstClassIcon from "../../commonTicketsComponents/svgComponents/FirstClassIcon";
import SecondClassIcon from "../../commonTicketsComponents/svgComponents/SecondClassIcon";
import ThirdClassIcon from "../../commonTicketsComponents/svgComponents/ThirdClassIcon";
import FourthClassIcon from "../../commonTicketsComponents/svgComponents/FourthClassIcon";
import WiFiIcon from "../../commonTicketsComponents/svgComponents/WiFiIcon";
import ExpressIcon from "../../commonTicketsComponents/svgComponents/ExpressIcon";

import "./SwitchSection.css";

const SwitchSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggle = (field, value) => {
    dispatch(setFieldFilters([field, value]));
  };

  return (
    <div className="SwitchSection">
      {/* haveSecondClass = купе */}
      <ToggleSwitch
        icon={
          <SecondClassIcon
            width={17}
            height={17}
            color={"rgba(229, 229, 229, 1)"}
          />
        }
        label="Купе"
        value={filters.haveSecondClass}
        onChange={(e) => handleToggle("haveSecondClass", e.target.checked)}
      />
      {/* haveThirdClass = плацкарт */}
      <ToggleSwitch
        icon={
          <ThirdClassIcon
            width={17}
            height={17}
            color={"rgba(229, 229, 229, 1)"}
          />
        }
        label="Плацкарт"
        value={filters.haveThirdClass}
        onChange={(e) => handleToggle("haveThirdClass", e.target.checked)}
      />
      {/* haveFourthClass = сидячий */}
      <ToggleSwitch
        icon={
          <FourthClassIcon
            width={14}
            height={23}
            color={"rgba(229, 229, 229, 1)"}
          />
        }
        label="Сидячий"
        value={filters.haveFourthClass}
        onChange={(e) => handleToggle("haveFourthClass", e.target.checked)}
      />
      {/* haveFirstClass = люкс */}
      <ToggleSwitch
        icon={
          <FirstClassIcon
            width={22}
            height={20}
            color={"rgba(229, 229, 229, 1)"}
          />
        }
        label="Люкс"
        value={filters.haveFirstClass}
        onChange={(e) => handleToggle("haveFirstClass", e.target.checked)}
      />
      {/* haveWifi = вайфай */}
      <ToggleSwitch
        icon={
          <WiFiIcon width={24} height={19} color={"rgba(229, 229, 229, 1)"} />
        }
        label="Wi-Fi"
        value={filters.haveWifi}
        onChange={(e) => handleToggle("haveWifi", e.target.checked)}
      />
      {/* isExpress = экспресс */}
      <ToggleSwitch
        icon={
          <ExpressIcon
            width={17}
            height={17}
            color={"rgba(229, 229, 229, 1)"}
          />
        }
        label="Экспресс"
        value={filters.isExpress}
        onChange={(e) => handleToggle("isExpress", e.target.checked)}
      />
    </div>
  );
};

export default SwitchSection;
