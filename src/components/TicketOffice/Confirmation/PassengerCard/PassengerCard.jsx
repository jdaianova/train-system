import "./PassengerCard.css";
import PassengerIcon from "./PassengerIcon";

const PassengerCard = ({ passenger }) => {
  
  return (
    <div className="PassengerCard">
      <div className="PassengerCard__icon">
        <PassengerIcon />
        <p>{passenger.type === "adult" ? "Взрослый" : "Детский"}</p>
      </div>

      <div className="PassengerCard__info">
        <span>
          {passenger.lastName} {passenger.firstName} {passenger.middleName}
        </span>
        <p>Пол {passenger.gender === "Ж" ? "женский" : "мужской"}</p>
        <p>Дата рождения {passenger.birthDate}</p>
        <p>{passenger.documentType === "passport" ? "Паспорт " : "Свидетельство о рождении "} {passenger.documentNumber}</p>
      </div>
    </div>
  );
};

export default PassengerCard;
