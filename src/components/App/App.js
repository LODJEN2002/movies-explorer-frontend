import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [errorTextProfile, SetErrorTextProfile] = useState(false);
  const [popupOpend, setPopupOpend] = useState(false);
  const [currentUser, setCurrentUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
          }
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  useEffect(() => {
    document.documentElement.setAttribute('lang', 'ru')
  }, [])

  function handleSubmitRegister(inputs) {
    const { password, email, name } = inputs
    mainApi.register(password, email, name)
      .then(() => {
        handleSubmitLogin({ email: email, password: password })
        setLoginError(false)
      })
      .catch((err) => {
        setLoginError(true)
        console.log(err)
      })
  }

  function handleSubmitLogin(inputs) {
    const { email, password } = inputs;

    mainApi.login(password, email)
      .then(res => res.token)
      .then((token) => {
        if (token) {
          setLoginError(false)
          setLoggedIn(true)
          navigate('/movies');
          localStorage.setItem('token', token)
          localStorage.setItem('movies', JSON.stringify([]))
          localStorage.setItem('value', '')
          localStorage.setItem('checkBox', false)
          localStorage.setItem('moviesCardList', JSON.stringify([]))
          localStorage.setItem('savedMovies', JSON.stringify([]))
        }
      })
      .catch((error) => {
        setLoginError(true)
        if (error === 'Ошибка: 401') {
          console.log('Что-то пошло не так')
        }
      })
  }

  function handleSubmitProfile(inputs) {
    const { name, email } = inputs;

    mainApi.profile(email, name)
      .then(() => {
        SetErrorTextProfile(false)
        setPopupOpend(true)
      })
      .catch(() => SetErrorTextProfile(true))
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      <div className="App">
        <Routes>
          <Route path='/'
            element={<Main
              loggedIn={loggedIn}
            />} />
          <Route path='/movies' exact
            element={<ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
            />} />
          <Route path='/saved-movies'
            element={<ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn}
            />} />
          <Route path='/profile'
            element={<ProtectedRoute
              component={Profile}
              popupOpend={popupOpend}
              setPopupOpend={setPopupOpend}
              onUpdateProfile={handleSubmitProfile}
              errorTextProfile={errorTextProfile}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />} />
          <Route path='/signup'
            element={<Register
              onUpdateRegistr={handleSubmitRegister}
              loginError={loginError}
            />}
          />
          <Route path='/signin' element={<Login
            loggedIn={loggedIn}
            onUpdateRegistr={handleSubmitLogin}
            loginError={loginError}
          />} />
          <Route path='/404'
            element={<ErrorPage />} />
          <Route
            path="*"
            element={<Navigate to='/404' />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
