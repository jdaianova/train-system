import "./Footer.css";
import Logo from "../Logo/Logo";
import footerArrow from "../../data/img/footer-arrow.png";

export default function Footer() {
  return (
    <footer id="contacts" className="Footer">
      <div className="Footer-container">
        <div className="Footer__contacts">
          <h5>Свяжитесь с нами</h5>
        </div>

        <div className="Footer__subscribe">
          <h5>Подписка</h5>
        </div>
      </div>

      <div className="Footer__bottom">
        <Logo />
        <div>
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            src={footerArrow}
            alt="link to top"
          />
        </div>
        <div>
          <p>2018 WEB</p>
        </div>
      </div>
    </footer>
  );
}
