import "./Footer.css";
import SubscribeForm from "./SubscribeForm";

import Logo from "../Logo/Logo";
import PhoneIcon from "./svgIcons/PhoneIcon";
import EnvelopeIcon from "./svgIcons/EnvelopeIcon";
import SkypeIcon from "./svgIcons/SkypeIcon";
import LocationIcon from "./svgIcons/LocationIcon";
import YouTubeIcon from "./svgIcons/YouTubeIcon";
import LinkedinIcon from "./svgIcons/LinkedinIcon";
import GoogleIcon from "./svgIcons/GoogleIcon";
import FacebookIcon from "./svgIcons/FacebookIcon";
import TwitterIcon from "./svgIcons/TwitterIcon";

import footerArrow from "../../../data/img/footer-arrow.png";

export default function Footer() {
  return (
    <footer id="contacts" className="Footer">
      <div className="Footer-container">
        <div className="Footer__contacts">
          <h5>Свяжитесь с нами</h5>
          <div className="Footer__contacts-section">
            <PhoneIcon />
            <p>8 (800) 000 00 00</p>
          </div>
          <div className="Footer__contacts-section">
            <EnvelopeIcon />
            <p>inbox@mail.ru</p>
          </div>
          <div className="Footer__contacts-section">
            <SkypeIcon />
            <p>tu.train.tickets</p>
          </div>
          <div className="Footer__contacts-section">
            <LocationIcon />
            <p>
              г. Москва <br></br>
              ул. Московская 27-35<br></br>
              555 555
            </p>
          </div>
        </div>

        <div className="Footer__subscribe">
          <h5>Подписка</h5>
          <SubscribeForm />

          <div className="Footer__social">
            <h5>Подписывайтесь на нас</h5>
            <div className="Footer__social-icons">
              <div className="Footer__social-icon"><YouTubeIcon /></div>
              <div className="Footer__social-icon"><LinkedinIcon /></div>
              <div className="Footer__social-icon"><GoogleIcon /></div>
              <div className="Footer__social-icon"><FacebookIcon /></div>
              <div className="Footer__social-icon"><TwitterIcon /></div>
            </div>
          </div>
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
