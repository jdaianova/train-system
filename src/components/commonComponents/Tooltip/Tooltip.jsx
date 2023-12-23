import "./Tooltip.css";

import { useState } from "react";

const Tooltip = ({ children, tooltipText }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && <div className="tooltip"><p>{tooltipText}</p></div>}
    </div>
  );
};

export default Tooltip;
