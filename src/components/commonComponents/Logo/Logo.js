import { ROUTES } from '../../../utils/routes';
import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (

        <Link to={ROUTES.HOME} className="Logo">
            <h2>Лого</h2>
        </Link>
    )
    
};
