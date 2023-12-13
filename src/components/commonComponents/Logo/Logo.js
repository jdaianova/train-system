import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (

        <Link to={'/train-system/'} className="Logo">
            <h2>Лого</h2>
        </Link>
    )
    
};
