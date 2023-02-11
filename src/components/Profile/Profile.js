import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import { useFormWithValidation, useInputWithValidation } from '../../utils/validation';
import Header from '../Header/Header';
import './Profile.css'

function Profile({ props }) {
    const { onUpdateProfile, errorTextProfile, setLoggedIn, popupOpend, setPopupOpend } = props
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const fromValidation = useFormWithValidation()
    const navigate = useNavigate();
    const [emailValid, setEmailValid] = useState(false)

    useEffect(() => {
        mainApi.getProfileInfo()
            .then(res => {
                setCurrentUser(res)
                setNameValue(res.name)
                setEmailValue(res.email)
            })
    }, [])

    function handleChangeName(e) {
        setNameValue(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmailValue(e.target.value)

        const mailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

        if (mailValidation.test(e.target.value)) {
            setEmailValid(true)
        }

    }

    function handleSubmit(e) {
        e.preventDefault()

        setEmailValid(false)

        setCurrentUser({
            name: nameValue,
            email: emailValue
        })

        onUpdateProfile({
            name: nameValue,
            email: emailValue
        })
    }

    function handleClickClosePopup() {
        setPopupOpend(false)
    }

    function handleExit() {
        localStorage.removeItem('token')
        localStorage.removeItem('movies')
        localStorage.removeItem('value')
        localStorage.removeItem('checkBox')
        localStorage.removeItem('moviesCardList')
        localStorage.removeItem('savedMovies')
        setLoggedIn(false)
        navigate('/');
    }

    return (
        <section className='Profile'>
            <Header />
            <h2 className='Profile__greeting'>
                Привет, {currentUser.name}
            </h2>
            <form
                className='Profile__ifco-Container'
                onSubmit={handleSubmit}
                onChange={fromValidation.handleChange}
            >
                <div className='Profile__info-name'>
                    <p className='Profile__info-text'>
                        Имя
                    </p>
                    <input
                        type='text'
                        onChange={handleChangeName}
                        value={nameValue}
                        min='2'
                        max='20'
                        name='name'
                        className='Profile__info-input' ></input>
                </div>
                <div className='Profile__info-email'>
                    <p className='Profile__info-text'>
                        E-mail
                    </p>
                    <input
                        onChange={handleChangeEmail}
                        value={emailValue}
                        name='email'
                        type='email'
                        className='Profile__info-input' ></input>
                </div>
                <span
                    className={errorTextProfile ? 'Profile__info-error' : 'Profile__info-error-hidden'}>
                    Что-то пошло не так...
                </span>
                <button
                    className={fromValidation.isValid && emailValid ? 'Profile__footer-edit' : 'Profile__footer-edit-disabled'}
                    disabled={
                        currentUser.name === nameValue && currentUser.email === emailValue
                            ? true : false ||
                                fromValidation.isValid && emailValid ? false : true
                    }
                >Редактировать </button>
            </form>
            <div className='Profile__footer'>
                <Link to='/' className='Profile__footer-exit'
                    onClick={handleExit}
                >Выйти из аккаунта </Link>
            </div>
            {popupOpend && <div className='Profile__popup'>
                <button
                    onClick={handleClickClosePopup}
                    className='Profile__popup-button'> </button>
                <p className='Profile__popup-text'>
                    Всё получилось!
                </p>
            </div>}
        </section>
    );
};

export default Profile;