import "./CheckBoxes.css";
import Switch from "@mui/material/Switch";

import { useDispatch } from "react-redux";
import {
  setHaveWifi,
  setIsExpress,
  setHaveFirstClass,
} from "../../../../redux/ticketsFitersSlice";

import firstClassIcon from "../../../../data/img/check_box_first_class.png";
import wifiIcon from "../../../../data/img/check_box_wifi.png";
import expressIcon from "../../../../data/img/check_box_express.png";

const CheckBoxes = () => {
  const dispatch = useDispatch();

  return (
    <div className="CheckBoxes">
      <div className="CheckBoxes__Box">
        <div className="CheckBoxes__Box-icon">
          <img src={firstClassIcon} alt="first class icon" />
        </div>

        <div className="CheckBoxes__Box-label">
          <label htmlFor="have_first_class">Люкс</label>
        </div>

        <div className="CheckBoxes__Box-slider">
          <Switch
            id="have_first_class"
            color="warning"
            onChange={(e) => dispatch(setHaveFirstClass(e.target.checked))}
          />
        </div>
      </div>

      <div className="CheckBoxes__Box">
        <div className="CheckBoxes__Box-icon">
          <img src={wifiIcon} alt="wifi icon" />
        </div>

        <div className="CheckBoxes__Box-label">
          <label htmlFor="have_wifi">Wi-Fi</label>
        </div>

        <div className="CheckBoxes__Box-slider">
          <Switch
            id="have_wifi"
            color="warning"
            onChange={(e) => dispatch(setHaveWifi(e.target.checked))}
          />
        </div>
      </div>

      <div className="CheckBoxes__Box">
        <div className="CheckBoxes__Box-icon">
          <img src={expressIcon} alt="express icon" />
        </div>

        <div className="CheckBoxes__Box-label">
          <label htmlFor="have_express">Экспресс</label>
        </div>

        <div className="CheckBoxes__Box-slider">
          <Switch
            id="have_express"
            color="warning"
            onChange={(e) => dispatch(setIsExpress(e.target.checked))}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;
