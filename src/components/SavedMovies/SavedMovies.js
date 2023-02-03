import './SavedMovies.css';
import Header from '.././Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SaveMoviesCardList from './SaveMoviesCardList/SaveMoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';


function SavedMovies() {
    const [savedMoviesList, setSavedMoviesList] = useState([])

    useEffect(() => {
        mainApi.getSavedMovies()
            .then(res => setSavedMoviesList(res))
    }, [])


    function handleDeleteClick(card) {
        mainApi.deliteMovies(card._id)
            .then(setSavedMoviesList((cards) => cards.filter(element => element._id !== card._id)))
    }

    return (
        <section className='SavedMovies'>
            <Header />
            <SearchForm />
            <SaveMoviesCardList
                cards={savedMoviesList}
                onCardDelete={handleDeleteClick}
            />
            <div className='SavedMovies__space'></div>
            <Footer />
        </section>
    );
};

export default SavedMovies;