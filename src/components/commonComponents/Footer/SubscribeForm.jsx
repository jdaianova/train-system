import { useState } from "react";
import "./Footer.css";
import SubscriptionPopup from "./SubscriptionPopup";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPopupOpen(true);
    console.log("Подписка на новости с email:", email);
    setEmail("");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <SubscriptionPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
      <form className="SubscribeForm" onSubmit={handleSubmit}>
        <p>Будьте в курсе событий</p>
        <div className="SubscribeForm-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
            required
          />
          <button type="submit">Отправить</button>
        </div>
      </form>
    </>
  );
};

export default SubscribeForm;
