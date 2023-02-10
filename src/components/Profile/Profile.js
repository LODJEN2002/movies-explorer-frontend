import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validation';
import Header from '../Header/Header';
import './Profile.css'

function Profile({ props }) {
    const { onUpdateProfile, errorTextProfile, loggedIn, setLoggedIn } = props
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const fromValidation = useFormWithValidation()
    const nameRef = useRef()
    const emailRef = useRef()

    useEffect(() => {
        mainApi.getProfileInfo()
            .then(res => setCurrentUser(res))
    }, [currentUser.name, currentUser.email, setCurrentUser])

    function handleSubmit(e) {
        e.preventDefault()

        setCurrentUser({
            name: nameRef.current.value,
            email: emailRef.current.value
        })

        onUpdateProfile({
            name: nameRef.current.value,
            email: emailRef.current.value
        })
    }

    function handleExit() {
        localStorage.removeItem('token')
        localStorage.removeItem('movies')
        localStorage.removeItem('value')
        localStorage.removeItem('checkBox')
        localStorage.removeItem('moviesCardList')
        setLoggedIn(false)
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
                        ref={nameRef}
                        type='text'
                        placeholder={currentUser.name}
                        name='name'
                        className='Profile__info-input' ></input>
                </div>
                <div className='Profile__info-email'>
                    <p className='Profile__info-text'>
                        E-mail
                    </p>
                    <input
                        ref={emailRef}
                        placeholder={currentUser.email}
                        name='email'
                        type='email'
                        className='Profile__info-input' ></input>
                </div>
                <span
                    className={errorTextProfile ? 'Profile__info-error' : 'Profile__info-error-hidden'}>
                    Что-то пошло не так...
                </span>
                <button
                    className={fromValidation.isValid ? 'Profile__footer-edit' : 'Profile__footer-edit-disabled'}
                    disabled={fromValidation.isValid ? false : true}
                >Редактировать </button>
            </form>
            <div className='Profile__footer'>
                <Link to='/signin' className='Profile__footer-exit'
                    onClick={handleExit}
                >Выйти из аккаунта </Link>
            </div>
        </section>
    );
};

export default Profile;