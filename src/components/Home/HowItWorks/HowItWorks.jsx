import backgroundImg from '../../../data/img/howItWorks-background.png';
import HowItWorsIcons from './HowItWorksIcons';
import icons from '../../../data/icons';
import './HowItWorks.css';

export default function HowItWorks() {
    return (
        <div className="HowItWorks">

            <img
                className="HowItWorks__background"
                src={backgroundImg}
                alt='background rails'
            />

            <div className="HowItWorks__top">
                <h3>Как это работает</h3>
                <div>Узнать больше</div>
            </div>

            <div className="HowItWorks__main">
                <HowItWorsIcons icons={icons}/>
            </div>

        </div>
    )
}