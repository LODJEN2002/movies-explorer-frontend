import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useForm, useFormWithValidation } from '../../utils/validation';


function Register(props) {
    // const [inputName, setInputName] = useState(false);
    const refName = useRef();
    const refEmail = useRef();
    const refPassword = useRef();


    const form = useForm()
    // const errorForm = useFormWithValidation()

    function handleSubmit(e) {
        e.preventDefault()

        props.vkid({
            name: refName.current.value,
            email: refEmail.current.value,
            pas: refPassword.current.value
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
                // onChange={form.handleChange}
                onSubmit={handleSubmit}
            >
                <p className='Register__form-text'>Имя</p>
                <input
                    ref={refName}
                    className='Register__form-input'
                    name='name' required ></input>
                {/* {(nameDirty && nameErrorMessange) && <div style={{ color: 'red' }}>{nameErrorMessange}</div>} */}
                <p className='Register__form-text'>E-mail</p>
                <input
                    ref={refEmail}
                    name='Email'
                    className='Register__form-input' type='Email' required></input>
                <p className='Register__form-text'>Пароль</p>
                <input
                    ref={refPassword}
                    name='password'
                    className='Register__form-input Register__form-password' type='password' required></input>
                <p className='Register__form-error'>Что-то пошло не так...</p>
                <button className='Register__form-submit' type='submit'>Зарегистрироваться</button>
            </form>
            <p className='Register__question'>
                Уже зарегистрированы?
                <Link className='Register__link-login' to='/signin'> Войти</Link>
            </p>
        </section>
    );
};

export default Register;