import './Movies.css';
import Header from '.././Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonPluse from './ButtonPluse/ButtonPluse';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
    const [cardList, setCardList] = useState([])
    const [resultArr, setResultArr] = useState([])
    const [preloaderVisibility, setPreloaderVisibility] = useState(false)
    const [badRequest, setBadRequest] = useState(false)
    const [badRequestText, setBadRequestText] = useState('')
    const [visivleButtonPluse, setVisivleButtonPluse] = useState(true)

    useEffect(() => {
        if (cardList.length === resultArr.length) {
            setVisivleButtonPluse(false)
        }
    }, [cardList, resultArr])
    const matched = (str, match) => str.toLowerCase().includes(match.toLowerCase());


    function handleSearch(value) {
        setVisivleButtonPluse(true)
        setBadRequest(false)
        setPreloaderVisibility(true)
        const { name } = value

        moviesApi.getMovies()
            .then((res) => {
                let resultArr = res.filter((item) => {
                    if (matched(item.nameRU, name)) {
                        return true
                    }
                })
                if (resultArr.length === 0) {
                    setBadRequest(true)
                    setBadRequestText('Ничего не найдено')
                }
                if (window.innerWidth >= 1281) {
                    setResultArr(resultArr)
                    setCardList(resultArr.slice(0, 4), ...cardList)
                }
                if (window.innerWidth <= 1281) {
                    setResultArr(resultArr)
                    setCardList(resultArr.slice(0, 3), ...cardList)
                }
                if (window.innerWidth <= 990) {
                    setResultArr(resultArr)
                    setCardList(resultArr.slice(0, 2), ...cardList)
                }
                if (window.innerWidth <= 760) {
                    setResultArr(resultArr)
                    setCardList(resultArr.slice(0, 5), ...cardList)
                }
            })
            .catch((err) => {
                console.log(err)
                setBadRequest(true)
                setBadRequestText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
            })
            .finally(() => setPreloaderVisibility(false))
    }

    function handleMoreMovies() {
        if (cardList.length === 4 && window.innerWidth >= 1281) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth >= 1281) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 3 && window.innerWidth <= 1281) {
            setCardList(resultArr.slice(0, 6), ...cardList)
        }
        if (cardList.length === 6 && window.innerWidth <= 1281) {
            setCardList(resultArr.slice(0, 9), ...cardList)
        }
        if (cardList.length === 9 && window.innerWidth <= 1281) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 2 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 4), ...cardList)
        }
        if (cardList.length === 4 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 6), ...cardList)
        }
        if (cardList.length === 6 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 10), ...cardList)
        }
        if (cardList.length === 10 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 5 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 7), ...cardList)
        }
        if (cardList.length === 7 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 9), ...cardList)
        }
        if (cardList.length === 9 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 11), ...cardList)
        }
        if (cardList.length === 11 && window.innerWidth <= 990) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
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
            />
            <ButtonPluse
                visivleButtonPluse={visivleButtonPluse}
                handleMoreMovies={handleMoreMovies}
            />
            <Footer />
        </section>
    );
};

export default Movies;
