import React, { useState } from "react";
import "./TypeOfWagon.css";

import FourthClassIcon from "../../commonTicketsComponents/svgComponents/FourthClassIcon";
import ThirdClassIcon from "../../commonTicketsComponents/svgComponents/ThirdClassIcon";
import SecondClassIcon from "../../commonTicketsComponents/svgComponents/SecondClassIcon";
import FirstClassIcon from "../../commonTicketsComponents/svgComponents/FirstClassIcon";

const TypeOfWagon = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const isActive = (type) => selectedType === type;

  return (
    <div className="TypeOfWagon">
      {["fourth", "third", "second", "first"].map((type, index) => {
        const IconComponent = {
          fourth: FourthClassIcon,
          third: ThirdClassIcon,
          second: SecondClassIcon,
          first: FirstClassIcon,
        }[type];

        const text = {
          fourth: "Сидячий",
          third: "Плацкарт",
          second: "Купе",
          first: "Люкс",
        }[type];

        return (
          <div
            key={index}
            className="TypeOfWagon__choosing-icon"
            onClick={() => handleSelectType(type)}
          >
            <IconComponent
              height={50}
              color={isActive(type) ? "rgba(255, 168, 0, 1)" : "rgba(196, 196, 196, 1)"}
            />
            <p style={{ color: isActive(type) ? "rgba(255, 168, 0, 1)" : "inherit" }}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TypeOfWagon;
