import { useState } from "react";
import "./Footer.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправкa данных
    console.log("Подписка на новости с email:", email);
    setEmail("");
  };

  return (
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
  );
};

export default SubscribeForm;
