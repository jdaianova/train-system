import './HomeBookingForm.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function HomeBookingForm() {
    const [ticketParam, setTicketParam] = useState({
        departureCity: '',
        arrivedCity: '',
        departureDate: '',
        arrivedDate: ''
    });

    useEffect(() => { }, [ticketParam]);

    const handleInput = (e) => {
        e.preventDefault();
        setTicketParam({ ...ticketParam, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => { };

    return (
        <div className="HomeBookingForm">

            <form className="HomeBookingForm__Form" onSubmit={handleSubmit}>

                <label className="HomeBookingForm_Form-direction">
                    Направление
                    <div>
                        <input
                            name="departureCity"
                            type="text"
                            placeholder="Откуда"
                            value={ticketParam.departureCity}
                            onChange={e => handleInput(e)}
                        />
                        <input
                            type="text"
                            placeholder="Куда"
                            name="arrivedCity"
                            value={ticketParam.arrivedCity}
                            onChange={e => handleInput(e)}
                        />
                    </div>
                </label>

                <label className="HomeBookingForm__Form-date">
                    Дата
                    <div>
                        <input
                            type="date"
                            name="departureDate"
                            value={ticketParam.departureDate}
                            onChange={e => handleInput(e)}
                        />
                        <input
                            type="date"
                            name="arrivedDate"
                            value={ticketParam.arrivedDate}
                            onChange={e => handleInput(e)}
                        />
                    </div>
                </label>

                <div className="HomeBookingForm__Form-btn">
                    <Link to={'/tickets'}>
                        <button type="submit">найти билеты</button>
                    </Link>
                </div>

            </form>

        </div>
    )
};
