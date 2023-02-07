import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useFormWithValidation, useInputWithValidation } from '../../utils/validation';


function Login({ onUpdateRegistr, loginError }) {
    const formValidation = useFormWithValidation()
    const emailValidation = useInputWithValidation()
    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        localStorage.setItem('movies', JSON.stringify([]))
        localStorage.setItem('value', '')
        localStorage.setItem('checkBox', false)

        onUpdateRegistr({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

    }

    return (
        <section className='Login'>
            <Link to='/'>
                <img className='Login__logo' src={logo} alt='Logo' />
            </Link>
            <h2 className='Login__greeting'>
                Рады видеть!
            </h2>
            <form className='Login__form'
                onChange={formValidation.handleChange}
                onSubmit={handleSubmit}
            >
                <p className='Login__form-text'>E-mail</p>
                <input
                    className='Login__form-input'
                    onChange={emailValidation.handleChange}
                    type='Email'
                    required
                    ref={emailRef}
                ></input>
                <span className={emailValidation.isValid ? 'Login__form-error-hidden' : 'Login__form-error'}> Неверный Email</span>
                <p className='Login__form-text' >Пароль</p>
                <input
                    className='Login__form-input Login__form-password'
                    type='password'
                    required
                    ref={passwordRef}
                ></input>
                <p className={loginError ? 'Login__form-error' : 'Login__form-error-hidden'}>Что-то пошло не так...</p>
                <button className={formValidation.isValid ? 'Login__form-submit' : 'Login__form-submit-disabled'} type='submit'>Войти</button>
            </form>
            <p className='Login__question'>
                Ещё не зарегистрированы?
                <Link className='Login__link-login' to='/signup'> Регистрация</Link>
            </p>
        </section>
    );
};

export default Login;