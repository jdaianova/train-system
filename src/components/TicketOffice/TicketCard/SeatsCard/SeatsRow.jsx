import "./SeatsCard.css";

import rubIcon from "../../../../data/img/rub-icon.png";

const SeatsRow = ({title, amount, price}) => {
  return (
    <div className="SeatsRow">
        <div className="SeatsRow-title">{title}</div>
        <div className="SeatsRow-amount">{amount}</div>
        <div className="SeatsRow-prep">от</div>
        <div className="SeatsRow-price">{price}</div>
        <img src={rubIcon} alt="rub" />
    </div>
  )
}

export default SeatsRow