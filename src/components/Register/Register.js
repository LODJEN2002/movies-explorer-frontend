import './Register.css';
import logo from '../../images/logo.svg';


function Register() {
    return (
        <div className='Register'>
            <a href='/'>
                <img className='Register__logo' src={logo} alt='Logo' />
            </a>
            <h2 className='Register__greeting'>
                Добро пожаловать!
            </h2>
            <form className='Register__form'>
                <p className='Register__form-text'>Имя</p>
                <input className='Register__form-input'></input>
                <p className='Register__form-text'>E-mail</p>
                <input className='Register__form-input' type='Email'></input>
                <p className='Register__form-text'>Пароль</p>
                <input className='Register__form-input Register__form-password' type='password'></input>
                <p className='Register__form-error'>Что-то пошло не так...</p>
                <button className='Register__form-submit' type='submit'>Зарегистрироваться</button>
            </form>
            <p className='Register__question'>
                Уже зарегистрированы?
                <a className='Register__link-login' href='signin'> Войти</a>
            </p>
        </div>
    );
};

export default Register;