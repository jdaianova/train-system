import "./Footer.css";

const SubscriptionPopup = ({ isPopupOpen, setIsPopupOpen }) => {
  if (!isPopupOpen) return null;

  return (
    <div className="subscription-popup-overlay">
      <div className="subscription-popup">
        <h2>Спасибо за подписку!</h2>
        <button onClick={() => setIsPopupOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
