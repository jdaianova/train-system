import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import "./Feedback.css";

import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";
import feedbackList from "../../../data/feedbackList.js";

export default function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: (i) => <div className="dot"></div>,
    dotsClass: "slick-dots custom-dot-class",
  };

  return (
    <section id="feedback" className="Feedback">
      <div className="Feedback__title">
        <h4>отзывы</h4>
      </div>

      <Slider {...settings}>
        {feedbackList.map((user) => {
          return <FeedbackCard key={user.title} user={user} />;
        })}
      </Slider>
    </section>
  );
}
