import "./ToggleSwitch.css";

const ToggleSwitch = ({ icon, label, value, onChange }) => {
  return (
    <div className="ToggleSwitch">
      <div className="ToggleSwitch__icon">{icon}</div>
      <div className="ToggleSwitch__label">{label}</div>
      <label>
        <input
          className="ToggleSwitch__toggle"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span className="ToggleSwitch__slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
