import logo from '../../../images/logo.svg';
import './Promo.css';

function Promo() {
    return (
        <div className='Promo'>
            <div className='Promo__header'>
                <a href='/'>
                    <img src={logo} className='Promo__header-logo' alt='logo' />
                </a>
                <div className='Promo__container'>
                    <a href='signup' className='Promo__signup'>Регистрация</a>
                    <a href='signin' className='Promo__signin'>Войти</a>
                </div>
            </div>
            <div className='Promo__baner'>
                <h1 className='Promo__baner-title'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </div>

    );
}

export default Promo