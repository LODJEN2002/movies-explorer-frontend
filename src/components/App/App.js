import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Routes, Navigate } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'ru')
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route
          path="*"
          element={<Navigate to='/404' />}
        />
      </Routes>
    </div>
  );
}

export default App;
