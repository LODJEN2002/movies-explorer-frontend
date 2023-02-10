import './Movies.css';
import Header from '.././Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonPluse from './ButtonPluse/ButtonPluse';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
    const [cardList, setCardList] = useState(JSON.parse(localStorage.getItem('movies')))
    const [resultArr, setResultArr] = useState([])
    const [preloaderVisibility, setPreloaderVisibility] = useState(false)
    const [badRequest, setBadRequest] = useState(false)
    const [badRequestText, setBadRequestText] = useState('')
    const [visivleButtonPluse, setVisivleButtonPluse] = useState(true)
    const [checkBox, setCheckBox] = useState(JSON.parse(localStorage.getItem('checkBox')))
    const [valueSearch, setValueSearch] = useState(localStorage.getItem('value'))

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(cardList))// if (checkbox) попробуй))
    }, [cardList])

    useEffect(() => {
        if (cardList.length === resultArr.length || cardList.length === 12) {
            setVisivleButtonPluse(false)
        }
    }, [cardList, resultArr])

    const matched = (str, match) => str.toLowerCase().includes(match.toLowerCase());

    function handleSearch(value) {
        const { name } = value
        setPreloaderVisibility(true)
        setVisivleButtonPluse(true)
        setBadRequest(false)

        moviesApi.getMovies()
            .then((res) => {
                let resultArr = res.filter((item) => {
                    if (!checkBox) {
                        if (matched(item.nameRU, name)) {
                            return true
                        }
                    }
                    if (checkBox) {
                        if (matched(item.nameRU, name) && item.duration <= 40) {
                            return true
                        }
                    }
                })
                let newArr = resultArr.slice(0, 12)
                if (resultArr.length === 0) {
                    setBadRequest(true)
                    setBadRequestText('Ничего не найдено')
                }
                if (window.innerWidth >= 1281) {
                    setResultArr(newArr)
                    setCardList(resultArr.slice(0, 4), ...cardList)
                }
                if (window.innerWidth <= 1281) {
                    setResultArr(newArr)
                    setCardList(resultArr.slice(0, 3), ...cardList)
                }
                if (window.innerWidth <= 990) {
                    setResultArr(newArr)
                    setCardList(resultArr.slice(0, 2), ...cardList)
                }
                if (window.innerWidth <= 760) {
                    setResultArr(newArr)
                    setCardList(resultArr.slice(0, 5), ...cardList)
                }
            })
            .catch(() => {
                setBadRequest(true)
                setBadRequestText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setPreloaderVisibility(false)
                localStorage.setItem('value', name)
                localStorage.setItem('checkBox', JSON.stringify(checkBox))

            })
    }

    function handleMoreMovies() {
        if (cardList.length === 4 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 3 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 6), ...cardList)
        }
        if (cardList.length === 6 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 9), ...cardList)
        }
        if (cardList.length === 9 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 2 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 4), ...cardList)
        }
        if (cardList.length === 4 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 6), ...cardList)
        }
        if (cardList.length === 6 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 10), ...cardList)
        }
        if (cardList.length === 10 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 5 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 7), ...cardList)
        }
        if (cardList.length === 7 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 9), ...cardList)
        }
        if (cardList.length === 9 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 11), ...cardList)
        }
        if (cardList.length === 11 && window.innerWidth <= 990 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
    }

    function handleCheckBoxClick() {
        if (!checkBox) {
            localStorage.setItem('moviesCardList', JSON.stringify(cardList))
            let newCardList = cardList.filter((card) => {
                if (card.duration <= 40) {
                    return card
                }
            })
            if (newCardList.length === 0) {
                setVisivleButtonPluse(false)
            }
            setCardList(newCardList)
            console.log('Возврат на короткий метр')

        }
        if (checkBox) {
            setCardList(JSON.parse(localStorage.getItem('moviesCardList')))
            console.log('Возврат на норм фильмы')

            setVisivleButtonPluse(true)
        }
    }

    return (
        <section className='Movies'>
            <Header
            />
            <SearchForm
                setCheckBox={setCheckBox}
                checkBox={checkBox}
                handleCheckBoxClick={handleCheckBoxClick}
                handleSearch={handleSearch}
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
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
