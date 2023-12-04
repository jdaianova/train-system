import "./OrderStatusBar.css";

const OrderStatusBar = () => {
  return (
    <ul className="OrderStatusBar">
          <li className="OrderStatusBar__element">
            <div className="OrderStatusBar__element-number">1</div>
            <div className="OrderStatusBar__element-name">Билеты</div>
            <div className="OrderStatusBar__element-arrow"></div>
          </li>
          <li className="OrderStatusBar__element">
            <div className="OrderStatusBar__element-number">2</div>
            <div className="OrderStatusBar__element-name">Пассажиры</div>
            <div className="OrderStatusBar__element-arrow"></div>

          </li>
          <li className="OrderStatusBar__element">
            <div className="OrderStatusBar__element-number">3</div>
            <div className="OrderStatusBar__element-name">Оплата</div>
            <div className="OrderStatusBar__element-arrow"></div>
  
          </li>
          <li className="OrderStatusBar__element">
            <div className="OrderStatusBar__element-number">4</div>
            <div className="OrderStatusBar__element-name">Проверка</div>
          </li>
    </ul>
  );
};

export default OrderStatusBar;
