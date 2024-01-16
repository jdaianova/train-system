import "./OrderStatusBar.css";

import React from "react";
import { useLocation } from "react-router-dom";

const OrderStatusBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className="OrderStatusBar">
      <li
        className={`OrderStatusBar__element ${
          currentPath === "/ticketoffice" ||
          currentPath === "/ticketoffice/seats" ||
          currentPath === "/ticketoffice/passengers" ||
          currentPath === "/ticketoffice/pay" ||
          currentPath === "/ticketoffice/confirmation"
            ? "active-element"
            : ""
        }`}
        style={{ zIndex: "4" }}
      >
        <div className="OrderStatusBar__element-number">1</div>
        <div className="OrderStatusBar__element-name">Билеты</div>
      </li>

      <li
        className={`OrderStatusBar__element ${
          currentPath === "/ticketoffice/passengers" ||
          currentPath === "/ticketoffice/pay" ||
          currentPath === "/ticketoffice/confirmation"
            ? "active-element"
            : ""
        }`}
        style={{ zIndex: "3" }}
      >
        <div className="OrderStatusBar__element-number">2</div>
        <div className="OrderStatusBar__element-name">Пассажиры</div>
      </li>

      <li
        className={`OrderStatusBar__element ${
          currentPath === "/ticketoffice/pay" ||
          currentPath === "/ticketoffice/confirmation"
            ? "active-element"
            : ""
        }`}
        style={{ zIndex: "2" }}
      >
        <div className="OrderStatusBar__element-number">3</div>
        <div className="OrderStatusBar__element-name">Оплата</div>
      </li>
      <li
        className={`OrderStatusBar__element ${
          currentPath === "/ticketoffice/confirmation" ? "active-element" : ""
        }`}
        style={{ zIndex: "1" }}
      >
        <div className="OrderStatusBar__element-number">4</div>
        <div className="OrderStatusBar__element-name">Проверка</div>
      </li>
    </ul>
  );
};

export default OrderStatusBar;
