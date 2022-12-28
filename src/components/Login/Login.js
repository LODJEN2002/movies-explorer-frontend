import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className='Login'>
            <Link to='/'>
                <img className='Login__logo' src={logo} alt='Logo' />
            </Link>
            <h2 className='Login__greeting'>
                Рады видеть!
            </h2>
            <form className='Login__form'>
                <p className='Login__form-text'>E-mail</p>
                <input className='Login__form-input' type='Email' required></input>
                <p className='Login__form-text' >Пароль</p>
                <input className='Login__form-input Login__form-password' type='password' required></input>
                <p className='Login__form-error'>Что-то пошло не так...</p>
                <button className='Login__form-submit' type='submit'>Зарегистрироваться</button>
            </form>
            <p className='Login__question'>
                Ещё не зарегистрированы?
                <Link className='Login__link-login' to='/signup'> Регистрация</Link>
            </p>
        </section>
    );
};

export default Login;