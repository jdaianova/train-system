import { useState } from "react";
import "./Footer.css";
import SubscriptionPopup from "./SubscriptionPopup";
import { useSubscribeMutation } from "../../../redux/apiSlice";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [subscribe, { isLoading, isSuccess }] = useSubscribeMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await subscribe({ email }).unwrap();
      setIsPopupOpen(true);
      setEmail("");
    } catch (error) {
      //console.error("Ошибка подписки:", error);
    }
  };

  return (
    <>
     { isSuccess && <SubscriptionPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />}
      <form className="SubscribeForm" onSubmit={handleSubmit}>
        <p>Будьте в курсе событий</p>
        <div className="SubscribeForm-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
            required
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default SubscribeForm;
