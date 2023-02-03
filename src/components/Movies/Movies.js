import './Movies.css';
import Header from '.././Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonPluse from './ButtonPluse/ButtonPluse';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';


function Movies() {
    const [cardList, setCardList] = useState([])
    const [preloaderVisibility, setPreloaderVisibility] = useState(false)
    const [badRequest, setBadRequest] = useState(false)
    const [badRequestText, setBadRequestText] = useState('')

    function handleDeleteClick(card) {
        console.log(card)
        // mainApi.deliteMovies(card.mov)
            // .then(setSavedMoviesList((cards) => cards.filter(element => element._id !== card._id)))
    }


    const matched = (str, match) => str.toLowerCase().includes(match.toLowerCase());

    // const filterShortFilm = (m) =>
    //     m.filter(({ duration }) => duration <= 40);

    // const filter = (movies, params) => {
    //     const { search, checked } = params;

    //     if (search)
    //         movies = movies.filter(
    //             ({ nameRU, nameEN }) => matched(nameRU, search) || matched(nameEN, search)
    //         );

    //     if (checked) movies = filterShortFilm(movies);

    //     return movies;
    // };

    // function filterq(input, arr) {
    //     return arr[0].filter(function xx(el) {
    //         return el.toLowerCase().indexOf(input.toLowerCase()) > -1;
    //     })
    // }

    // function filterItems(query) {
    //     return array1.filter(function(el) {
    //         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    //     })
    //   }

    function handleSearch(value) {
        setBadRequest(false)
        setPreloaderVisibility(true)
        const { name } = value

        moviesApi.getMovies()
            .then((res) => {
                console.log(res)
                let resultArr = res.filter((item) => {
                    if (matched(item.nameRU, name)) {
                        return true
                    }
                })
                if (resultArr.length === 0) {
                    setBadRequest(true)
                    setBadRequestText('Ничего не найдено')
                }
                setCardList(resultArr, ...cardList)
                console.log(cardList)
            })
            .catch((err) => {
                console.log(err)
                setBadRequest(true)
                setBadRequestText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
            })
            .finally(() => setPreloaderVisibility(false))
    }

    return (
        <section className='Movies'>
            <Header
            />
            <SearchForm
                handleSearch={handleSearch}
            />
            <MoviesCardList
                cards={cardList}
                preloaderVisibility={preloaderVisibility}
                badRequest={badRequest}
                badRequestText={badRequestText}
                onCardDelete={handleDeleteClick}
            />
            <ButtonPluse />
            <Footer />
        </section>
    );
};

export default Movies;
