import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Promo.css';

function Promo() {
    return (
        <header className='Promo'>
            <div className='Promo__header'>
                <Link to='/main'>
                    <img src={logo} className='Promo__header-logo' alt='logo' />
                </Link>
                <div className='Promo__container'>
                    <Link to='signup' className='Promo__signup'>Регистрация</Link>
                    <Link to='signin' className='Promo__signin'>Войти</Link>
                </div>
            </div>
            <div className='Promo__baner'>
                <h1 className='Promo__baner-title'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </header>

    );
}

export default Promo