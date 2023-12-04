import './Feedback.css';

import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'

import Slider from "react-slick";
import FeedbackCard from './FeedbackCard';
import feedbackList from "../../../data/feedbackList.js"

export default function Feedback() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        customPaging: i => (
            <div
                style={{
                    content: " ",
                    width: "19px",
                    height: "19px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(229, 229, 229, 1)",
                }}
            ></div>
        )
    };
    return (
        <section id='feedback' className='Feedback'>

            <div className='Feedback__title'>
                <h4>отзывы</h4>
            </div>


            <div className='Feedback__carousel'>
                <Slider {...settings}>
                    {feedbackList.map((user) => {
                        return (
                            <FeedbackCard key={user.title} user={user} />
                        )
                    })}
                </Slider>
            </div>

        </section>
    )
};
