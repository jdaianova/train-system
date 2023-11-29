import './Feedback.css';

export default function FeedbackCard({ user }) {
    return (
        <div className='FeedbackCard'>
            <img src={user.photo} alt={user.name}></img>
            <div className='FeedbackCard__info'>

                <h6>{user.name}</h6>

                <div className='FeedbackCard__info-content'>

                    <div className='FeedbackCard__info-content_leftquot'>
                        <font size="36">&#8220;</font>
                    </div>

                    <div className='FeedbackCard__info-content_text'>
                        <p>
                            {user.text}
                            <sub><font size="36">&#8222;</font></sub>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
};
