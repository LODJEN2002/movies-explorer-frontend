import './SavedMovies.css';
import Header from '.././Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SaveMoviesCardList from './SaveMoviesCardList/SaveMoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';


function SavedMovies() {
    const [savedMoviesList, setSavedMoviesList] = useState([])
    const [checkBox, setCheckBox] = useState(false)
    const [valueSearch, setValueSearch] = useState('')
    const matched = (str, match) => str.toLowerCase().includes(match.toLowerCase());


    useEffect(() => {
        mainApi.getSavedMovies()
            .then((res) => {
                setSavedMoviesList(res)
                // localStorage.setItem('savedMovies', JSON.stringify(res))
            })

    }, [])

    function handleSearchClick(valueSearch) {
        const { name } = valueSearch

        let newSavedMoviesList = savedMoviesList.filter((item) => {
                if (matched(item.nameRU, name)) {
                    return true
            }
        })
        setSavedMoviesList(newSavedMoviesList)

    }


    function handleCheckBoxClick() {
        if (!checkBox) {
            let newSavedMoviesList = savedMoviesList.filter((card) => {
                if (card.duration <= 40) {
                    return card
                }
            })
            setSavedMoviesList(newSavedMoviesList)
        }
        if (checkBox) {
            setSavedMoviesList(JSON.parse(localStorage.getItem('savedMovies')))
        }

    }

    function handleDeleteClick(card) {
        mainApi.deliteMovies(card._id)
            .then(setSavedMoviesList((cards) => cards.filter(element => element._id !== card._id)))
    }

    return (
        <section className='SavedMovies'>
            <Header />
            <SearchForm
                valueSearch={valueSearch}
                handleCheckBoxClick={handleCheckBoxClick}
                setCheckBox={setCheckBox}
                checkBox={checkBox}
                handleSearch={handleSearchClick}
            />
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