import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Header from '../../Header/Header';
import './Promo.css';

function Promo({loggedIn}) {
    useContext(() => {

    },[loggedIn])

    return loggedIn ? <Header 
    /> :   
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
        </header>
}

export default Promo