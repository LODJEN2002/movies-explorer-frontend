import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useFormWithValidation, useInputWithValidation } from '../../utils/validation';


function Register({ onUpdateRegistr }) {

    const refName = useRef();
    const refEmail = useRef();
    const refPassword = useRef();


    const errorForm = useFormWithValidation()
    const nameInput = useInputWithValidation()
    const errorInput = useInputWithValidation()

    function handleSubmit(e) {
        e.preventDefault();
        
        onUpdateRegistr({
            name : refName.current.value,
            email : refEmail.current.value,
            password : refPassword.current.value,
        })
    }
    
    return (
        <section className='Register'>
            <Link to='/'>
                <img className='Register__logo' src={logo} alt='Logo' />
            </Link>
            <h2 className='Register__greeting'>
                Добро пожаловать!
            </h2>
            <form className='Register__form'
            onSubmit={handleSubmit}
            onChange={errorForm.handleChange}
            >
                <p className='Register__form-text'>Имя</p>
                <input
                    onChange={nameInput.handleChange}
                    ref={refName}
                    className='Register__form-input'
                    name='name' required ></input>
                <span className={nameInput.isValid ? 'Register__form-error-hidden' : 'Register__form-error'}> Ошибка валидации!</span>
                <p className='Register__form-text'>E-mail</p>
                <input
                    onChange={errorInput.handleChange}
                    ref={refEmail}
                    name='Email'
                    className='Register__form-input' type='Email' required></input>
                <span className={errorInput.isValid ? 'Register__form-error-hidden' : 'Register__form-error'}> Ошибка валидации!</span>
                <p className='Register__form-text'>Пароль</p>
                <input
                    ref={refPassword}
                    name='password'
                    className='Register__form-input Register__form-password' type='password' required></input>
                {/* <span className='Register__form-error Register__form-error-hidden'>Что-то пошло не так...</span> */}
                <button className={errorForm.isValid ? 'Register__form-submit' : 'Register__form-submit-disabled'} type='submit' disabled={errorForm.isValid ? false : true}>Зарегистрироваться</button>
            </form>
            <p className='Register__question'>
                Уже зарегистрированы?
                <Link className='Register__link-login' to='/signin'> Войти</Link>
            </p>
        </section>
    );
};

export default Register;