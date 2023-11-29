import './Footer.css';
import Logo from '../Logo/Logo';
import footerArrow from '../../data/img/footer-arrow.png';

export default function Footer() {

    return (
        <div className="Footer">

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
                    <a href='#0'><img src={footerArrow} alt='link to top'></img></a>
                </div>
                <div>
                    <p>2018 WEB</p>
                </div>
            </div>

        </div>
    )
};
