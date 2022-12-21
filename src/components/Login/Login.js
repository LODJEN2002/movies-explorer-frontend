import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <div className='Login'>
            <a href='/'>
                <img className='Login__logo' src={logo} alt='Logo' />
            </a>
            <h2 className='Login__greeting'>
                Рады видеть!
            </h2>
            <form className='Login__form'>
                <p className='Login__form-text'>E-mail</p>
                <input className='Login__form-input' type='Email'></input>
                <p className='Login__form-text'>Пароль</p>
                <input className='Login__form-input Login__form-password' type='password'></input>
                <p className='Login__form-error'>Что-то пошло не так...</p>
                <button className='Login__form-submit' type='submit'>Зарегистрироваться</button>
            </form>
            <p className='Login__question'>
                Ещё не зарегистрированы?
                <a className='Login__link-login' href='signup'> Регистрация</a>
            </p>
        </div>
    );
};

export default Login;