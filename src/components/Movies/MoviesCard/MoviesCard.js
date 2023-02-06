import './MoviesCard.css';
import { useEffect, useState } from 'react';
import mainApi from '../../../utils/MainApi';

function MoviesCard(props) {
    const { country,
        description,
        director,
        duration,
        movieId,
        nameEN,
        nameRU,
        trailerLink,
        year,
    } = props

    const [like, setLike] = useState(false)

    useEffect(() => {
        mainApi.getSavedMovies()
            .then((res) => {
                res.find((element) => {
                    if (element.movieId === movieId) {
                        setLike(true)
                    }
                })
            })
            .catch(err => console.log(err))
    }, [])

    function handleLikeCard() {
        let image = 'https://api.nomoreparties.co' + props.link
        let thumbnail = 'https://api.nomoreparties.co' + props.link

        mainApi.saveMovie(
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            thumbnail,
            movieId,
            nameRU,
            nameEN,
            // _id,
        )
            .then(() => setLike(!like))
            .catch(err => console.log(err))
    }

    function onCardDelete() {
        setLike(!like)
        mainApi.getSavedMovies()
            .then((res) => {
                res.forEach((element) => {
                    if (element.movieId === movieId) {
                        mainApi.deliteMovies(element._id)
                    }
                })
            })
    }

    return (
        <section className='MoviesCard'>
            <a
                href={props.trailerLink}
                target='_blank' rel="noreferrer"
            >
                <img
                    className='MoviesCard__img'
                    src={'https://api.nomoreparties.co' + props.link}
                    alt={props.nameRU} />
            </a>
            <div className='MoviesCard__container'>
                <h3 className='MoviesCard__container-title'>{props.nameRU}</h3>
                <button
                    onClick={like ? onCardDelete : handleLikeCard}
                    className={like ? 'MoviesCard__button-like' : 'MoviesCard__button-dislike'}>
                </button>
            </div>
            <p className='MoviesCard__time'>
                {props.duration}
            </p>
        </section>
    );
};

export default MoviesCard;