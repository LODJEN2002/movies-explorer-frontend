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
    const [visivleButtonPluse, setVisivleButtonPluse] = useState(false)
    const [checkBox, setCheckBox] = useState(JSON.parse(localStorage.getItem('checkBox')))
    const [valueSearch, setValueSearch] = useState(localStorage.getItem('value'))

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(cardList))
    }, [cardList])

    useEffect(() => {
        if (cardList.length === resultArr.length || resultArr.length === 0) {
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
                if (window.innerWidth <= 1030) {
                    setResultArr(resultArr)
                    setCardList(resultArr.slice(0, 2), ...cardList)
                }
                if (window.innerWidth <= 760) {
                    setResultArr(resultArr)
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

    function handleCheckBoxClick() {
        if (!checkBox) {
            localStorage.setItem('moviesCardList', JSON.stringify(cardList))
            localStorage.setItem('checkBox', JSON.stringify(!checkBox))
            console.log('вкл чекбокс')
            let newCardList = cardList.filter((card) => {
                if (card.duration <= 40) {
                    return card
                }
            })
            if (newCardList.length === 0) {
                setVisivleButtonPluse(false)
            }
            setCardList(newCardList)
        }
        if (checkBox) {
            setCardList(JSON.parse(localStorage.getItem('moviesCardList')))
            localStorage.setItem('checkBox', JSON.stringify(!checkBox))
            console.log('выкл чекбокс')
            setVisivleButtonPluse(true)
        }
    }


    function handleMoreMovies() {
        if (cardList.length === 4 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 12 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 16), ...cardList)
        }
        if (cardList.length === 16 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 20), ...cardList)
        }
        if (cardList.length === 20 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 24), ...cardList)
        }
        if (cardList.length === 24 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 28), ...cardList)
        }
        if (cardList.length === 28 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 32), ...cardList)
        }
        if (cardList.length === 32 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 36), ...cardList)
        }
        if (cardList.length === 36 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 40), ...cardList)
        }
        if (cardList.length === 40 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 44), ...cardList)
        }
        if (cardList.length === 44 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 48), ...cardList)
        }
        if (cardList.length === 48 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 52), ...cardList)
        }
        if (cardList.length === 52 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 56), ...cardList)
        }
        if (cardList.length === 56 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 60), ...cardList)
        }
        if (cardList.length === 60 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 64), ...cardList)
        }
        if (cardList.length === 64 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 68), ...cardList)
        }
        if (cardList.length === 68 && window.innerWidth >= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 72), ...cardList)
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
        if (cardList.length === 12 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 15), ...cardList)
        }
        if (cardList.length === 15 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 18), ...cardList)
        }
        if (cardList.length === 18 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 21), ...cardList)
        }
        if (cardList.length === 21 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 24), ...cardList)
        }
        if (cardList.length === 24 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 27), ...cardList)
        }
        if (cardList.length === 27 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 30), ...cardList)
        }
        if (cardList.length === 30 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 33), ...cardList)
        }
        if (cardList.length === 33 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 36), ...cardList)
        }
        if (cardList.length === 36 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 39), ...cardList)
        }
        if (cardList.length === 39 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 42), ...cardList)
        }
        if (cardList.length === 42 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 45), ...cardList)
        }
        if (cardList.length === 45 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 48), ...cardList)
        }
        if (cardList.length === 48 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 51), ...cardList)
        }
        if (cardList.length === 51 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 54), ...cardList)
        }
        if (cardList.length === 54 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 57), ...cardList)
        }
        if (cardList.length === 57 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 60), ...cardList)
        }
        if (cardList.length === 60 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 63), ...cardList)
        }
        if (cardList.length === 63 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 66), ...cardList)
        }
        if (cardList.length === 66 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 69), ...cardList)
        }
        if (cardList.length === 69 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 72), ...cardList)
        }
        if (cardList.length === 72 && window.innerWidth <= 1281 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 75), ...cardList)
        }
        if (cardList.length === 2 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 4), ...cardList)
        }
        if (cardList.length === 4 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 6), ...cardList)
        }
        if (cardList.length === 6 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 8), ...cardList)
        }
        if (cardList.length === 8 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 10), ...cardList)
        }
        if (cardList.length === 10 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 12), ...cardList)
        }
        if (cardList.length === 12 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 14), ...cardList)
        }
        if (cardList.length === 14 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 16), ...cardList)
        }
        if (cardList.length === 16 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 18), ...cardList)
        }
        if (cardList.length === 18 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 20), ...cardList)
        }
        if (cardList.length === 20 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 22), ...cardList)
        }
        if (cardList.length === 22 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 24), ...cardList)
        }
        if (cardList.length === 24 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 26), ...cardList)
        }
        if (cardList.length === 26 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 28), ...cardList)
        }
        if (cardList.length === 28 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 30), ...cardList)
        }
        if (cardList.length === 30 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 32), ...cardList)
        }
        if (cardList.length === 32 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 34), ...cardList)
        }
        if (cardList.length === 34 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 36), ...cardList)
        }
        if (cardList.length === 36 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 38), ...cardList)
        }
        if (cardList.length === 38 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 40), ...cardList)
        }
        if (cardList.length === 40 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 42), ...cardList)
        }
        if (cardList.length === 42 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 44), ...cardList)
        }
        if (cardList.length === 44 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 46), ...cardList)
        }
        if (cardList.length === 46 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 48), ...cardList)
        }
        if (cardList.length === 48 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 50), ...cardList)
        }
        if (cardList.length === 50 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 52), ...cardList)
        }
        if (cardList.length === 52 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 54), ...cardList)
        }
        if (cardList.length === 54 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 56), ...cardList)
        }
        if (cardList.length === 56 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 58), ...cardList)
        }
        if (cardList.length === 58 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 60), ...cardList)
        }
        if (cardList.length === 60 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 62), ...cardList)
        }
        if (cardList.length === 62 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 64), ...cardList)
        }
        if (cardList.length === 64 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 66), ...cardList)
        }
        if (cardList.length === 66 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 68), ...cardList)
        }
        if (cardList.length === 68 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 70), ...cardList)
        }
        if (cardList.length === 70 && window.innerWidth <= 1030 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 72), ...cardList)
        }
        if (cardList.length === 5 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 7), ...cardList)
        }
        if (cardList.length === 7 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 9), ...cardList)
        }
        if (cardList.length === 9 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 11), ...cardList)
        }
        if (cardList.length === 11 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 13), ...cardList)
        }
        if (cardList.length === 13 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 15), ...cardList)
        }
        if (cardList.length === 15 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 17), ...cardList)
        }
        if (cardList.length === 17 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 19), ...cardList)
        }
        if (cardList.length === 19 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 21), ...cardList)
        }
        if (cardList.length === 21 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 23), ...cardList)
        }
        if (cardList.length === 23 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 25), ...cardList)
        }
        if (cardList.length === 25 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 27), ...cardList)
        }
        if (cardList.length === 27 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 29), ...cardList)
        }
        if (cardList.length === 29 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 31), ...cardList)
        }
        if (cardList.length === 31 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 33), ...cardList)
        }
        if (cardList.length === 33 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 35), ...cardList)
        }
        if (cardList.length === 35 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 37), ...cardList)
        }
        if (cardList.length === 37 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 39), ...cardList)
        }
        if (cardList.length === 39 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 41), ...cardList)
        }
        if (cardList.length === 41 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 43), ...cardList)
        }
        if (cardList.length === 43 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 45), ...cardList)
        }
        if (cardList.length === 45 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 47), ...cardList)
        }
        if (cardList.length === 47 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 49), ...cardList)
        }
        if (cardList.length === 49 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 51), ...cardList)
        }
        if (cardList.length === 51 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 53), ...cardList)
        }
        if (cardList.length === 53 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 55), ...cardList)
        }
        if (cardList.length === 55 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 57), ...cardList)
        }
        if (cardList.length === 57 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 59), ...cardList)
        }
        if (cardList.length === 59 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 61), ...cardList)
        }
        if (cardList.length === 61 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 63), ...cardList)
        }
        if (cardList.length === 63 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 65), ...cardList)
        }
        if (cardList.length === 65 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 67), ...cardList)
        }
        if (cardList.length === 67 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 69), ...cardList)
        }
        if (cardList.length === 69 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 71), ...cardList)
        }
        if (cardList.length === 71 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 73), ...cardList)
        }
        if (cardList.length === 73 && window.innerWidth <= 760 && resultArr.length !== 0) {
            setCardList(resultArr.slice(0, 75), ...cardList)
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
