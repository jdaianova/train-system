import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";
import "./PriceSlider.css";
import { setFieldFilters } from "../../../../redux/ticketsFitersSlice";

const PriceSlider = () => {
  const min=0;
  const max=10000;
  const dispatch = useDispatch();
  const [values, setValues] = useState([min, max]);

  const handleChange = (newValues) => {
    setValues(newValues);
    dispatch(setFieldFilters(["priceFrom", newValues[0]]));
    dispatch(setFieldFilters(["priceTo", newValues[1]]));
  };

  return (
    <div className="PriceSlider">
      <div className="PriceSlider-title">Стоимость</div>
      <div className="PriceSlider-value">
        <span>от</span>
        <span>до</span>
      </div>
      <div>
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "19px",
                  width: "294px",
                  borderRadius: "8px",
                  background: getTrackBackground({
                    values: values,
                    colors: [
                      "transparent",
                      "rgba(255, 168, 0, 1)",
                      "transparent",
                    ],
                    min: min,
                    max: max,
                  }),
                  alignSelf: "center",
                  border: "1px solid rgba(196, 196, 196, 1)",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  color: "rgba(229, 229, 229, 1)",
                  fontWeight: "400",
                  fontSize: "16px",
                  backgroundColor: "transparent",
                }}
              >
                {values[index]}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
